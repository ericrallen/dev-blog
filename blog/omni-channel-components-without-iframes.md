---
path: /blog/omnichannel-components-without-iframes
title: Omnichannel Components Without iFrames
date: 2019-03-17T12:22:13.699Z
postType: blogPost
featured: true
---
**Problem**: The business wants to share components across all of its channels - mobile app, unauthenticated web, various web apps, etc.

**Solution**: Omnichannel components.

## Omnichannel? What's that?

[Omnichannel](https://en.wikipedia.org/wiki/Omnichannel) is an buzzword that referes to busiensses having a "cross-channel content strategy" in order to "improve their user experience."

You're probably thinking to yourself, "What the heck is a channel?"

Let's consider a hypothetical finanicial institution - we'll call it **MyBank**. Our new bank has your typical checking, savings, CDs, and IRA accounts available. Let's say they also just recently acquired a credit card and auto loan arm, and that they don't have any physical locations, but have put a large number of ATM kiosks in major cities across the US. MyBank is working on rolling out a new digital assistant/chatbot system that allows customers to transact conversationally.

Keep MyBank in mind as we'll be using it as an example throughout this post.

## Channels: A Primer

A **channel** is just a way in which the business interacts with a customer or potential customer. Here are some examples of a channels:

- targetted communication through email
- ads embedded in a website
- posts on social media
- web application
- landing pages
- mobile application

It's also worth noting that if you have a large enterrpise organization, there are likely to be multiple sub-channels in some of these larger buckets. If your web application is split across teams and lines of business, each line becomes it's own channel. This can be fine if everyone is sharing one Pattern Library for building their applications, but this is rarely the case.

In this example MyBank has several channels to manage, let's break out a few that we can talk about:

- *Mobile Application*: As a digital bank, this is one of their most important channels for ensuring their customers can access their account anywhere.
- *Web Application*: For those that don't like the idea of banking through a phone, they'll need a solid web app - remember that sub-channel issue I mentioned above? It comes into play here because we have several sub-channels due to business needs and organizational decisions:
    - *Marketing Site*: The unauthenticated experience is going to be heavily targetted and tweaked to maximize customer acquisition and account opening; it probably runs on just about every Adobe product you can imagine, and a few you weren't even aware of
    - *Online Banking*: The authenticated app was built using React. It's a bit old and there's a lot of technical debt built up, but it's a workhorse.
    - *Credit Cards*: The company we acquired for credit cards was using Angular for their web app. Unfortunately the app is old and most of it was written using AngularJS (v1.6). The newest features are being created in the Angular (v7.2 as that's what was avialble at the time of this posting).
    - *Auto Loans*: The company we acquired for auto loans was using Vue for their web app. Let's say they've kept it up to date and cleaned up a lot of technical debt, so the app is in a pretty good state.
- *ATM Kiosks*: Those things have to have an interface of some sort, right? Customers will be interacting with them? That's a channel.
- *Chatbot*: Technophiles might be banking via their Alexa or Google Home, or chatting directly with the Digital Assistant inside of the mobile application, via Text Message, or even in Facebook Messenger.
- *Advertising*: We've got a sub-channel situation here, too:
    - *Digital Ads*: Ads embedded in websites, including MyBank properties, that customers and prospects (potential customers) may encounter.
    - *Email Marketing*: Targeted email communications to customers and prospects.
    - *Social Media*: Messages broadcast from the social media team out into the world as well as any sort of customer interaction that takes place publically, like an `@MyBankSupport` handle on Twitter. You could probably break this down further into different platform buckets, too.

There are many more channels we could deconstruct from this example, but hopefully this gives you an idea of what a channel is and how easy it is to fragment communication across them.

Going back to our idea of "omnichannel," the goal is to unify that communication as much as possible. In the case of a Front End Developer, omnichannel communication is likely to mean building experiences that can be dropped into various channels.

It's the "write once, run anywhere" approach.

## Omnichannel Components: A Primer

So, the business asks for an Auto Loan Calculator that they can use on the marketing site, auto loan application, mobile application, and the online banking application. They'd also love to integrate it with the chatbot, but that's a stretch goal.

Here are a few routes you could go in this situation:

1. Have each of the teams build the Calculator in their own codebase. This quickly leads to either a dissonant experience as one team is able to fix a bug and deploy it while the other has to wait for its next release cycle or an organizational nightmare as updates must be coordinated across multiple lines of business.
2. Have each of the teams build the Calculator inside of a shared Pattern Library that has components built in each of the necessary frameworks. This generally leads to fragmentation of the experience, though it can promote code reuse if the multi-framework pattern library has been designed well - that is rarely the case, though.
3. Have one team try to build and maintain multiple versions of the Calculator for each channel. This leads to a jack of all trades team that could be a great boon to the business, but will quickly be on the chopping block when budgets change. It's also just as easy to have the experiences fragment due to release cycles and the cross-organziation coordination required to execute on this vision.
4. Have one team build the Calculator and embed it in each channel. This is what we're going to spend most of our time talking about.

The enterprise has an overall goal to move towards more of a "write once, run anywhere" approach, reduce duplicate code, and increase code reuse, so 

**NOTE**: MyBank is a fictional institution imagined for illustrative purposes. It is not based on any existing institution. Any similarities between MyBank and an existing company are purely coincidental and due to my years of experience working with enterprise financial services clients.
