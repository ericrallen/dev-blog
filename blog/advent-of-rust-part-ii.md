---
path: /blog/advent-of-rust-2022-pt-ii
title: 'Advent of Rust: Part II'
date: 2022-12-07T23:31:14.877Z
postType: blogPost
blurb: >-
  This post chronicles days 6-10 of my journey through learning Rust via Advent
  of Code.
featured: false
---
**Last Updated**: 2022-12-07

In Part 2 of my [Advent of Rust series](https://ericrallen.dev/blog/advent-of-rust-2022/) we'll explore the puzzles 6 through 10 of [2022's Advent of Code challenge](https://adventofcode.com/2022).

**GitHub Repository**: [https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs)

<a id="table-of-contents"></a>

## Table of Contents

- [Challenges](#challenges)
- [Getting Started](#getting-started)
- [Wrapping Up](#wrapping-up)

<a id="challenges"></a>

### Challenges

- [Day Six](#day-six)

**Note**: Each challenge has a **Real Talk** section where I share some **Takeaways** about what I learned during that challenge and how it contributed to my overall goal of learning Rust, various **Notes** I wrote down while going through the challenge, all of the **Searches** I made while working through the challenge, and what my key **Next Steps** were so you can see how I broke down trying to learn these concepts by doing.

<a id="getting-started"></a>

## Getting Started

After successfully solving days 1 through 5, I'm feeling okay about basic syntax and concepts, though I'm still trying to fully grok ownership and lifetimes, and want to address one thing things that was just weird before I started solving puzzles:

- I [implemented](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/main.rs#L65-L74) a `test` [feature](https://doc.rust-lang.org/cargo/reference/features.html) instead of relying on `cargo`s built-in test runner

I'll go back and convert the previous solutions to use the built-in testing functionality at some point, but my goal is to use it for every solution going forward. It helped that [Day 6](#day-six) was the first to introduce multiple example inputs, which didn't fit into the pattern I was using previously.

<a id="conclusions"></a>

## Conclusions

Below are some conclusions I've come to during this stage of my journey (along with the date that I came to that conclusion just in case my thoughts change over time).

- **2022-12-07**: Rust is still pretty neat. I might actually like it.

<a id="day-six"></a>

## Day Six

[Day Six](https://adventofcode.com/2022/day/6) is a deceptively easy challenge where we need to identify a sequence of unique characters in a longer string.

Like some more complex puzzles might do later on, we are given several examples with their solutions, so the first thing we should do is create a [test for each input](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs#L69-L106) and then we can be reasonably sure we've got things right when all of our tests pass.

### Real Talk

We're given several examples inputs:

```
mjqjpqmgbljsphdztnvjfqwrcgsmlb

bvwbjplbgvbhsrlpgdmjqwftvncz

nppdvjthqldpwncqszvftbrmjlhg

nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg

zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw
```

And asked to find the index of the last character in a sequence of 4 unique characters.

Breaking this one down into some logical steps:

1. Check to see if the first 4 characters are unique
2. Iterate through each character after the first one and see if it plus the next 3 characters are unique

Part Two introduces another Advent of Code trope:  Adjusting the count of items you need to consider from your input. In this case we're going to start looking for a sequence with 14 unique characters instead of only 4.

**My Solution**: [https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs)

#### Takeaways

This is the fist challenge where I really felt like I understood what I was doing and wrote code that wasn't pretty bad.

I'm also glad I took the time to abstract some of it so that I could easily reuse everything in Part Two by just adding a second parameter that would accpet the desired length of the sequence we wanted to check.

#### Notes

> I bet Day 7 is going to be much harder

#### Searches

Here are the actual search strings I used, taken directly from my browser's history.

```
rust testing best practices

rust break out of for loop
```

<a id="day-six-next-steps"></a>

#### Next Steps

- Should eventually figure out if having the tests live inside of the `.rs` file that they are testing is the best approach or if there is a better spot for them
- Update previous day's solutions to use unit tests instead of `test` feature

[Back to List of Challenges](#challenges)

<a id="wrapping-up"></a>

## Wrapping Up

_Coming Soon._
