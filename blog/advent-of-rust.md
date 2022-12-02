---
path: /blog/advent-of-rust-2022
title: Advent of Rust
date: 2022-12-02T20:26:39.664Z
postType: blogPost
blurb: >-
  I love to learn by breaking things, so every year the magnificent [Advent of
  Code](https://adventofcode.com/) provides the perfect chance to break all
  kinds of stuff in a new language or framework. This year I decided to finally
  take a look at [Rust](https://www.rust-lang.org/).


  This post will be updated throughout Advent of Code as I successfully (or
  unsuccessfully) tackle the various challenges throughout the month.
featured: true
---
Rust always [sounded](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/) [pretty](https://blog.logrocket.com/why-is-rust-popular/) [cool](https://www.sheshbabu.com/posts/rust-wasm-yew-single-page-application/), but then I always heard you had to read this book to actually learn it. I like reading, but I don't learn that way. I'm an [experiential learner](https://www.niu.edu/citl/resources/guides/instructional-guide/experiential-learning.shtml#:~:text=%E2%80%9CExperiential%20%5Blearning%5D%20is%20a,Association%20for%20Experiential%20Education%2C%20para). So, I decided to just dive in and tackle [2022's Advent of Code](https://adventofcode.com/2022).

This post will attempt to document my trials, tribulations, successes, failures, and ["Eureka!" moments](https://en.wikipedia.org/wiki/Eureka_(word)#Archimedes) in hopes that you may gain some insight into this journey if you decide to follow a similar path.

<a id="table-of-contents"></a>

## Table of Contents

Due to the ongoing nature of this posts updates, here are some quick links to relevant top-level sections in case you want to skip straight to a specific day.

<a id="sections"></a>

### Sections

Sections of this post not dedicated to specific Advent of Code [Challenges](#challenges).

- [GitHub Repository](#github-repository)
- [Getting Started](#getting-started)
- [Conclusion](#conclusion)

<a id="challenges"></a>

### Challenges

_In descending order to make it easier to jump to the most recent day_.

- [Day Two](#day-two)
- [Day One](#day-one)

<a id="github-repository"></a>

## GitHub Repository

[Learning in the open](https://www.olivercoding.com/2021-05-29-learning-in-open/) only counts if you actually share it, right?

[https://github.com/ericrallen/advent-of-code/tree/main/2022](https://github.com/ericrallen/advent-of-code/tree/main/2022)

<a id="getting-started"></a>

## Getting Started

Anyone who has dealt with Python, Node, or Ruby versions knows that you probably shouldn't just install whatever language you wnat to work with without first researching the ecosystem and figuring out how people really manage versions, packages, etc. You _can_ just install the default toolchain and go for it, but you'll eventually regret it.

As I was searching for the right [package to install from Homebrew for this](https://users.rust-lang.org/t/best-way-to-install-rust-on-os-x-rustup-or-brew/6362), I learned the first thing that I **love** about Rust.

Rust's default, recommended installation method, `rustup` [handles this for you](https://rust-lang.github.io/rustup/concepts/index.html) so that you don't need to figure out whether you should be using `nvm` or `volta` or `pyenv` or `poetry`.

This instantly made the languages I have been using for years feel very outdated.

<a id="day-one"></a>

## Day One

Now that we've got rust up and running, it's time to see what [@ericwastl](https://twitter.com/ericwastl) has in store for us with Advent of Code this year.

Luckily [Day One](https://adventofcode.com/2022/day/1) eases us into things with iterating through some collections of numbers and adding them together.

As is [tradition](https://github.com/ericrallen/advent-of-code/blob/main/2018/utils/solution.class.js), I first needed to over-engineer a way to test the example inputs against the example solutions and run code for the various parts of each day.

> Before we can solve Advent of Code, we must [first invent](https://www.phy.cam.ac.uk/blog/how-make-apple-pie-scratch#:~:text=In%20the%201980s%20blockbuster%20science,must%20first%20invent%20the%20universe'.) an [Advent of Code helper](https://github.com/Bogdanp/awesome-advent-of-code#project-templates).

**Note**: I first actually needed to figure out how to get the [`rust-analyzer` VSCode Extension](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) to cooperate with the subdirectory I used for my crate.

### Real Talk

Here are the things I searched for and some notes I wrote down while working through Day One.

#### Notes

> Rust is harder than I thought

> I guess I do need to read about this whole borrowed vs. owned thing

> Woah, this IDE integration with the `rust-analyzer` is amazing

> I'm so glad I fell in love with TypeScript before I tried to pick up Rust

> Why can't I join these numbers into a string? I guess I'll just dump the whole array.

> I need to read the instructions more carefully.

#### Searches

Here are the actual search strings I used, taken directly from my browser's history.

```
rust read file input

rust concatenate strings with variables

rust analyzer failed to discover workspace

rust import from another file

rust string vs &string

rust match bindings cannot shadow statics

rust default value for argument

rust split string

rust sum of array

rust number types

rust apply function to each item in vector

rust sort array

cannot return value referencing temporary value

rust sort descending
```

You can pretty much reconstruct how I arrived at [my solution for Day One](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_one.rs) by following that trail of search strings.

[Back to List of Challenges](#challenges).

<a id="day-one-next-steps"></a>

#### Next Steps

I still had lots of things to figure out, like:

1. How to implement verbose debugging messages without needing to manually flip a Boolean in the code
2. How to pass named parameters to the executable
3. How to actually test the output of the executable against the example solution when providing the example input

<a id="day-two"></a>

## Day Two

[Day Two](https://adventofcode.com/2022/day/2) has us tackling a Rock, Paper, Scissors game with some complex scoring rules.

Before I dug into the problem, I really wanted to tackle those [Next Steps](#day-one-next-steps) from [Day One](#day-one).

This is when I learned about the second thing I **love** about Rust:  [Features](https://doc.rust-lang.org/cargo/reference/features.html).

Having a built-in way to specify features for your program and a built-in way to have your code [behave differently](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs#L11-L21) depending on [the state of those features](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs#L30-L34) is awesome.

There are certainly ways to achieve this in every language, but this might be the simplest and easiest to implement that I've encountered.

### Real Talk

Here are the things I searched for and some notes I wrote down while working through Day Two.

#### Notes

> Rock, paper, scissors is actually a little harder than I thought

> I know there has to be a better way than [all these ifs](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_two.rs#L20-L50), but I guess I'll learn that later

> I still have no idea when I'm supposed to use `&` and when I'm not; I'm really glad this IDE integration exists

#### Searches

Here are the actual search strings I used, taken directly from my browser's history.

```
rust println! in debug only

rust debug!

rust how to get feature

rust trim string

rust enum

rust get value from enum

rust import macro from another file

rust match multiple statements

rust remove empty elements from vector
```

#### Next Steps

1. Okay, it's time to actually dig into this borrowed vs owned thing
2. I need to take some time to learn about the differences with `struct`s and `enum`s
3. Am I overusing `.collect()` and `.iter()`? Do I need them as often as I have been using them? When should I chain methods and when should I not?

[Back to List of Challenges](#challenges).

<a id="conclusions"></a>

## Conclusions

Below are some conclusions I've come to during this journey (along with the date that I came to that conclusion just in case my thoughts change over time).

- **2022-12-02**: Rust is pretty neat. I might actually like it.
