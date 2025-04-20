---
title: Axiomatic Engineering
date: 2025-03-17
excerpt: Defining core axioms that guide your work can help identify the right opportunities and avoid burnout.
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
ogImage:
  url: /assets/images/blog-hero.jpg
---

For most of my career as a developer, I stumbled along, solving problems without much thought about how I approached them. Like the naive algorithms of my early days, I took a brute-force approach to my work. While I might have adopted some practices from the company I was currently working for, I hadn't taken the time to identify the core values that explained my approach to building software.

It wasn't until I spent some time as the Founding Engineer at a startup, given the goal of building a culture of engineering excellence, that I took some time to think about what that meant to me, what I had learned from all the teams I had worked with in my career, and how that could translate into guiding principles for a team and my own work. In architecting the foundations of developer culture at that startup, we spent a lot of time distilling some deep thoughts about software development and teamwork into something easy to digest and discuss: three core axioms for software engineering.

An [axiom](https://en.wikipedia.org/wiki/Axiom) "is a [statement](<https://en.wikipedia.org/wiki/Statement_(logic)> "Statement (logic)") that is taken to be [true](https://en.wikipedia.org/wiki/Truth "Truth"), to serve as a [premise](https://en.wikipedia.org/wiki/Premise "Premise") or starting point for further reasoning and arguments." Establishing a handful of well-defined axioms as a baseline for how an entire organization should think about how they approach their work and their team gives everyone a quick heuristic for making decisions.

Unfortunately, all the words I wrote about the axioms for that startup and the discussions about what they meant and why they were important are trapped in a Google Workspace that I no longer have access to. As part of my career sabbatical since April 2024, I wanted to define my core axioms to help focus my work and, as my sabbatical draws to a close and I prepare to rejoin the workforce, remind me how I want to operate in a larger team.

## My Core Engineering Axioms:

After pondering how I work and why I work that way, I arrived at three axioms that describe how I approach software development and that can guide what I'm doing and remind me why I'm doing it.

If something frustrates me, it might be misaligned with my work style. These axioms provide a framework for identifying what needs to change to alleviate internal or external conflict. Prolonged conflict leads to burnout, and I'm not burning out again.

These aren't implicit truths but guiding principles:

1. Make it work. Make it right. Make it fast.
2. Automate all the things.
3. Leave it better than you found it.

### Make it work. Make it right. Make it fast.

[Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck) nailed it with [this one](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast).

This perfectly sums up an iterative approach to software development that is especially valuable when working with unknowns. Before optimizing performance, ensure you solve the problem and follow best practices. An unoptimized Minimum Viable Product (MVP) that works and can quickly validate your assumptions is far more valuable than a carefully tuned algorithm that can scale to user numbers you'll never see because you didn't establish Product-Market Fit (PMF).

After something works, you can decide if this path is worth pursuing and focus on making things "right." In this case, "right" encompasses things like handling edge cases and exceptions, testing, and following best practices around code organization, design principles, etc.

Now that you have working, technically correct software, it's time to focus on tuning the performance. We often hear the "premature optimization is the root of all evil" quote from [Donald Knuth](https://wiki.c2.com/?PrematureOptimization), and I think it's important to understand that quote in context:

> Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered. We _should_ forget about small efficiencies, say about 97% of the time: **premature optimization is the root of all evil.** Yet we should not pass up our opportunities in that critical 3%.

The goal of not prematurely optimizing (or making it work and following best practices before making it fast) isn't to forego performance altogether. Instead, it's to identify the critical path and measure the impact on actual real-world use cases rather than spending time designing a ["dyno queen"](https://www.urbandictionary.com/define.php?term=dyno+queen) in an [ivory tower](https://en.wikipedia.org/wiki/Ivory_tower).

In one role, we wanted to dynamically integrate specific numbers from a government program into a modeling calculation. Unfortunately, that information was only printed in a PDF that was linked to the government entity's website, but the location of the link would sometimes change even though the underlying numbers were only updated once every six months.

We considered integrating a headless browser, like Puppeteer, and trying to identify the current link to the PDF from the homepage and then download and parse the PDF to extract the numbers. After estimating the level of effort for this approach, we decided to make the model work with constants that were easy to update manually and revisit the more robust approach after we had updated the numbers a few times. This was trivial to ship to production quickly.

After a few months, we realized these calculations weren't even that important to the problem we were trying to solve, so we abandoned them. They were no longer relevant in less than a year and were mostly retired.

If we had focused all of our time and energy on making things dynamic and optimizing for the performance overhead of spinning up a headless browser and running Optical Character Recognition (OCR) on a PDF whose format changed, it might have taken us almost as long to implement the feature as it took for us to realize that we probably didn't even need it.

Sometimes, the project you're working on might require performance tuning to "make it work" or "make it right." That's fine. Remember, axioms "serve as a premise or starting point for further reasoning." They aren't rules that are set in stone.

### Automate all the things.

I have a very low tolerance for poor [developer experience](https://interwebalchemy.com/blog/post/drift-compatibility/). I've spent countless hours eliminating minor inconveniences from workflows because I feel an almost physical aversion to them in my day-to-day work. Tedious, repetitive, boring tasks make me unhappy. Being unhappy makes me less useful.

This isn't just me wanting to avoid tasks that aren't creative. There's research to back me up here:

- [Happy developers are more productive](https://arxiv.org/abs/1405.4422).
- [Developers are happier with less tedium](https://www.software.com/reports/code-time-report#developers-code-less-than-one-hour-per-day-).
- [Productive developers create better software](https://martinfowler.com/articles/developer-effectiveness.html#DayInTheLifeInAHighlyEffectiveEnvironment).
- [Churn and bureaucracy make it harder to do work](https://martinfowler.com/articles/developer-effectiveness.html#DayInTheLifeInALowEffectiveEnvironment).

Automation gives you more time to focus on things that matter. You shouldn't manually deploy libraries to package indexes; [you should be configuring deployment pipelines](https://www.researchgate.net/publication/385388453_ENHANCING_DEVELOPER_PRODUCTIVITY_THROUGH_AUTOMATED_CICD_PIPELINES_A_COMPREHENSIVE_ANALYSIS) so you don't have to think about packaging again. You shouldn't be thinking about indentation (unless you're using a [whitespace-sensitive language](https://web.archive.org/web/20180218162410/http://www.secnetix.de/~olli/Python/block_indentation.hawk), like Python), line length, or anything else a good [linter](https://github.com/mightyiam/eslint-config-love) and [formatter](https://prettier.io/) can handle for you. [Outsource these things to tools](https://www.youtube.com/watch?v=0bQsDGjDzfY&t=875s) and focus on what's important: solving problems.

This compulsion has manifested in various ways, from creating an [Electron app to manage my `PATH`](https://github.com/ericrallen/windows-path-editor), reducing the pain of having to navigate deep into the Control Panel and edit one long string of paths in [Windows 7](https://answers.microsoft.com/en-us/windows/forum/all/adding-path-variable/97300613-20cb-4d85-8d0e-cc9d3549ba23) (I think the native editing experience has gotten better now, but I've mostly moved to macOS), to [documenting the pains of integrating developer tools with corporate network proxies](https://github.com/ericrallen/proxy-config-dotfiles), avoiding having to remember or research all of this at every new enterprise consulting gig.

That documentation led to developing and maintaining a [bash](https://www.gnu.org/software/bash/) library that was widely distributed internally at one of the banks I consulted with; it even included automatic updates based on git tags to eliminate the pain of communicating changes across an unknown user base and transparent support of [`zsh`](https://www.zsh.org/) and other shells (even if they're weird and [start their Array indexes at `1`](https://stackoverflow.com/a/50433774/656011)) to handle [Apple's change of default shell on macOS](https://support.apple.com/en-ca/102360) and flexibly adapt to developer preferences.

I've even written multiple scripts to automate setting up development environments for new hires adopted by the IT departments at major financial institutions and fast-moving startups to help developers go from new laptops to first commits (and at nimbler companies, first production deployment) on day one. Shoutout to [thoughtbot](https://github.com/thoughtbot/laptop) and [brew](https://github.com/Homebrew/install/blob/master/install.sh) for providing fantastic prior art on approaching this and for [shellcheck](https://www.shellcheck.net/) for teaching me how to write robust shell scripts. The next setup script I write will be written on my own time and machine to open-source it and [never have to write it again](https://simonwillison.net/2025/Jan/24/selfish-open-source/).

Sometimes, we can't automate things, and that's okay. The goal is to think about how to streamline workflows to reduce toil, increase efficiency, and implement what we can when we can.

### Leave it better than you found it.

The philosophy of [leaving the world a better place](https://en.wikipedia.org/wiki/Leaving_the_world_a_better_place) is well-known, and while I do my best to follow it in how I live my everyday life, it's also become an important guiding principle for how I approach codebases, teams, and organizations. Based on my experience and industry research, I offer what I can and do my best to improve the existing code and processes that I touch, or at least maintain them and leave them in a state no worse than I found them.

If there are no tests, I add some. If there are flaky tests, I make them reliable. If there is no code review process, I advocate for one. If there's no release pipeline, I configure one. If there's a bad interview process, I try to implement a [better](https://interwebalchemy.com/blog/post/how-i-interview-developers/) one. If something takes too long to do, I make it faster.

In one role, I inherited an internal database for tracking conference [Calls for Proposals/Papers/Presentations](https://glasnt.com/blog/on-proposing-to-conferences/) (CFPs) that worked well but was plagued with flaky, rarely-used functionality leveraging AirTable automation that would send out error emails to our manager any time automation failed. After spending some time trying to diagnose and fix the errors, I documented the current state of our investigation and attempts to fix the issue and then disabled that part of the system as a sort of ["scream test."](https://lunduke.substack.com/p/the-scream-test)

Luckily, no one screamed, and as a bonus, our manager stopped receiving emails about automation errors. They stopped pinging us about the error emails; no one had to think about this again.

In another role, I was brought in as a consultant to a team that was trying to improve the Accessibility (you might see this written as [a11y](https://www.a11yproject.com/), a [numeronym](https://en.wikipedia.org/wiki/Numeronym)) of its User Interface (UI) while rewriting its front-end from a legacy server-rendered system into a homegrown front-end framework. They were inundated with tickets to resolve longstanding UI issues, and their UI was full of similar but just a little bit different components that didn't share any code. These tickets and disparities led to tension and distrust in the organization.

I partnered with their User Experience (UX) and Design teams to start defining a [component library](https://www.freecodecamp.org/news/what-is-a-component-library-when-to-build-your-own) to reduce the number of ways that interaction patterns were implemented. I also worked with their Accessibility team to make these components accessible to ensure the development teams could adopt them to solve their UI Accessibility issues.

It took slightly more time and a lot more coordination up front, but taking this approach led to a more unified, accessible UI that increased happiness across the board:

- Design and UX were happy that their patterns were implemented correctly and easily updated everywhere in one release.
- Accessibility was happy because they could easily test all the patterns in one central location, focusing more on the complex interactions between patterns and less time recreating similar tickets for similar components.
- Development was happy because they could make changes in one central location, ask for clarification on designs that didn't follow the established patterns, and receive fewer tickets for UI and Accessibility issues.
- Management was happy because tickets were being resolved, and time spent refactoring and managing technical debt was reduced.
- Users were happy because they could more reliably navigate and interact with the UI using keyboards and Assistive Technology (AT), such as screen readers.

The goal is to make it easier for the next person who occupies your seat to come in and do good work. Fix the things you wish had been fixed for you, or at least leave the next adventurer some breadcrumbs to follow as they navigate through the forest.

## Engineering Your Axioms

My Core Engineering Axioms might be different from yours. It can be valuable to take a step back and think deeply about how you do things, why you do them that way, and what impact that has on the people around you.

These axioms provide a litmus test when considering a new company, project, or team. Does the culture align with your axioms, or will you be conflicted?

Defining your axioms, core values, guiding principles, or whatever you want to call them provides insight into what you should be doing and where you should be doing it, allowing you to focus on what matters to you in your own work.
