---
path: /archive/wordpress-plug-boilerplate
date: 2013-09-14T21:32:11.783Z
title: WordPress Plug-in Boilerplate
---

I end up having to create a lot of WordPress plug-ins, which means I end up having to copy/paste or rewrite a lot of functionality. That kind of sucks, so I decided to stop doing it.

I wrote a simple, well-documented plug-in boilerplate that contains a lot of the functionality that I found myself needing frequently.

[WordPress Plug-in Boilerplate on GitHub](https://github.com/ericrallen/wp-base-plugin)


## What it Does

- Defines several global path variables that make dealing with directories easier
- Implements a simple system for maintaining, retrieving, and updating plug-in options
- Implements up a simple system for creating and deleting plug-in specific tables
- Implements a simple system for adding and removing plug-in specific capabilities
- Implements deactivation, activation, and uninstall functionality
- Checks for version number changes so necessary actions can be performed on version updates
- Implements a method for plug-in specific debug.log messages with a plug-in specific namespace prepended to them


## How to Use it

1. Fork or download from [WordPress Plug-in Boilerplate on GitHub](https://github.com/ericrallen/wp-base-plugin)
2. Follow the comment blocks to edit the boilerplate and generate your basic plug-in
3. Begin adding your own actions, methods, JavaScript, CSS, etc.
4. Test your plug-in
5. Submit to the WordPress plug-in repository
6. Profit!


## Functionality

**Plugin Prefix**

Define a prefix in the `Plugin_Name_Options` class for your option names, tables names, capabilities, page slugs, etc. so you only have to write it once:

```php
//prefix for option names, table names, and capability names
public $prefix = 'plugin_name';
```

You can use the `$this->fix_name($slug)` method of the `Plugin_Name` class to append this prefix to any string.

If you want to refer to the prefix in the `Plugin_Name` class, you can reference it as `$this->options->prefix`.

**Plugin Debug Namespace**

Define a namespace in the `Plugin_Name_Options` class to be prepended to any messages you have your plugin send to the debug.log so you can easily find your debug statements in the log.

```php
//namespace for any Debug messages
public $namespace = 'PLUGIN NAME';
```

If you use the `$this->log($msg, $namespace)` method in the `Plugin_Name` class, you can send it a custom namespace or the namespace defined in the `Plugin_Name_Options` class will be used.

If you want to refer to the namespace in the Plugin_Name class, you can reference it as `$this->options->namespace`.

**Capabilities**

Define capabilities in the `Plugin_Name_Options` class by adding them to the associative array in the `set_capabilities()` method.

The array key for a set of capabilities should be the required capability a role needs for your capability to be added.

In the example below we are adding a capability that requires the `manage_options` capability. **NOTE**: We are using `$this->prefix` to prepend our plugin prefix to the capability name

```php
//set up capability array
private function set<em>capabilities() {
  //add capabilities to this array as
  //'required_capability' => array('capability_to_grant')
  $this->caps = array(
    'manage_options' => array(
      $this->prefix . 'capability'
    )
  );
}
```

I generally refer to these capabilities when adding admin pages or checking user access by refering to their array key: `$this->options->caps['manage_options'][0]`.

If you have a lot of various capabilities, you may want to set up an array mapping of capability slugs and reference them that way.

In the future I may shift to using a slug for each capabilities key and mapping them to a simpler point of reference.

**Options**

Define options in the `Plugin_Name_Options` class by adding them to the associative array `$this->opts`.

The options array will be JSON encoded and decoded when being stored and retrieved from the DB.

```php
//set up options array
private function set<em>options() {
  $this->opts = array(
    $this->prefix . 'version' => $this->v</em>num,
    $this->prefix . 'options' => array(
      //add options to this array as
      //'option_name' => 'option_value'
      //this allows us to only store two options in the table
      //one will keep our version number and the other will keep a JSON encoded
      //string of all of our other options
    )
  );
}
```

To access any of the options in the `Plugin_Name` class, you can reference them like this: `$this->options->opts['slug']`.

To access the current options values in the `Plugin_Name` class, you can reference the settings array: `$this->settings['slug']`.

**Tables**

Define tables in the `Plugin_Name_Options` class by adding them to the associative array `$this->tables`.

```php
//set up table array
private function set_tables() {
  //set the table name slug as a key for the $this->tables array
  //and add the MySQL CREATE statement as the value for that key
  $this->tables['main'] = "CREATE TABLE " . $this->prefix . 'main' . " (
    ID int(15) NOT NULL AUTO</em>INCREMENT,
      column_name varchar(255),
      PRIMARY KEY (ID)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1"
  ;
}
```

To access the table names in the `Plugin_Name` class, you can reference them like this: `$this->tables['slug']`.

**Updating**

If you need to perform maintenance when updating your plugin, tie into the `pre_update_option()` method in the `Plugin_Name` class.

There is a comment that starts `//IMPORTANT` to show you where to inject your update code.

**WordPress Plug-in Repository**

Make sure to fill out the `readme.txt` before submitting to the WordPress repository and include some screenshots if you can.

Here is a link to WordPress’ example `readme.txt`: http://wordpress.org/plugins/about/readme.txt

**Deploying**

So, you want to host your plug-in on GitHub but also have it available in the WordPress Plug-in Repository? No problem.

I’ve included a version of the `deploy.sh` script found here: https://gist.github.com/BFTrick/3767319

All you need to do is edit the script to reflect the SVN information for your WordPress plug-in and then navigate to the folder for your plugin and type `./deploy.sh` and let the script work its magic.

A few notes about deploying:

- The script is pretty literal in it’s reading of the plugin header comment, so don’t muck with it’s formatting or placement.
- The script will create tags for you based on the version number in your plugin header comment and the release version in your `readme.txt` so make sure they are the same.
- The script will push the master branch and latest tag to GitHub so you don’t have to worry about pushing before you deploy.
- WordPress (or SVN, not sure which) doesn’t seem to like letters in its version numbers, so I stick with semantic versioning format: `0.0.1`, `0.0.2`, etc.
- You should add `deploy.sh` to your `.gitignore` ([I recommend globally](http://stackoverflow.com/questions/7335420/global-git-ignore#answer-7335487)) so you don’t give anyone access to deploy your plugin.


## Feedback

If you have any questions, comments, concerns, or feature requests you can post them here as a comment, contact me via Twitter [@allenericr](https://twitter.com/allenericr), or create an issue on GitHub ([WordPress Plug-in Boilerplate Issues on GitHub](https://github.com/ericrallen/wp-base-plugin/issues)).


