---
path: /archive/nail-everything-looks-like-hammer
date: 2019-03-02T22:29:05.088Z
title: 'When All You Have is a Nail, Everything Looks Like a Hammer'
---

> I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.
> 
> - Abraham Maslow

Sometimes we have to use the tools that are within a project’s budget of time and money. Sometimes those solutions aren’t ideal.

Luckily, we can learn from those situations where we didn’t use an ideal solution and had to MacGyver our project together using some duct tape, bubble gum, and a paperclip.

Recently I realized I had been hammering a nail with a rock, or maybe a shoe – the metaphor kind of falls apart when you try to take it too far.


## A Makeshift Hammer

This rock, or shoe – let’s call it a rock-shoe from here on out – is a very impressive feat of WordPress plug-in engineering that many of you may be familiar with, [BuddyPress](http://buddypress.org/).

BuddyPress is great if your site needs a real social networking component, but it is a little much if you just really need some editable user profiles and user generated image galleries without letting those users into the WordPress admin panel.

And, if you need to be able to run complex reports combining large numbers of users and data from other plug-ins: the rock-shoe probably isn’t the right hammer for you.

When I started on the project, I hadn’t even built a WordPress plug-in that did anything useful or remotely complicated, so the rock-shoe seemed to fit; it integrated with Gravity Forms which we were using for our registration and renewal forms; and it certainly hammered in my nail until, as projects tend to do, the scope evolved.


## Rusty Nail Lasagna

Still a bit green at the time, I panicked and continued to add complex layers of spaghetti code to the system, layering dependencies in a veritable lasagna of stagnant, unmaintainable code. Like that stagnant lasagna, the whole system began to sour.

The biggest issue arose with reporting. Running queries on multiple items of user profile data created a lot of unnecessary overhead and made it extremely complicated to build a system that allowed our admins to generate their own custom reports.

But, transitioning from BuddyPress to a new system was a tall order given how intricately interwoven my web of spaghetti code had become.


## The First Step: Loosening the Nail

Before removing the nail completely and driving it into a new hole, you really need to loosen it up and test the stability of the whole structure.

As I mentioned, the codebase was a mess at this point; it didn’t take much loosening to see the stability was in serious jeopardy without that nail. So, an intermediary step had to be implemented.

A stabilizing addition that could allow new systems to integrate with our new user management plug-in and old systems to be ported over when there was time, all without losing any data in either system in the interim.

The first deployment of our new system runs concurrently with BuddyPress and stores the same information in a new database structure. It updates whenever a user updates their BuddyPress profile, an admin edits a user’s account, or a user fills out a registration or renewal form.


## The Second Step: Using a Real Hammer

After monitoring the systems to ensure everything was running smoothly, I started working on the component that gave us the most trouble with BuddyPress, our reporting system.

Following that, I’ll convert the other systems and drive in a few more nails in the form of compartmentalized systems that allow me to throw out the moldy lasagna and unravel the web of dependencies.


## A Moral of Sorts

Improvising tools is a great way to learn and grow, but you have to know when you’ve “rock-shoed” your nails in and they aren’t flush.

Also, it’s as important to share your failures and shortcomings as it is your successes.

**NOTE**: I only mention BuddyPress because it’s a big system that I’m sure many people are familiar with because it does its job well and is well-documented. I’m not trying to say it isn’t the right tool for the job, it just turned out to not be the right tool for my job, which led to me learning some valuable lessons.


