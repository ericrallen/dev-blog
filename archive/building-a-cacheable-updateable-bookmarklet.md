---
path: /archive/building-a-cacheable-updateable-bookmarklet
date: 2013-04-19T21:22:18.395Z
title: Building a Cacheable Updateable Bookmarklet
---

**Note**: This may be common knowledge to many of you, but I couldn’t track down many good resources for this kind of thing while building my first bookmarklet.

While building the beta version of the bookmarklet for [Make My Password](http://makemypassword.com/), I found myself aggravated by the browser’s propensity for caching the bookmarklet and forcing me to clear the cache or use private browsing to test functionality. I also realized that since this was a better version, the bookmarklet’s functionality and appearance would be subject to rapid change based on user feedback and alterations to the application’s logic.

Building websites has made me used to this situation, and I almost always solve it using a query string with a version number, but in this case that wouldn’t work: you have to expect the normal user only bookmarks your bookmarklet once, so even if you update the query string for loading your bookmarklet’s JavaScript file, anyone who has already bookmarked it will still trigger the old version.

You could fix this by generating some random value or a value based on the current time so that the browser will never call the cached version of the file, but then you aren’t leveraging the performance boost that the browser cache was designed to provide.

I wanted to find a way to ensure that if I needed to update the bookmarklet’s code, every user would receive the newest version as soon as they used the bookmarklet, but I also wanted to load the cached version if there was nothing new to load.

We took a three part approach to solving this issue.

### Part I: The Bookmarklet Link
```js
javascript:(function() {
  //get current time in seconds
  var time=new Date().getTime()/1000;
  //append query string to loader url with 
  //timestamp as version number
  document
    .getElementsByTagName('body')[0]	
    .appendChild(document.createElement('script'))
    .src='//example.com/js/bookmarklet.loader.min.js?v=' + 
    time
  ;
})();
```

You’ll want to minify this script and point it to your javascript file, but the code above is your bookmarklet. We’ll handle the rest of the logic in another file so we can easily update the script whenever we need to.

So, our bookmarklet loads a file `bookmarklet.loader.min.js` that will never be cached because the current timestamp is always used as a query string.

It’s important that this file be as lightweight and focused as possible because it will be loaded every time the bookmarklet is run.

### Part II: The Lightweight, Uncacheable Bookmarklet Loader

```
	var ia_loader = (function() {
    	//we need to change this when we update our actual bookmarklet.min.js file
    	var v</em>num = '1.0.2';
    
    	//build url for loading bookmarklet logic
    	var ia_url = '//example.com';
    	var url = location.protocol +
    		ia_url +
        	'/js/bookmarklet.min.js?v=' +
        	v_num
    	;
    
    	//this will store our public vars and methods
    	//in this case we only have one public method
    	var pub = {};
    
    	//add <script> tag to the document to load our bookmarklet logic
    	pub.load_bookmarklet = function() {
    		var script = document.createElement("script");
        	script.src = url;
        	document.getElementsByTagName("head")[0]
        		.appendChild(script)
        	;
    	};
    
    	//make our public methods and properties accessible
    	return pub;
   	})();
    
    //load our bookmarklet
    ia_loader.load_bookmarklet();
```

This script, once minified, loads in about 1-25 ms on average on our Rackspace Cloud Sites setup with Cloud Flare enabled for the domain.

Now, you may be thinking that it seems stupid to add a JavaScript file to the document that just adds a different JavaScript file to the document, and there may be better ways to achieve this, but this is the one that I've gotten to work easily.

If you do know of a better way, please share it with us in the comments.

This script's purpose is really just to allow you to update the `v_num` variable whenever you make changes to your bookmarklet and want to push those changes to all of your bookmarklet's users.

If the `v_num` property hasn't changed, the browser will load a cached version of our actual logic if it can.

### Part III: The Cacheable Bookmarklet Logic

Now that we've loaded our bookmarklet's logic file, we can actually begin to do stuff.

The first thing you'll want to do if you have any external dependencies, like jQuery, Prototype, ZeptoJS, etc. is check to see if they have already been loaded by the current site. You may also need to make sure the necessary version has been loaded and if you are loading a different version, make sure you don't break the website when your bookmarklet loads.

I'm not going to go into all of our bookmarklet's logic here, but if there is any interest I can cover more specifics in another post.

There's a stripped-down version of the bookmarklet logic file so you can see how it works after the jump.

```
	var ia_bookmarklet = (function() {
    	var bm_version = '1.0.2'; //version of the bookmarklet
        var jq_version = '1.7.1'; //version of jQuery we're targeting
        var ia_jq; //var to map to jQuery (it will be our $ for this bookmarklet)
        var ia_url = '//example.com'; //domain where our libraries and code are hosted
        
        var pub = {}; //will store public methods and properties
        
        //our container
        pub.bookmarklet_container = 'internet_alcheme_bookmarklet_container';
        
        //boolean vars for checking the status of our libraries
        pub.zero_clip_ready = false;
        pub.zxcvbn_ready = false;

		//our jQuery checker
        //modified from: http://coding.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/)
        
        pub.initialize = function() {
        	//if jQuery isn't included already or it's a lower version
            if (window.jQuery === undefined || window.jQuery.fn.jquery < jq*version) {
            var done = false;
            var script = document.createElement("script");
            script.src = location.protocol +
            	"//ajax.googleapis.com/ajax/libs/jquery/" +
                jq*version +
                "/jquery.min.js"
            ;
            
            script.onload = script.onreadystatechange = function() {
            	if(!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            		done = true;
    
    				//if we loaded our own jQuery
    				//we need to put it into noConflict mode and map it to our own jQuery variable
    				ia_jq = jQuery.noConflict(true);

    				//the function containing our bookmarklet's initialization
    				bm_init();
         		}
            
            	document.getElementsByTagName("head")[0].
            		appendChild(script)
            	;
			//if jQuery was found and it is >= jq_version
			} else {
  				//just map jQuery to our mmp_jq var
  				ia_jq = jQuery;

  				//the function containing our bookmarklet's initialization
  				bm_init();
			}
		};

		//initialize the actual bookmarklet logic now that we've got jQuery all sorted out
    	function bm_init() {
    		//we add a loader to the window to let the user know stuff is happening
        	set_window();
        
        	//and we check the necessary libraries
        	check_libs();
        
        	//we set up an Interval to check the loaded status of our libraries
     	   ia_bookmarklet.check_timer = setInterval(
  				function() {
    				recheck_libs();
  				},
  				20
			);
		}

		//this adds the loader to the window function
    	set_window() { //add a preloader here }

		//actually perform our necessary operations function
   	 bm_logic() {
   			//clear the interval for checking our libraries
    		clearInterval(ia_bookmarklet.check_timer);

			//logic goes here
		}
    
    	//check the required libraries
    	//our bookmarklet required ZeroClipboard and ZXCVBN
    	function check_libs() {
    		//if we can't find ZeroClipboard we need to load it
        	if(window.ZeroClipboard === undefined) {
        		load_script('ZeroClipboard', '/*js/zero-clipboard/ZeroClipboard.min.js', 'zero*clip*ready');
        	//if it has already been loaded by the website
        	} else {
        		ia_bookmarklet.zero_clip_ready = true;
        	}

			//if we can't find zxcvbn we need to load it
			if(window.zxcvbn === undefined) {
  				load_script('zxcvbn', '/_js/zxcvbn/zxcvbn.js', 'zxcvbn_ready');
        	//if it has already been loaded by the website
			} else {
  				ia_bookmarklet.zxcvbn_ready = true;
			}
		}
    
    	//load our library scripts and set their loaded vars to true
    	function load_script(lib, src, toggle) {
    		var script = document.createElement("script");
       	 script.src = location.protocol +
        		ia_url +
           	 src +
           	 "?v=" +
        	    bm_version
    	    ;

			script.onload = script.onreadystatechange = function() {
        		ia_bookmarklet[var] = true;
            	log(lib + ' loaded');
   			};

			document.getElementsByTagName("head")[0].
        		appendChild(script)
        	;
		}
    
    	//check the loaded status of the libraries
    	function recheck_libs() {
    		//if our libraries are loaded we are good to go
   	     if(ia_bookmarklet.zxcvbn_ready && ia_bookmarklet.zero_clip_ready) {
        		//finally we get to actually do stuff
         	   bm_logic();
        	}
   	 }
    
    	//just a simplified, capability-checking function for logging to the console
    	function log(msg) {
    		if(window.console && console.log) {
    	    	console.log(msg);
    	    }
    	}
    
    	//make our public methods and properties accessible
    	return pub;
    })();
    
    //we want to make sure we aren't doubling up on our bookmarklet, so let's find the container we are going to add
    var ia_div = document.getElementById(ia_bookmarklet.bookmarklet_container);
    
    //if we didn't find our container, load the bookmarklet
    if(!ia_div) {
    	ia_bookmarklet.initialize();
    }

```
