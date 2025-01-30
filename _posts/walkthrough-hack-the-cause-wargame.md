---
title: Hack the Cause Wargame Walkthrough
date: 2015-09-02
excerpt: A walkthrough of the Hack the Cause CTF with helpful hints and explanations without revealing the flag for each level.
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
ogImage:
  url: /assets/images/blog-hero.jpg
---

This post is a walkthrough of a short, fun wargame I found.

A few months ago, [someone posted a link to a CTF that they had created in a few different InfoSec-related subreddits](https://www.reddit.com/r/hacking/comments/39yq4v/want_to_be_a_hacker/).

The author was very responsive to feedback and added several new levels, as well as converting some from a [RegEx](https://en.wikipedia.org/wiki/Regular_expression) to using an actual MySQL database.

Though there are only 8 levels as of this post (2015-09-02), this was a fun little Wargame. There may also apparently be some hidden flags according to the introduction.

**Note**: Unfortunately, the `hackthecause.info` game is no longer up.

Below, I'll go over each level in some detail mentioning what the vulnerability was, how to discover and exploit it, and give some brief notes regarding how to mitigate such a vulnerability based on my somewhat limited knowledge.

**WARNING**: Spoilers below!

## Level One

**Vulnerability**: Poor developer OpSec?
**Level Hint**: `Look in the most obvious of places`

Okay, this is the typical idiot test kind of level you generally see in these Wargame/CTF things.

Take a moment and look around on your own. If you absolutely can't do this one, you should probably stop the wargames and spend some time reading and maybe creating some basic web pages.

If you haven't figured this one out, Right-click the page and choose `Inspect` from the menu.

If you look through the various tags inside the `<body>` tag, you should see a few with inline styles like this: `style="display:none;"`.

If you take a peek at the one after the `hint-wrapper` and before the `success-wrapper`, you should find the password in plain text.

I won't divulge it here so that you do actually have to use your browser's Developer Tools.

Submit the password and get that first flag.

### Mitigating This Vulnerability

To mitigate this kind of vulnerability, don't ever put anything sensitive in your HTML. It is easily and plainly visible to any user of your site. Seriously, don't do it.

## Level Two

**Vulnerability**: Client-Side Revelation of Sensitive Data
**Level Hint**: `The title gives it away already`

This is basically a slightly more advanced version of Level One.

We're going to make use of our Developer Tools again, but this time we'll want to look specifically at the `l2.js` file.

On line 9, you should see an if statement that checks to see if the password is equal to a certain string. There's your password.

If you are having trouble finding the JavaScript file in your Developer Tools, do some searching to see how your browser and developer tools of choice handle this.

It should be fairly simple, but not all Developer Tools interfaces are quite as easy to understand at the beginning. Learning how to navigate them will be invaluable, though.

Submit the password and capture another flag.

### Mitigating This Vulnerability

Just like the vulnerability in Level One, this one can be mitigated in a similar manner: Don't put anything important or sensitive in your JavaScript.

This is also viewable by any user of your website.

At some point, you may need to expose an API Key at some point and that's something that, unfortunately, we have to just sort of accept. While you can store the API Key on the server and then retrieve via an AJAX request, users can easily insert a breakpoint and retrieve the API Key from the AJAX response. It's probably a better idea to keep any API calls on the server, but this is not always possible.

**Note**: Never expose an API Secret in your client-side JavaScript.

## Level Three

**Vulnerability**: Weak Password Protection
**Level Hint**: `Password: YmlyZFBlcnNvbg==`

Hmm, that's a bit of a crazy string compared to the alphanumeric, word-based passwords we've seen so far. Might as well try it though, right?

Okay, so that didn't work. Let's take a step back.

Information that should not or cannot be stored or transmitted in plaintext, is generally stored or transmitted as an encrypted, hashed, or encoded string.

Encryption is a two-way process where an encrypted string can be decrypted using a key. There are various levels and types of encryption that you should learn about on your own as this post isn't really meant to delve into any of that.

Hashing is a one-way process where a hashed string cannot be unhashed. This is how passwords should be stored, and when they are stored this way the only way to break them is to a find a string whose hash is the same as the hashed password string.

Encoding is a two-way process where an encoded string can easily be decoded using a known method to interpret the encoded string and parse it. This is common in URL parameters where you will often see strings encoded with a `%` sign preceding a character code. **It is important to note that encoding is not for protecting data, it is simply for changing its format to allow the string to be interpreted by something else.**

If you've never seen a string like this before, the repeated `=` at the end is a bit of a hint once you learn about Base64 Encoding. If a string isn't long enough, when it is Base64 encoded, it is padded with equal signs. This doesn't necessarily mean any string with multiple equal signs at the end is Base64 encoded, but [if you hear hooves, it's probably a horse and not a zebra](https://quoteinvestigator.com/2017/11/26/zebras/).

So, now we need to decode this Base64 encoded string. You can search for a tool, write a simple script of your own, or you can use one of the tools from this helpful list of [Cipher Tools](http://rumkin.com/tools/cipher/).

Base64 Decode the provided string, submit it as the password, and get that flag.

### Mitigating This Vulnerability

Don't encode or encrypt passwords; **ALWAYS hash them**. Beyond just hashing a password with a strong algorithm, you should also use a unique salt. I am by no means an expert in this area, so please seek guidance from a trusted and reliable source on the correct way to handle this if you are writing your own authentication system. **Also, if you can leverage an existing, trusted authentication provider, don't reinvent the wheel.**

## Level Four

**Vulnerability**: SQL Injection (SQLi) via Not Sanitizing User Input \*_Level Hint_: `SELECT * FROM users WHERE username="$user" AND password="$pass"`

It's worth mentioning that SQL Injection examples in CTF/Wargame challenges can often be somewhat frustrating due to the fact that most of them are simulated and therefore just look for a matching regex instead of actually running the query. Most of these regexes are very rigid and only accept very specific entries.

HackTheCause seems to handle this much better than others, which according to a post from the creator is because he abandoned the simulated aspect and let you inject commands into a real database. **Note**: I can no longer find the specific comment where the creator mentioned this.

Now, with this great power comes great responsibility. Don't attempt to do anything too heinous or no one will ever give us this kind of non-simulated exercise again. Don't be that person that ruins it for the rest of us forever.

So, if you don't know anything about SQL Injection, I recommend starting off with the [OWASP documentation](https://owasp.org/www-community/attacks/SQL_Injection), but I will briefly explain the concept we will be employing in this particular injection.

I also highly recommend building a basic web application in PHP that has a basic login form and a MySQL query against a database you created so that you can see how queries are actually structured and how they work. Don't search too deep into the security concerns of this at first or you won't get the same grasp on how someone who incorrectly implements this might do it.

Now, back to the challenge: We want to log in as the admin user, but we don't know this user's password.

The query for testing this could like something like this if it's insecure: `$query = "SELECT * FROM users WHERE user = '" . $username . "' AND pass = '" . $password . "'";`.

**Note**: The hint confirms this.

We can see that if the strings we receive from the user aren't sanitized, the user could potentially alter the execution of our query because we are just including those strings directly in the body of our query.

A very common injection against this kind of unsanitized login query is the following:

```
username: admin
password: ' OR 'x' = 'x
```

And if we were to plug those values into our query, we would get: `$query = "SELECT * FROM users WHERE user = 'admin' AND pass = '' OR 'x' = 'x'";`

We've taken the original intent of the query, to see if the username and password match those in the database, and basically made it always true by asserting our own alternate condition: `'x' = 'x'`

Because the inputs weren't sanitized, our quotation marks matched up with the ones present in the string and allowed us to bypass the password check altogether.

This vulnerability can pop up in several different ways in the wild, so while we probably won't see this exact string working for us every time there is an SQL Injection vulnerability, it gives us a good foundation for thinking about how things might work and how those things can be broken. Which I think is really the goal of any Wargame/CTF challenge.

Enter the username and password strings provided above and earn that flag.

**Protip**: You might want to switch the password field's type attribute from type="password" to type="text" so that you can see what you are entering. It makes typing in a string like this injection attempt much easier.

### Mitigating This Vulnerability

Never trust user input. Assume every user is actually out to break the system and exfiltrate, expose, and/or destroy all of your data.

Depending on your choice of back-end language and framework, there are various methods for sanitizing user input when using the input with an SQL query. Read the documentation and best practices for your back-end language of choice and follow the [SQL Injection Guidelines](https://owasp.org/www-community/attacks/SQL_Injection).

## Level Five

**Vulnerability**: Lack of Front-End Input Validation
**Level Hint**: `Dev tools are your friend`

Remember how the site wasn't sanitizing our inputs on the back-end in the last level?

Well, this time it's committing another great input sin: Not validating and checking inputs on the front-end. You really need to verify that you aren't receiving malicious input or just plain garbage on both sides of the application.

So, it looks like our only choice is `No`, but we need to submit `Yes`.

Remember those awesome Developer Tools that I told you would be invaluable?

Right-Click and `Inspect` the dropdown, double-click on the No in the `<option>No</option>` option tag, type `Yes`, hit Enter, submit the form, and grab your flag.

### Mitigating This Vulnerability

Just as we need to always sanitize inputs on the back-end, we need to validate and sanitize inputs on the front-end, too.

Once again, assume every user is out to ruin your day. Before you send the form to the back-end for processing, make sure that the input provided fits into the generally expected format or, in the case of dropdowns, radio buttons, and checkboxes, make sure the input is transmitting a valid choice as its value.

## Level Six

**Vulnerability**: Cross-Site Scripting (XSS) via Weak Filtering of User Input
**Level Hint**: `Repetition my dear Watson`

So, we just submit a script tag and everything works, right?

Enter the following string into the input: `<script>alert('pwn3d');</script>`

Hmm, that didn't seem to do anything, so let's see what is really going on here. Open up those handy Developer Tools again and pull up the `l6.js` file.

Let's add a breakpoint to line 12 `$('#usr-input').html(data);` by clicking in the gutter to the right of the line. A breakpoint halts the execution of your code at a certain line and allows you to see the current state of the code including any variables that are in scope.

If you've never used breakpoints before, search around a bit to learn how your browser and Developer Tools handle them. These are a very powerful tool to add to your arsenal.

Now let's enter our script tag into the box again and submit it: `<script>alert('pwn3d');</script>`

When the code stops execution, mouse over the `data` in the `function(data)` on line 11.

Hmm, it appears to start with `>`, which means it is missing `<script` and our code won't execute.

In this simple case, we can make an assumption that something is parsing out the string `<script`. While this might not be the case, we can test it by passing in a string that will reduce to `<script` once the original filter to remove `<script` has run.

Let's alter our script from above to attempt to test and/or bypass this filter: `<scr<scriptipt>alert('pwn3d');</script>`

Success! When the filter removed the `<script` string in the middle of our `<scr<scriptipt>` string left us with `<script>` and everything worked as we wanted.

Click OK on your alert and accept your flag.

### Mitigating This Vulnerability

When we sanitize input on the front-end, we also need to make sure that any filters we are using aren't really easy to bypass, **and we also need to make sure that we aren't just trusting that data when it gets to the backend.** Remember: never trust the user; escape everything before output.

## Level Seven

**Vulnerability**: Weak Password Protection
**Level Hint**: `Password: YWJGYmhjU2JlSA==`

Okay, we've seen this type of encoded string before, it's Base64 Encoded. This should be easy, right?

Let's fire up our handy crypto tool from earlier and decode our password.

Hmm, that doesn't seem to follow the pattern of the other passwords, huh? Let's try it anyway. Copy the Base64 decoded result into the password field and submit it.

Well, that didn't work.

Maybe it was encoded in some other way before being Base64 encoded? It takes a good amount of looking at these things to start identifying what they might be based on length, character set, and external contextual factors.

The neat thing about [lists of crypto tools like what I linked above](http://rumkin.com/tools/cipher/) is that it allows you to test a wide range of decoding and hashing algorithms. Start going through the list until you find one that gives you a string that either a) feels kind of like the passwords from the other levels or b) works when submitted.

Go ahead, we'll wait.

Okay, now that you've discovered the right encoding algorithm, let's talk about it a bit. Rot13 is a simple cipher encoding that takes a given character and moves it 13 places ahead in the alphabet. Rot, in this case, is an abbreviated form of "rotation." When Z (26) is reached, the counter starts back over at A (1) and continues to loop around. For example, the Rot13 of T is G.

You will often see Rot13'd text in Wargame/CTF challenges, so it's good to be aware of it.

### Mitigating This Vulnerability

Just as we decided you shouldn't encode your passwords or other sensitive data, you also shouldn't rely on multiple levels of encoding to protect data.

Once again, I am by no means an expert in this area, so please seek guidance from a trusted and reliable source on the correct way to handle this if you are writing your own authentication system. And, once again, try not to write your own authentication system if you can avoid it.

## Level Eight

**Vulnerability**: SQL Injection (SQLi) via Not Sanitizing User Input
**Level Hint**: `You need to work around the password field being hashed`

So, let's try our exploit from before and see what happens.

```
username: admin
password: ' OR 'x' = 'x
```

No luck there. If we check the hint, we can see it says the password is hashed. We probably won't have hints in the real world, so let's think about what gives away that something might be happening to our password input. Try submitting the same username and password again and look for a tell.

That error message seems to indicate a problem with the `Password` field, now that could be a generic message, or it could mean that our input, when hashed, did not match the expected hashed value for our user.

There's no reason we can't try a very similar exploit in that username field. Depending on how things are actually structured in the back-end it could still fail, but it's worth a shot.

```
username: admin' AND 'x' = 'x
password:
```

Huzzah! A flag.

### Mitigating This Vulnerability

Well, we started doing something with the password field's input before inserting it into our query string, but we also need to remember to sanitize the username field.

I'll reiterate, in case you skipped the information in Level Four: Depending on your choice of back-end language and framework, there are various methods for sanitizing user input when using the input with an SQL query. Read the documentation and best practices for your backend language of choice and follow the [SQL Injection Guidelines](https://owasp.org/www-community/attacks/SQL_Injection).

**Note**: It's also worth noting that beyond simply sanitizing, you should be using prepared statements if you're working directly with SQL statements in your code.
