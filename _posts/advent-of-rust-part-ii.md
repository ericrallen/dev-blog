---
title: 'Advent of Rust: Part II'
date: 2022-12-06
excerpt: This post chronicles days 6-10 of my journey through learning Rust via Advent of Code.
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
ogImage:
  url: /assets/images/blog-hero.jpg
---
**Last Updated**: 2022-12-08

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

**Note**: Another, potentially better approach might maintain a single stack of `N` characters and just keep removing the first character and appending the next character in the larger sequence.

#### My Solution

The first thing we'll need is a way to check if a given set of characters is unique. Rust's [`.dedup()`](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.dedup) method removes consecutive duplicate items in a [Vector](https://doc.rust-lang.org/std/vec/struct.Vec.html), so we can [`.collect()`](https://doc.rust-lang.org/core/iter/trait.Iterator.html#method.collect) our string's characters into a Vector and then [`.sort()`](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort) and `.dedup()` them.

```rust
fn check_for_unique_sequence(sequence: &str, size: usize) -> bool {
  let mut sequence_array: Vec<char> = sequence.chars().collect();

  // `.dedup()` only removes consecutive duplicates
  // so it needs a sorted Vector for our use case
  sequence_array.sort();
  sequence_array.dedup();

  sequence_array.len() == size
}
```

**Note**: It probably would have been more efficient to just compare the size of the deduplicated sequence to the size of the original sequence instead of passing the size in, too.


This utility method is technically extraneous, but it made the code feel a bit cleaner without the [Range]() (`start..end`) needing to include the math for calculating the correct indices. It also gave me a chance to play around with returning and working more with [`Option` types](https://doc.rust-lang.org/std/option/enum.Option.html).

```rust
fn get_sequence(stream: &String, start: usize, end: usize) -> Option<&str> {
  // this could have just been a regular `.get()` call in the code below
  // but having the index math in the Range was hard to read
  stream.get(start..end)
}
```

Finally, we need to actually check our string for a unique sequence of some defined length.

**Note**: Initially the length was hardcoded to a specific [constant](https://doc.rust-lang.org/std/keyword.const.html), but it was easy to just make the length a function argument and pass in the relevant constant for each part of the puzzle.

```rust
fn find_end_of_sequence(stream: &String, length: usize) -> usize {
  // check the first N characters before we start iterating
  let first_sequence = get_sequence(stream, 0, length).unwrap();

  if check_for_unique_sequence(first_sequence, length) {
    length
  } else {
    // we'll update this once we find the right ending index
    // TODO: find a pattern that can make this `panic!()` if we
    // never find a unique sequence
    let mut sequence_end_index: usize = 0;

    for (index, _) in stream.chars().enumerate() {
      // skip first character since we already checked the first sequence
      if index > 0 {
        // get the next sequence to check
        let test_sequence = get_sequence(stream, index, index + length).unwrap();

        if check_for_unique_sequence(test_sequence, length) {
          sequence_end_index = index + length;

          break;
        }
      }
    }

    sequence_end_index
  }
}
```

Now all we have to do is call `find_end_of_sequence()` with our input string and the desired length of the unique sequence.

[View on GitHub](https://github.com/ericrallen/advent-of-code/blob/main/2022/advent/src/days/day_six.rs)

##### Testing

Adding unit tests to the solution was really easy, although I'm still not sure if I put them in the right place. I think I'm a fan of the simplicity of Rust's built-in testing.

```rust
#[cfg(test)]
mod test {
  use crate::{read_input, read_solution, days};

  #[test]
  fn day_six_part_one() {
    // I put the first example for day 6 part 1 into a file
    // like I have used for testing the previous puzzles
    let input = read_input("6", true);
    let output = read_solution("6", "1");

    let result = days::day_six::part_one(input);

    assert_eq!(result, output)
  }

  #[test]
  fn day_six_part_one_extra() {
    // the other examples inputs and solutions
    let inputs = [
      "bvwbjplbgvbhsrlpgdmjqwftvncz",
      "nppdvjthqldpwncqszvftbrmjlhg",
      "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
      "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"
    ];

    let outputs = ["5", "6", "10", "11"];

    for (index, input) in inputs.iter().enumerate() {
      let result = days::day_six::part_one(input.to_string());

      assert_eq!(result, outputs[index]);
    }
  }

  #[test]
  fn day_six_part_two() {
    let inputs = [
      "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
      "bvwbjplbgvbhsrlpgdmjqwftvncz",
      "nppdvjthqldpwncqszvftbrmjlhg",
      "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
      "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"
    ];

    let outputs = ["19", "23", "23", "29", "26"];

    for (index, input) in inputs.iter().enumerate() {
      let result = days::day_six::part_two(input.to_string());

      assert_eq!(result, outputs[index]);
    }
  }
}
```

#### Takeaways

This is the fist challenge where I really felt like I understood what I was doing and wrote code that I didn't feel bad about. It was really helpful to have another slightly easier puzzle as a way to try putting together everything I've learned about the language so far.

I'm also glad I took the time to abstract some of it so that I could easily reuse everything in Part Two by just adding a second parameter that would accept the desired length of the sequence we wanted to check.

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
