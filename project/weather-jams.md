---
path: /weather-jams
title: Weather Jams
link: 'http://weatherjams.com/'
postType: projectPost
blurb: Novel approach to streaming music based on the weather.
featured: false
---
I built this hybrid mobile app using PhoneGap/Cordova as a Studio Project when I was
working for [Social Design House](http://socialdesignhouse.com/). We wanted to be able
to just play music based on the current weather - or some weather condition that you
wanted to hear music for.

We leveraged [8tracks](https://8tracks.com/) to get playlists and I ended up spending
more time listening to music and decide what tags should map to what weather conditions
than I did actually coding the app. For some reason I thought I jQuery plugin was the
ideal way to interface with the 8tracks API and also released a small open source
library for handling that: [jquery.eightTracks](https://github.com/ericrallen/jquery.eightTracks).

After release, it was almost immediately ripped off by an enterprising developer in Veitnam
who just repackaged our app with advertising added in. It took awhile to get his app removed
from the App Store, and his seemed to just be approved without much question while we
had to spend some time going back and forth with Apple about the background audio
capability.
