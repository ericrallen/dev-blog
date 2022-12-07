---
path: /blog/advent-of-rust-2022
title: Advent of Rust
date: 2022-12-02T20:26:39.664Z
postType: blogPost
blurb: >-
  This post will be updated throughout [Advent of
  Code](https://adventofcode.com/) as I successfully (or unsuccessfully) tackle
  the various challenges throughout the month trying to teach myself
  [Rust](https://www.rust-lang.org/).


  **Last Updated**: 2022-12-07
featured: true
---
Rust always [sounded](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/) [pretty](https://blog.logrocket.com/why-is-rust-popular/) [cool](https://www.sheshbabu.com/posts/rust-wasm-yew-single-page-application/), but then I always heard you had to read this book to actually learn it. I like reading, but I don't learn that way. I'm an [experiential learner](https://www.niu.edu/citl/resources/guides/instructional-guide/experiential-learning.shtml#:~:text=%E2%80%9CExperiential%20%5Blearning%5D%20is%20a,Association%20for%20Experiential%20Education%2C%20para). So, I decided to just dive in and tackle [2022's Advent of Code](https://adventofcode.com/2022).

This post will attempt to document my trials, tribulations, successes, failures, and ["Eureka!" moments](https://en.wikipedia.org/wiki/Eureka_(word)#Archimedes) in hopes that you may gain some insight into this journey if you decide to follow a similar path.

The goal here is to stay in the [Zone of Proximal Development](https://www.simplypsychology.org/Zone-of-Proximal-Development.html) long enough to grok the language well enough to start digging into slightly more advanced topics and [reinforce all of the learning](https://hamre-erik.medium.com/desirable-difficulty-why-you-should-make-learning-more-difficult-on-purpose-c65223046d6b) with spaced repetition (daily coding challenges) and increasing complexity.

**Full Disclosure**: There is a strong chance that I will not make it to Day 25 Part 2 - I have never completed a full Advent of Code calendar.

For some context about me to help you understand how I'm approaching this and if this approach might work for you, too:

- I'm a developer (currently working as a Developer Advocate) with just over a decade of professional experience and I've been programming as a hobby for a little over 20 years.
- In the past I've played around with all sorts of languages (_roughly in order: HTML, CSS, Visual Basic, Java, ActionScript, PHP, Ruby, Objective-C, Swift, JavaScript, Bash, TypeScript, Solidity, and Python_), but my primary focus has been JavaScript/Typescript.
- I've liked a few things about a lot of languages, but haven't found one that resonates with me like TypeScript has.
- I don't remember much about most of the languages I've explored in the past because I always ended up returning to something more comfortable. 

Much like suddenly [switching from QWERTY to Colemark](https://www.daskeyboard.com/blog/qwerty-vs-dvorak-vs-colemak-keyboard-layouts/) or [VS Code to Vim](https://betterprogramming.pub/should-you-learn-vim-as-a-developer-in-2020-75fde02c5443), I've rarely felt that the investment in learning an entirely new language, toolchain, and ecosystem is worth the time and effort.

So, why am I interested in learning Rust then? It seems to be the next thing for Web Assembly and has an interesting programming model that I think will really challenge my understanding of programming and programming ability.

So, why should you care? You probably shouldn't, but if you're interested in how to use coding challenges as a springboard for learning, getting some insight into how an experienced developer tackles learning a new language, or just want to see that a senior developer also searches for a lot of the same things that a junior developer does then you might find this post interesting.

<a id="table-of-contents"></a>

## Table of Contents

Due to the ongoing nature of this post's updates, here are some quick links to relevant top-level sections in case you want to skip straight to a specific day.

<a id="sections"></a>

### Sections

Sections of this post not dedicated to specific Advent of Code [Challenges](#challenges).

- [GitHub Repository](#github-repository)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Conclusion](#conclusion)
- [Challenges](#challenges)

<a id="challenges"></a>

#### Challenges

_Listed here in descending order to make it easier to jump to the most recent day_.

- [Day Five](#day-five)
- [Day Four](#day-four)
- [Day Three](#day-three)
- [Day Two](#day-two)
- [Day One](#day-one)

**Note**: Each challenge has a **Real Talk** section where I share some **Takeaways** about what I learned during that challenge and how it contributed to my overall goal of learning Rust, various **Notes** I wrote down while going through the challenge, all of the **Searches** I made while working through the challenge, and what my key **Next Steps** were so you can see how I broke down trying to learn these concepts by doing.

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

<a id="resources"></a>

## Resources

Here are some resources that I've found particularly enlightening throughout this journey (in roughly the order that I found them in):

### Documentation

- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html): _there are a lot of helpful examples in here_

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
- **2022-12-06**: Feeling a bit more comfortable.
- **2022-12-07**: What a roller coaster of emotion.

<a id="day-one"></a>

## Day One

Now that we've got rust up and running, it's time to see what [@ericwastl](https://twitter.com/ericwastl) has in store for us with Advent of Code this year.

Luckily [Day One](https://adventofcode.com/2022/day/1) eases us into things with iterating through some collections of numbers and adding them together.

As is [tradition](https://github.com/ericrallen/advent-of-code/blob/main/2018/utils/solution.class.js), I first needed to [over-engineer](https://github.com/ericrallen/advent-of-code/tree/main/2022) a way to test the example inputs against the example solutions and run code for the various parts of each day.

> Before we can solve Advent of Code, we must [first invent](https://www.phy.cam.ac.uk/blog/how-make-apple-pie-scratch#:~:text=In%20the%201980s%20blockbuster%20science,must%20first%20invent%20the%20universe'.) an [Advent of Code helper](https://github.com/Bogdanp/awesome-advent-of-code#project-templates).

**Note**: I first actually needed to figure out how to get the [`rust-analyzer` VSCode Extension](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) to cooperate with the subdirectory I used for my crate.

**Another Note**: I'll also probably streamline the input gathering at some point so that my inputs are pulled down from the Advent of Code site automatically and cached, but we need to [walk before we can run](https://idioms.thefreedictionary.com/walk+before+you+run) and we're taking baby steps here.

### Real Talk

We're given an example input:

```
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
```

And told that each collection of numbers represents some collection and we want to sum those collections and find the biggest one.

Breaking this problem down into logical steps (assuming we've already solved the problem of getting the input into our program):

1. split the input on double line breaks to get each collection
2. iterate through the collections
    1. split them on line breaks to get each value
3. iterate through the values
    1. parse them as numbers
    2. add them together
    3. return the sum
4. find the maximum value among the totals for each collection

Part Two sees us taking the same logic, but sorting the collection and adding the top 3 totals together.

#### Takeaways

What's great about a simple challenge like this one for learning a new language is that it lets you play around with concepts that you are likely already familiar with and just sort of familiarize yourself with the syntax and how you execute programs in this new language.

Things [may not have been perfect](https://github.com/ericrallen/advent-of-code/commit/859cd5ed6114adfcd958c6db6980aaae8e224116), but this felt like a very successful start with the language.

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

<a id="day-one-next-steps"></a>

#### Next Steps

I still had lots of things to figure out, like:

1. How to implement verbose debugging messages without needing to manually flip a Boolean in the code
2. How to pass named parameters to the executable
3. How to actually test the output of the executable against the example solution when providing the example input

[Back to List of Challenges](#challenges)

<a id="day-two"></a>

## Day Two

[Day Two](https://adventofcode.com/2022/day/2) has us tackling a Rock, Paper, Scissors game with some complex scoring rules.

Before I dug into the problem, I really wanted to tackle those [Next Steps](#day-one-next-steps) from [Day One](#day-one).

This is when I learned about the second thing I **love** about Rust:  [Features](https://doc.rust-lang.org/cargo/reference/features.html).

Having a built-in way to specify features for your program and a built-in way to have your code [behave differently](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs#L11-L21) depending on [the state of those features](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs#L30-L34) is awesome.

There are certainly ways to achieve this in every language, but this might be the simplest and easiest to implement that I've encountered.

### Real Talk

Once again, we're given an example input:

```
A Y
B X
C Z
```

And told that each line represents a round of Rock, Paper, Scissors and that we need to model the outcomes and provide the relevant total score based on the game's outcome and our chosen weapon.

Breaking this problem down into logical steps:

1. iterate through each line
    1. get the other player's choice (first column)
    2. get our choice (second column) and its associated point value
    3. execute the game's rules to decide who won
    4. get the value of the round for us (based on win, loss, or draw)
    5. add the value of the outcome and the value of our choice
    6. return that sum
2. add up all the individual round sums to get our final score

Day 2's puzzle is the first to introduce the Advent of Code trope of Part Two changing how you interpret the input, and asks us to figure out what choice we should make in each round to achieve a desired outcome and then provide the final total score based on those choices.

It requires us to change things a little bit, but most of the logic is still there.

#### Takeaways

This one was also great to start groking the ins and outs of Rust because it takes a [game](https://en.wikipedia.org/wiki/Rock_paper_scissors) we're likely already familiar with, adjusts it minimally, and makes us think about how to model those rules programmatically.

There are many approaches to the problem that give us a chance to explore [control flow](https://en.wikipedia.org/wiki/Control_flow) and [logic](https://woz-u.com/blog/how-to-get-programming-logic/) in our chosen language while maybe also exploring some of its more complex [data structures](https://www.geeksforgeeks.org/data-structures/)

#### Notes

> Rock, paper, scissors is actually a little harder than I thought; the point system here makes it a little more complicated, too

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

[Back to List of Challenges](#challenges)

<a id="day-three"></a>

## Day Three

[Day Three](https://adventofcode.com/2022/day/3) has us comparing parts of a string and looking for duplicates.

This time I decided to try to make myself to explore the available functions in my IDE's Intellisense suggestions before searching for a solution to something. I think it worked out okay, and as a result you'll see that there are a lot less search strings focused on a specific task - and a lot more focused on a specifc error message I received while working in this way.

### Real Talk

Example Input:

```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
```

We're supposed to split these strings in half and find the character that appears in both halves, then convert that character to a numerical value and add them all together.

#### Takeaways

This one sort of reinforces what we've already started learning and gives us a chance to explore those concepts a little further.

So far, using Advent of Code to learn a new programming language seems like a good idea, but I worry when the difficulty really increases it will result in a wall of frustration.

#### Notes

> Okay, we're doing another reduce/sum of an Array; hopefully I get the hang of the language before we get into more complex structures

> That [Rust Demystified](https://youtu.be/TJTDTyNdJdY) video sort of actually helped me understand the `&` and I kind of get some of the lifecycle stuff now, too - I definitely need to watch it a couple more times over the rest of the month to come back and pick up more

> I cannot figure out why it seems so hard to map through stuff in Rust; I must be doing something really wrong or doing things in a way that isn't idiomatic

#### Searches

You may notice that many of the search strings are mostly error messages that are getting a little more complex - not sure what the takeaway from that is just yet.

```
a value of type `&str` cannot be built from an iterator over elements of type `&str`

consider introducing a named lifetime parameter: `<'a>`, `'a `, `'a `, `'a `, `'a `

this function's return type contains a borrowed value, but the signature does not say which one of `pockets`'s 3 lifetimes it is borrowed from

a value of type `Vec<&str>` cannot be built from an iterator over elements of type `Vec<&str>`

the trait `FromIterator<T>` is implemented for `Vec<T>`

rust vector remove duplicates

rust usize to i32

rust expected slice `[&str]` found tuple `(_, _, _)`

refutable pattern in function argument

cannot return value referencing local variable
```

#### Next Steps

1. Figure out if Vectors are even the right approach for this kind of thing; I think I'm doing it wrong
2. Revisit the ownership thing again - it still hasn't sunk in yet
3. Look into lifetimes more, I sort of understand why I needed to add a named lifetime (like `<'a>`) but it's still kind of unclear, too

[Back to List of Challenges](#challenges)

<a id="day-four"></a>

## Day Four

[Day Four](https://adventofcode.com/2022/day/4) has us converting some strings into number ranges and seeing if they overlap completely.

I started off the day by trying to clean up [my very naive approach](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs) to the [two parts of a puzzle per day](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_one.rs#L41-L46) pattern and think about [a more Object-oriented approach to setting up each day's solution](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/lib.rs#L26-L63), but ended up deciding I didn't quite grok enough of the language's idioms yet and decided to keep pushing forward with the current status quo for now.

I also wanted to switch from the `cargo run --features test` approach that I took and use the built-in [`#[cfg(test)]`](https://doc.rust-lang.org/book/ch11-01-writing-tests.html) functionality so that I can just run `cargo test`, but will tackle that another day.

### Real Talk

Example Input:

```
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
```

Once again we're doing a lot of splitting of strings here. We could probably do something with a Regular Expression if we wanted to, but I'm not ready to dig into if/how RegEx is handled in Rust just yet, so we'll probably naively:

1. Split on `"\n"`
2. Split on `","`
3. Split on `"-"`
4. Create a range for each number sequence
5. Check both ranges to see if either fully contains the other

The second part introduces another common Advent of Code puzzle trope:  Switching between a complete and partial match. So we just need to flip our `.all()` to a `.any()` and we're good to go.

#### Takeaways

The first part of this one gave me a chance to try to apply what I have learned so far and the second part gave me an opportunity to refactor and make my code more reusable, but I was lazy and just duplicated it instead of trying to follow the Don't Repeat Yourself ([DRY](https://www.digitalocean.com/community/tutorials/what-is-dry-development)) principle and clean things up.

#### Notes

> I was able to do this all without too much trouble, but the code is definitely not what I would like it to be.

> I actually felt like I kind of knew what I was doing this time. That might be some progress.

#### Searches

```
rust struct

// still haven't mentally accepted this one, I guess
rust default function argument value

rust check if two vectors contain same elements

rust create array from range
```

#### Next Steps

1. Should really be using `cargo test` instead of the `cargo run --features test` approach
2. Would love to use more of the language's features (`struct`s, `enum`s, `trait`s, etc.)
3. Need to learn more about handling `Option<T>` types and best practices for when and how to `unwrap()` them idiomatically

[Back to List of Challenges](#challenges)

<a id="day-five"></a>

## Day Five

Well, that escalated quickly. [Day Five](https://adventofcode.com/2022/day/5) introduces another Advent of Code trope:  data visualization.

I started off thinking about making one of those fancy data viz solutions you see on the [subreddit](https://www.reddit.com/r/adventofcode/), but decided that I should probably just catch up to the current day first instead.

### Real Talk

Example Input:

```
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
```

This one is a bit more challenging because we have to parse the input in multiple different ways. We need to understand the total number of stacks we are dealing with and which item is in which stack while also parsing the instructions for moving items from one stack to another.

Breaking this down we're going to want to:

1. Split on `"\n\n"` to separate the stack visualization from the instructions
2. Pop the stack numbers from the stack visualization so we know how many stacks we need to keep track of
3. Parse the crates in each stack
4. Parse each instruction and manipulate our stacks

**Note**: One thing I've learned over the years with Advent of Code is that you can simplify and reduce your chance of bugs by just inserting an empty item as the first element in your Arrays when you are dealing with things indexed at `1` like these stacks of crates. Rather than having to constantly convert indices, you can just go with what's written and then filter out the empty item at the end if necessary.

And part two has us pulling multiple containers off the stack instead of doing them one by one, which is similar to the Advent of Code trope from [Day Four](#day-four), except this one has to do with moving from processing a stack as individual items to processing it as groups of items. Luckily most of the logic is still the same.

#### Takeaways

The most challenging part of this one was actually parsing the initial stack state correctly. It also introduced another Advent of Code trope:  the reduced example case doesn't have edge cases that your real input might have (like multiple empty spots in a row so it isn't quite as easy to make sure you put the right crate on top of the right stack).

#### Notes

> This one ramped up the complexity a good bit; there usually seems to be a bit of a hockey stick in terms of the difficulty scaling - and that's often reflected in the decreasing number of stars awarded.

> Let myself get too behind by overthinking and messing this one up at first

#### Searches

```
// I ended up not using this one
rust update output in console

// stuff I actually used
rust regular expressions

rust for in get index

rust iterate n times

rust remove first item from array

rust can't compare `&str` with `str`

rust borrowed value does not live long enough

rust compar char to str
```

#### Next Steps

1. Should **really** switch to using `cargo test` instead of the `cargo run --features test` approach I ended up with
2. Get better at making reusable functions for this stuff (I've been avoiding it due to some lifetime and ownership issues) so that these kind of day two slight tweaks can just be a new function or parameter to an existing function instead of repeating so much code

[Back to List of Challenges](#challenges)
