---
title: Chess Tutoring in the Age of ChatGPT
date: 2024-12-30
excerpt: Let's leveraging Generative AI to improve a beginner chess player's skills.
author:
  name: Eric Allen
  picture: /assets/blog/authors/avatar-eric.jpg
coverImage: /assets/blog/chess-tutoring/chess-tutor-eval.png
ogImage:
  url: /assets/blog/chess-tutoring/chess-tutor-eval.png
---

As part of a recent interview process, I had to build an [LLM-powered Chess app](https://github.com/dvdagames/chess-tutor) using [Next.js](https://nextjs.org/), [chess.js](https://github.com/jhlywa/chess.js), and [react-chessboard](https://github.com/Clariity/react-chessboard). I'm not one to let a good project go to waste, especially when it combines two domains that interest me: Chess and Generative AI.

It's never been easier to learn new skills and to augment your existing knowledge in almost any area, and the ["King's Game"](https://en.wikipedia.org/wiki/Chess_or_the_King%27s_Game), Chess, is no different. There are nearly limitless possibilities from [books](https://www.gothamchess.com/my-book) to [tutorials](https://youtu.be/Ao9iOeK_jvU) to [puzzles](https://lichess.org/training) and [courses](https://chessly.com/).

But, in our [post-ChatGPT world](https://danielmiessler.com/blog/6-phases-post-gpt-world), can we leverage [the chess capabilities of Generative AI](https://youtu.be/wJzSHRNyspg) to improve at chess?

If you already have a higher-than-average [Elo](https://en.wikipedia.org/wiki/Elo_rating_system)? Maybe not. But if you're a beginner stuck in the 500s like me? Maybe.

## LLM-Powered Chess Tutoring

The goal of this tutor is to help players analyze and understand the impact of each move they make by combining features from the post-game analysis of tools like [chess.com](https://www.chess.com/analysis?tab=analysis) or [lichess](https://lichess.org/analysis) into the real-time play of a game of chess against a bot.

If you find yourself missing an attack from an opponent's knight after you move, in this tutoring environment, you can make your move and then check the legal moves for your opponent's knights before you commit.

### Primary Learning Features

- **Positional Help**: a lost player can right-click on a piece to ask the tutor if moving that piece is a good idea based on the current position
- **Outcome Analysis**: explore the legal moves of the opponent's pieces before committing to their move - the player can take back their move and try another one any number of times before committing to it
- **Real-time Evaluation**: the Stockfish evaluation of the position updates in real-time as each player moves pieces instead of waiting for the game to be over to see what the engine thinks about each position and how it changes over time
- **Commentary and Analysis**: the tutor can be configured to provide an automatic, running commentary as the game progresses or provide commentary only when asked or when the game comes to an end

## Generative Chess

In a somewhat-related upcoming project, I want to explore Generative AI's ability to play chess, so instead of playing against a standard engine, like [Stockfish](https://stockfishchess.org/), I originally integrated [OpenAI's](https://platform.openai.com/docs/models#gpt-3-5-turbo) previous-generation [`gpt-3.5-turbo-instruct`](https://www.clarifai.com/blog/gpt-3.5-turbo-instruct-model-from-openai) model, because allegedly [GPT-3.5 Turbo Instruct is pretty good at chess](https://dynomight.net/chess/).

Unfortunately, despite my best efforts to follow and improve upon the existing [chess prompt engineering](https://dynomight.net/more-chess/), it continued to frequently suggest illegal moves. So, I switched to [`gpt-4o-mini`](https://platform.openai.com/docs/models#gpt-4o-mini) and included a list of the legal moves from [chess.js](https://github.com/jhlywa/chess.js) in the user's messages. In my experience, the model almost always chooses a legal move and often plays like an opponent I would expect to encounter on chess.com. **Update 2025-01-03**: After more experimentation, it appears that `gpt-4o-mini` frequently plays the same game, and that game often involves risky early queen moves that lead to unlikely positions, so it has been replaced with `gpt-4o` for the time being while other models are investigated.

There are ongoing experiments to test other models, like [`o1-mini`](https://platform.openai.com/docs/models#o1), [`mistral-large`](https://mistral.ai/news/mistral-large-2407/), [`ministral-8b`](https://mistral.ai/news/ministraux/), [`claude-3-5-sonnet`](https://www.anthropic.com/news/3-5-models-and-computer-use), and [`claude-3-5-haiku`](https://www.anthropic.com/news/3-5-models-and-computer-use) with some tweaked prompt engineering to find an [optimal opponent](https://blog.mathieuacher.com/GPTsChessEloRatingLegalMoves/) for the chess tutoring app.

We don't want a perfect player, but we do want a reasonable approximation of a real player.

## Conclusions

It's still too early to know how much this tool might help, but I plan to use it as a supplement to my current chess learning, which mostly involves solving puzzles and analyzing games that go particularly well or particularly poorly.

Like the folks who have already explored the topic of Generative AI Chess, I don't think we'll ever see a model that can compete with something like Stockfish, but we might be able to simulate human opponents, which could be more valuable for low-Elo players.

This is a new tool with lots of room for improvement - in functionality and in user interface and user experience - but it has already helped me start to think about my chess moves in a more strategic way, and I'm looking forward to exploring more features and seeing how much I can level up my chess skills and how far we can push the integration of Generative AI and existing chess tools

P.S. - If you want to try it out for yourself, here's the [Chess Tutor GitHub Repo](https://github.com/DVDAGames/chess-tutor). You'll need to bring your own OpenAI API key, though, because tokens get expensive. Support for a `BASE_URL` in case you want to use [OpenRouter](https://openrouter.ai/) or another OpenAI-compatible API, like [Together](https://docs.together.ai/docs/openai-api-compatibility) and support for switching from `gpt-4o` to other hosted (and local models running through [Ollama](https://ollama.com/blog/openai-compatibility), [LM Studio](https://lmstudio.ai/), etc.) is coming soon.