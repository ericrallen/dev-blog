---
title: Your URL is an Interface, Too
date: 2025-02-27
excerpt: "Can you use your application's URL as an interface? Spoiler Alert: Yes. Will users interact with it? Maybe."
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
coverImage: /assets/blog/url-bar-as-interface/interweb-wtf.png
ogImage:
  url: /assets/blog/url-bar-as-interface/interweb-wtf.png
---

Interfaces are abstractions that facilitate [exchanging information across a boundary](<https://en.wikipedia.org/wiki/Interface_(computing)>). That "boundary" might be between:

- Between two classes in the same codebase, a programmatic interface, like using [TypeScript's `interface`](https://www.typescriptlang.org/docs/handbook/interfaces.html) to define the shape of the parameters that some component expects as arguments or the shape of the data that some function returns
- Between your application and a third-party application (or your server) via an Application Programming Interface (API), like using [Open Weather Map](https://openweathermap.org/api) to display the current weather for a specific location
- Between the user and your application:
  - If your application runs in a shell, this would probably be a Command Line Interface (CLI), like using `git` to commit changes to a branch and push that branch to a remote repository - or a Terminal UI (TUI), like [Glow](https://github.com/charmbracelet/glow) or any other [Charm](https://charm.sh/) apps if you're feeling fancy
  - If your application runs in a window, this would be a User Interface (UI), like browsing the Interweb or listening to music through the Spotify desktop app

But almost any [touchpoint](https://en.wikipedia.org/wiki/Touchpoint) with your user is an interface. One touchpoint, often overlooked but ever present, is the Uniform Resource Locator ([URL](https://developer.mozilla.org/en-US/docs/Glossary/URL)).

We can't control the actual [browser chrome](https://www.nngroup.com/articles/browser-and-gui-chrome/) of the URL Bar, but we can do some [neat](http://glench.com/hash/#) and [interesting](https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/) things with it and [Unicode](https://flaviocopes.com/javascript-unicode/) in many browsers.

::video{src=/assets/blog/url-bar-as-interface/url-title-spectrum-analyzer.mp4}

While these demos are fun (I even added an [audio spectrum analyzer to the URL Bar](https://github.com/DVDAGames/blog/blob/main/README.md#url-bar-spectrum-analyzer) of the site for my nascent [indie game studio](https://dvdagames.com/)), they are mostly impractical in real applications. They also aren't the kind of "interface" I'm thinking about here.

I'm imagining a CLI in the URL bar - similar to an API but without API Keys, Bearer Tokens, and client Software Development Kits ([SDKs](https://www.ibm.com/think/topics/api-vs-sdk)).

**Note**: Please [share](https://github.com/ericrallen/dev-blog/discussions/82) any practical examples of an application using the URL Bar for clever feedback or interaction. I'd love to see some real-world use cases.

Even though [URLs are complicated](https://www.netmeister.org/blog/urls.html), if your user base is technical, they're familiar with how URL paths represent directories and may have some expectations around what should happen when they manipulate those paths.

I've been exploring URL-based interfaces while building a privacy-focused, user-centered [URL shortener](https://en.wikipedia.org/wiki/URL_shortening) for the modern web: [Interweb.WTF](https://www.interweb.wtf/).

![Screenshot of Interweb.WTF homepage](interweb-wtf.png)

**Note**: Interweb.WTF is still in private beta; only [invited users](https://github.com/InterwebAlchemy/interweb-wtf/discussions/1) can use the URL-shortening functionality.

In designing this application, I wanted power users to be able to interact with some of the most important features without having to navigate to the UI. The whole point of a URL shortener is to use its URLs, so I wanted to empower users to inspect [WTF Links](https://www.interweb.wtf/docs/concepts/wtf-links), expand [shortlinks](https://www.interweb.wtf/docs/concepts/shortlinks) from other providers (like [bit.ly](https://bitly.com/), [buff.ly](https://buffer.com/), etc.), and clean [tracking parameters](https://www.interweb.wtf/docs/concepts/tracking) from any URLs without having to log in or navigate through the Interweb.WTF interface.

## Link Inspector

![Screenshot of WTF Link Inspector](/assets/blog/url-bar-as-interface/wtflink-inspector.png)

Interweb.WTF allows anyone to preview where one of our shortlinks will take them by appending `/info` to any WTF Link. For example, if a user navigates to `interweb.wtf/go/patient-recipe` they'll be redirected to the [Chess Tutoring in the Age of ChatGPT](https://interwebalchemy.com/posts/building-a-chess-tutor/) blog post on this site. You may never know where a shortlink has come from, but with the [WTF Link Inspector](https://www.interweb.wtf/go/patient-recipe/info), you can always find out where it's going.

The WTF Link Inspector gives end users some assurances about the legitimacy of a WTF Link:

- **True Destination**: reveal the full URL
- **Current Status**: check the full URL's current HTTP Status Code
- **Redirect Alerts**: warn the user if the full URL tries to redirect to some other URL
- **Screenshot**: show a screenshot of the content of the full URL when the WTF Link was created
- **Summary**: show a summary of the full URL's content when the WTF Link was created, powered by the [Kagi Universal Summarizer](https://help.kagi.com/kagi/api/summarizer.html)
- **Metadata**: display relevant metadata, like `Content-Type` and language (currently, we check if the `lang` attribute is present on the page's `<html>` tag, but support for better language detection methods is on the roadmap)

## Shortlink Expander

![Screenshot of Shortlink Expander](/assets/blog/url-bar-as-interface/shortlink-expander.png)

If you encounter a shortlink from another provider, you probably don't know where it will take you because [shortlinks are scary](https://gcs.civilservice.gov.uk/blog/link-shorteners-the-long-and-short-of-why-you-shouldnt-use-them/).

Other services exist for expanding shortened URLs, and URL Shorteners like Bitly provide a [link checker](https://support.bitly.com/hc/en-us/p/link-checker) for `bit.ly` links. Bitly also allows you to append a + to any Bit.ly link to see its destination.

We wanted to make it easy for anyone to expand any shortlink they find. You can prefix any shortink with`interweb.wtf/is/` to pull up the Short Link Expander. For example, if you copied this Bitly URL [https://bit.ly/1sNZMwL](https://bit.ly/1sNZMwL), you could type `interweb.wtf/is/` into your URL Bar and then paste the Bitly link to head to [interweb.wtf/is/https:/bit.ly/1sNZMwL](https://www.interweb.wtf/is/https://bit.ly/1sNZMwL) and pull up the [Shortlink Expander](https://www.interweb.wtf/docs/expand).

The Expander includes most of the features of the WTF Link Inspector, except for summaries, and it cleans the full URL of any tracking parameters:

- **No Tracking**: clean any tracking parameters from the full URL and show which tracking parameters were removed
- **True Destination**: reveal the full URL
- **Current Status**: check the full URL's current HTTP Status Code
- **Redirect Alerts**: warn the user if the full URL tries to redirect to some other URL
- **Screenshot**: show a screenshot of the content of the full URL when the WTF Link was created
- **Summary**: show a summary of the full URL's content when the WTF Link was created, powered by the [Kagi Universal Summarizer](https://help.kagi.com/kagi/api/summarizer.html)
- **Metadata**: display relevant metadata, like `Content-Type` and language (currently, we check if the `lang` attribute is present on the page's `<html>` tag, but support for better language detection methods is on the roadmap)

## Link Cleaner

![Screenshot of Link Cleaner](/assets/blog/url-bar-as-interface/link-cleaner.png)

A common use case for shortlinks is to include a bunch of tracking parameters in a URL that will be shared on social media, in a presentation, or in printed advertising. [We don't like tracking parameters](https://nordvpn.com/blog/how-to-remove-tracking-parameters-from-url/).

There are other [link cleaners](https://linkcleaner.app/), but Interweb.WTF aggressively removes any tracking parameters when shortening a URL into a WTF Link or expanding a shortlink from another URL shortener, so we also exposed that [URL Cleaner](https://www.interweb.wtf/docs/clean) to users.

You can prefix any unshortened URL with `interweb.wtf/clean/` and we'll clean any tracking parameters and give you back a nice, clean URL with a visualization of which known tracking parameters were embedded in the query string.

For example, if you copy a URL like `https://interwebalchemy.com/posts/building-a-chess-tutor?utm_source=interweb.wtf&utm_campaign=docs&v=2025-01-17&share=true&mode=reader`, you might not want to keep all those `utm_` tracking tags when you share it with someone else. Just type `interweb.wtf/clean/` into your URL Bar and then paste in your link to use the [URL Cleaner](https://interweb.wtf/clean/https://www.interweb.wtf/clean/https://interwebalchemy.com/posts/building-a-chess-tutor?utm_source=interweb.wtf&utm_campaign=docs). You can copy and paste the clean URL from the URL Cleaner or choose to be sent to the clean URL.

## Beyond the URL Bar

![Screenshot of QR Code and WTF Link in presentation slide](/assets/blog/url-bar-as-interface/interweb-wtf-qr-code.png)

While this URL Interface still interacts with the more traditional [website UI](https://www.interweb.wtf/docs/interfaces/web), it maintains the [affordance](https://www.interaction-design.org/literature/topics/affordances) that "`interweb.wtf` URLs do stuff."

For a URL Interface to work, an application needs short, simple URL paths that are easy to type and remember. The server must also reliably and consistently automatically redirect to the correct, fully qualified URL, so users only need to remember the hostname, top-level domain (TLD), and path.

`interweb.wtf` redirects to https://www.interweb.wtf/, so end users only need to remember `interweb.wtf/is/` or `interweb.wtf/clean/`. WTF Links can be shared as `interweb.wtf/go/[slug]` (where `[slug]` is the auto-generated, human-readable identifier). Having to [faff](https://dictionary.cambridge.org/dictionary/english/faff) about with subdomains, protocols, and complicated paths ruins the simplicity of the URL as an interface for the end user.

Because we believe users should feel safe when using our shortlinks, we also allow anyone to set a browser cookie (the only cookie we use) that indicates they always want to be redirected to the WTF Link Inspector instead of the resolved URL when accessing a WTF Link.

Taking this one step further, the QR Codes we automatically generate for each WTF Link **always** redirect to the WTF Link Inspector because [QR Codes are dangerous](https://theconversation.com/how-qr-codes-work-and-what-makes-them-dangerous-a-computer-scientist-explains-177217).

![Screenshot of Interweb.WTF API Docs](/assets/blog/url-bar-as-interface/interweb-wtf-api.png)

Because a good tool meets users where their workflows exist, Interweb.WTF also provides a basic [API interface](https://www.interweb.wtf/docs/interfaces/api) for registered users.

I don't know if other people will remember and use these URL commands, but I'm the primary target for Interweb.WTF, and it was built to serve my own need: shortening URLs for presentations.

> The best investment is in the tools of one's own trade.
>
> \- Benjamin Franklin

I know I _will_ use it, and that's all that matters.
