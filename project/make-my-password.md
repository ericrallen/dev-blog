---
path: /make-my-password
title: Make My Password
link: 'http://makemypassword.com/'
postType: projectPost
blurb: Simple and clean random password generator.
featured: true
---
Before Password Managers were all the rage, I built this tool to help with all of the
random strings I needed when I was working for [Social Design House](http://socialdesignhouse.com/). After I had tested it internally for a bit, we slapped some design on it,
[made a bookmarklet](https://ericrallen.dev/archive/building-a-cacheable-updateable-bookmarklet),
and released it to the world to see if anybody else wanted to use it.

There was a pretty great response, and it was a fun project, though I'd build it totally
client side now instead of relying on the server to generate the random data and return
the password over the network.

I haven't worked there in several years and haven't touched the code in forever, so there
are a few bugs that need to be addressed on modern computing devices - it seems to have a
real issue with hybrid tablet devices using anything other than touch.
