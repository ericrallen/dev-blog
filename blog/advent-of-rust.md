---
path: /blog/advent-of-rust-2022
title: Advent of Rust
date: 2022-12-02T20:26:39.664Z
postType: blogPost
blurb: >-
  The beginning of a series of posts detailing my journey through learning Rust
  via Advent of Code.
featured: true
---
**Last Updated**: 2022-12-07

[Rust](https://www.rust-lang.org/) always [sounded](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/) [pretty](https://blog.logrocket.com/why-is-rust-popular/) [cool](https://www.sheshbabu.com/posts/rust-wasm-yew-single-page-application/), but then I always heard you had to read this book to actually learn it.

I like reading, but I don't learn that way. I'm an [experiential learner](https://www.niu.edu/citl/resources/guides/instructional-guide/experiential-learning.shtml#:~:text=%E2%80%9CExperiential%20%5Blearning%5D%20is%20a,Association%20for%20Experiential%20Education%2C%20para) and I really like to just get hands on with something when I'm first trying to understand it.

So, I decided to just dive in and tackle [2022's Advent of Code](https://adventofcode.com/2022) using Rust.

After I grasp the basics of something and I can decide if I'm interested in pursuing it further, I circle back to research and reading to get a better understanding.

This series of posts will document my trials, tribulations, successes, failures, and ["Eureka!" moments](https://en.wikipedia.org/wiki/Eureka_(word)#Archimedes) in hopes that you may gain some insight into this journey if you decide to follow a similar path.

The goal here is to stay in the [Zone of Proximal Development](https://www.simplypsychology.org/Zone-of-Proximal-Development.html) long enough to grok the language well enough to start digging into slightly more advanced topics and [reinforce all of the learning](https://hamre-erik.medium.com/desirable-difficulty-why-you-should-make-learning-more-difficult-on-purpose-c65223046d6b) with spaced repetition (daily coding challenges) and increasing complexity.

**Disclaimer**: There is a chance that I will not make it to Day 25 Part 2 - I have never completed a full Advent of Code calendar in the past.

<a id="table-of-contents"></a>

## Table of Contents

Due to the ongoing nature of this post's updates, here are some quick links to relevant top-level sections in case you want to skip straight to a specific day.

<a id="sections"></a>

### In This Post

- [Series](#series)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Conclusion](#conclusion)

<a id="Posts"></a>

#### Series

This post serves as a hub with links to the rest of the posts in the series, some general information about the journey, my first impressions with Rust, and links to some resources I've found super helpful as a wannabe [rustacean](https://www.rustaceans.org/).

**Posts**:

- [Part I: Days 1-5](https://ericrallen.dev/blog/advent-of-code-2022-pt-i)
- [Part II: Days 6-10](https://ericrallen.dev/blog/advent-of-code-2022-pt-ii)
- Part III: Days 11-15: _Coming Soon._
- Part IV: Days 16-20: _Coming Soon._
- Part V: Days 21-25: _Coming Soon._

<a id="background"></a>

## Background

For some context about me to help you understand how I'm approaching this and if this approach might work for you, too:

- I'm a developer (currently working as a Developer Advocate) with just over a decade of professional experience and I've been programming as a hobby for a little over 20 years.
- In the past I've played around with all sorts of languages (_roughly in order: HTML, CSS, Visual Basic, Java, ActionScript, PHP, Ruby, Objective-C, Swift, JavaScript, Bash, TypeScript, Solidity, and Python_), but my primary focus has been JavaScript/Typescript.
- I've liked a few things about a lot of languages, but haven't found one that resonates with me like TypeScript has.
- I don't remember much about most of the languages I've explored in the past because I always ended up returning to something more comfortable. 

Much like suddenly [switching from QWERTY to Colemark](https://www.daskeyboard.com/blog/qwerty-vs-dvorak-vs-colemak-keyboard-layouts/) or [VS Code to Vim](https://betterprogramming.pub/should-you-learn-vim-as-a-developer-in-2020-75fde02c5443), I've rarely felt that the investment in learning an entirely new language, toolchain, and ecosystem is worth the time and effort.

So, why am I interested in learning Rust then? It seems to be the next thing for Web Assembly and has an interesting programming model that I think will really challenge my understanding of programming and programming ability.

So, why should you care? You probably shouldn't, but if you're interested in how to use coding challenges as a springboard for learning, getting some insight into how an experienced developer tackles learning a new language, or just want to see that a senior developer also searches for a lot of the same things that a junior developer does then you might find this post interesting.

<a id="github-repository"></a>

## GitHub Repository

[Learning in the open](https://www.olivercoding.com/2021-05-29-learning-in-open/) only counts if you actually share it, right?

**Repo**: [https://github.com/ericrallen/advent-of-code/tree/main/2022](https://github.com/ericrallen/advent-of-code/tree/main/2022)

<a id="getting-started"></a>

## Getting Started

Anyone who has dealt with Python, Node, or Ruby versions knows that you probably shouldn't just install whatever language you wnat to work with without first researching the ecosystem and figuring out how people really manage versions, packages, etc. You _can_ just install the default toolchain and go for it, but you'll eventually regret it.

As I was searching for the right [package to install from Homebrew for this](https://users.rust-lang.org/t/best-way-to-install-rust-on-os-x-rustup-or-brew/6362), I learned the first thing that I **love** about Rust.

Rust's default, recommended installation method, `rustup` [handles this for you](https://rust-lang.github.io/rustup/concepts/index.html) so that you don't need to figure out whether you should be using `nvm` or `volta` or `pyenv` or `poetry`.

This instantly made the languages I have been using for years feel very outdated.

<a id="resources"></a>

## Resources

Here are some resources that I've found particularly enlightening throughout this journey (in roughly the order that I found them in):

### Documentation

- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html): _there are a lot of helpful examples in here_

### Blog Posts

- [How to Organize Your Rust Tests](https://blog.logrocket.com/how-to-organize-your-rust-tests/): _LogRocket always kills it with the content_

### Videos

- [Rust for the Impatient](https://youtu.be/br3GIIQeefY)
- [Rust in 100 Seconds](https://youtu.be/5C_HPTJg5ek)
- [Rust is Boring](https://youtu.be/oY0XwMOSzq4)
- [Rust Demystified](https://youtu.be/TJTDTyNdJdY): _this one is amazing_

<a id="conclusions"></a>

## Conclusions

Below are some conclusions I've come to during this journey (along with the date that I came to that conclusion just in case my thoughts change over time).

- **2022-12-02**: Rust is pretty neat. I might actually like it.
- **2022-12-04**: Fighting to get the right types (like `&str`, `String`, `char`, `&&str`, etc.) more than I am actually programming. Hoping this is just like the initial hurdles I encountered switching from JavaScript to TypeScript.
- **2022-12-05**: Like any language, it seems like it is not hard to write mediocre, naive implementations in Rust.
- **2022-12-06**: Feeling a bit more comfortable. Adding in the overhead of keeping track of all the searches, righting down notes, and cirlcing back to the blog has definitely made this more of an undertaking than I thought it would be.
- **2022-12-07**: What a roller coaster of emotion after messing up Day 5 and having to step back and come back to it later and then flying through Day 6. Rust is still pretty neat. I definitely might actually like it.
