---
path: /rss-bot
title: '@RSS Bot'
link: 'https://www.rssbot.app/'
postType: projectPost
blurb: Slack bot that generates RSS Feeds from links shared in a channel.
featured: true
---
We were looking for a simple solution for helping our developers keep up with links posted in some of our Slack channels due to frequent discussion pushing the links "above the fold" and out of the user's mind.

We could not find a good solution, so I built one that listens for URLs in Slack channels and asks the user who posted them if they want to add the URL to the RSS Feed. It also allows other users to add a link that was posted to the RSS Feed for that channel via a Message Action if the original poster (OP) chooses not to add the URL to the RSS Feed.

It will include any text the OP posted with the link and utilizes [metascraper](https://github.com/microlinkhq/metascraper) to unfurl the shared links.

It is open to the world at [https://www.rssbot.app/](https://www.rssbot.app/).

The source code is on GitHub: [https://github.com/InterwebAlchemy/scrape-rss-bot](https://github.com/InterwebAlchemy/scrape-rss-bot)
