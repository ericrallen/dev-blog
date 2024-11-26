---
title: Drift Compatibility for Developer Tools
date: 2024-11-26
excerpt: Giant Robots fighting giant monsters might seem like an unlikely place for insights into developer tooling, but the world of Pacific Rim provides an interesting way to consider the effectiveness of tools.
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
coverImage: /assets/blog/drift-compatibility/drift-compatibility.jpg
ogImage:
  url: /assets/blog/drift-compatibility/drift-compatibility.jpg
---

Developer tooling can make us wildly more effective or get in our way and prevent us from ever entering that all-important [state of capital F Flow](https://en.wikipedia.org/wiki/Flow_(psychology)).

As I've been grinding through a [bleak job market](https://news.ycombinator.com/item?id=39203937) after a brief career break to recover from burnout and pursue a lifelong passion for [game development](https://www.dvdagames.com/), I sought refuge in a guilty pleasure: giant robots fighting giant monsters.

## Pacific Rim

[_Pacific Rim_](https://www.imdb.com/title/tt1663662) isn't a perfect film, with a [Rotten Tomatoes score around 75%](https://www.rottentomatoes.com/m/pacific_rim_2013) and a screenplay that is good, but not great.

This [Redditor sums it up well](https://www.reddit.com/r/movies/comments/go10lr/comment/frdar78/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) in response to the thread [Pacific Rim (2013) is a perfect film](https://www.reddit.com/r/movies/comments/go10lr/pacific_rim_2013_is_a_perfect_film/):

> I don’t know if perfect is the word, but it is _satisfying_. You don’t watch Pacific Rim because you are interested in thought-provoking cinema, you watch it because you just want to turn off your brain for a bit and take a wild ride. It’s a great escapism movie

In the world of _Pacific Rim_ humans are besieged by giant monsters called "[Kaiju](https://pacificrim.fandom.com/wiki/Kaiju)," and have developed a defense system where humans pilot giant robots called "[Jaegers](https://pacificrim.fandom.com/wiki/Jaeger)" to enter into close quarters combat with these invaders from another world.

## Drift Compatibility

Due to the nature of the neural load of controlling these robot sentinels, each robot is piloted by a pair (or more in some rare cases like the 3-armed [Crimson Typhoon](https://pacificrim.fandom.com/wiki/Crimson_Typhoon_(Jaeger)) piloted by triplets) of humans who must work in tandem with their neural inputs and subconscious. This psychic connection is called "[the Drift](https://pacificrim.fandom.com/wiki/Drift)," and if two pilots are not compatible, they will fail to control the machine, and the consequences can be dire. To put it in terms of a different nerd lore, you can think of it like a [Mind Meld](https://en.wikipedia.org/wiki/Vulcan_(Star_Trek)#Mind_melds) from the [_Star Trek_ universe](https://en.wikipedia.org/wiki/Star_Trek).

The Drift is essentially a shared state of Flow, and [Flow is the holy grail of productive output](https://github.blog/developer-skills/career-growth/how-to-get-in-the-flow-while-coding-and-why-its-important/) in [creative pursuits](http://higherorderfun.com/blog/2011/02/16/programming-is-art/) and can even [help deal with those mind-numbing repetitive tasks](https://www.productivityhermit.com/post/microflow-the-art-of-enjoying-mundane-tasks), and Drift Compatibility is a measure of the ability of two pilots to work well together

I've always wondered what it would be like to be in a Drift Compatible pair programming session with another developer, but I have never reached that level of connection in a pairing session - maybe some [extreme programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming) practitioners have experienced this and could describe it.

The rise of Generative AI and copilots might remove the need for a Drift Compatible human from the equation. We only need to find a compatible tool to access the Drift. Tools like GitHub's Copilot have been working to reduce the friction of integrating Generative AI into your development workflow, living inside the editor, and providing near-constant suggestions. Sometimes I'm not sure if I'm hitting tab on some autocomplete from the editor's [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) or Copilot giving a quick suggestion. However, there are times when the illusion is shattered and it suggests a large block of unrelated or incorrect code.

The progression from chatting with a Large Language Model (LLM) in the browser, copying and pasting its output, and jumping back and forth between editor and browser to working in integrated environments like [Cursor](https://www.cursor.com/) has led to a proliferation of copilots that can meet different developers where they are most comfortable working.

Different copilots might be more or less Drift Compatible with each of us.

I've already mentioned two of the biggest contenders in this space, GitHub Copilot and Cursor, but there are many other options if you find one of them pulling against the Drift.

Here are some options I've been following, tested, or - in one case - contributed to in the past, but there are so, so many:

- [Open Interpreter](https://www.openinterpreter.com/)
- [Sourcegraph Cody](https://sourcegraph.com/cody)
- [Amazon Q Developer](https://aws.amazon.com/q/developer/) (formerly CodeWhisperer)
- [Tabnine](https://www.tabnine.com/)
- [Replit AI](https://replit.com/ai)
- [Snyk DeepCode AI](https://snyk.io/platform/deepcode-ai/)
- [Mentat](https://mentat.ai/)
- [Aider](https://aider.chat/)
- [Supermaven](https://supermaven.com/)
- [Zed](https://zed.dev/)
- [Void](https://voideditor.com/)
- [Qodo](https://www.qodo.ai/) (formerly Codium)

**Note**: If you're building developer tools in the Generative AI space or want a better understanding of how actual users perceive developer experience, this [# Top 10 Things Developers Want from their AI Code Assistants in 2024](https://redmonk.com/kholterhoff/2024/11/18/top-10-things-developers-want-from-their-ai-code-assistants-in-2024/?utm_source=pocket_shared) article from [Kate Holterhoff](https://bsky.app/profile/kateholterhoff.bsky.social) explores what developers are looking for, contains a much more exhaustive list of competitor tools, and has links to lots of discussions on Reddit where folks are giving their unfiltered thoughts on this stuff.

You can still use a separate chat window in your browser or a standalone desktop app, copy and paste code snippets, and have an assistant search some docs for you without letting an LLM get its weights and biases into your code. When teaching myself the Godot Engine and learning to write OpenGL shaders, I relied on the output of a [custom GPT ](https://openai.com/index/introducing-gpts/) that I created.

Sometimes, picking up a new tool is as simple as checking a box in your editor and integrating its input and output into your workflow, but in some cases, it may require an entirely new ecosystem, toolchain, or paradigm. That could represent a significant investment of time and effort for an unknown return.

I've been thinking about how I can quickly decide if it's worth investigating the Drift Compatibility of a new tool, and because acronyms (and [backronyms](https://en.wikipedia.org/wiki/Backronym)!) and frameworks are so fun, I present to you, the DRIFT Framework.

- **D**eveloper Focused
- **R**eadily Available
- **I**ncrementally Adoptable
- **F**lexible
- **T**ransformative

### Developer Focused

As a developer, tinkerer, and general nerd, I like to extend, tweak, and configure things - or at least know I can. It's easy to tell when something has been built with a developer in mind and when it has been built with an enterprise security team or layers of bureaucracy as the target and developers as nothing more than incidental users.

### Readily Available

I'm impatient. I'm not jumping on the bandwagon for something that I can't start using right now - I've [bought into the hype cycle too many times](https://www.escapistmagazine.com/8-games-that-didnt-live-up-to-their-hype/) to fall for that again. I don't want to see the demos your team carefully recorded. I want to see this thing in the real world.

If it looks mind-blowing, I'll either bookmark it or hope it pops back up as a [Show HN](https://news.ycombinator.com/show) post one day.

### Incrementally Adoptable

I was immediately put off by Cursor because [it automatically associated itself as the default program to open every programming-related MIME type](https://github.com/getcursor/cursor/issues/659). This [same thing came up many years ago](https://github.com/microsoft/vscode/issues/8687) when Visual Studio Code was still the new kid on the block, and many of us were using [Sublime Text](https://www.sublimetext.com/) but wanted to see if we were missing out on something.

Don't come in and take over or tell me what to do. Let me start using something on my terms and then gradually adopt more and more of it.

Bonus points for a Free Tier that lets me kick the tires.

### Flexible

I'm not always at a powerful machine or on the same operating system (most of my computing switches between a 2012 MacBook Pro, a Surface Pro 6, an iPad Mini 6th Generation, and an almost 15-year-old Asus gaming laptop running Linux - [btw, I use Arch](https://knowyourmeme.com/memes/btw-i-use-arch)). There are other available devices, but these continue to serve me well for everything except for running LLMs locally. If I'm running a local LLM, it's likely on another machine on my network, so it should be easy to configure a connection.

Something that can work across operating systems, environments, etc., is far more valuable than something only available on one platform. Back when Ruby was the cool kid on the block and [Sass](https://sass-lang.com/) was the cool way to write CSS, the advice for how to get Ruby working on Windows was basically, ["You can't."](https://www.dominicsayers.com/developing-in-ruby-using-windows/) That made adoption hard for many people, teams, and projects. It still caught on, and workarounds were found, but in the modern tech landscape, I will avoid something that only runs on specific hardware or operating systems and seek a more flexible alternative.

### Transformative

If the tool only marginally improves my current workflow, it needs to have a very low barrier to entry and stay mostly out of my way. However, if it allows me to achieve something I couldn't before (like helping me learn to write OpenGL Shaders) or allows me to work significantly faster and more efficiently, it can be a little more in the way or require a little more work on my part to interact with.