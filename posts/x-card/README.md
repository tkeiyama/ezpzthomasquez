---
title: X Card
description: I added configs for better social sharing on X.
date: 2025-10-26
---

I added meta tags for X Card to enable rich previews when sharing posts on X.

## Commits

- [create XCard component](https://github.com/tkeiyama/ezpzthomasquez/commit/0bb27775f148baadc3990bdf8a65cd1cd2574e2a)
- [render XCard](https://github.com/tkeiyama/ezpzthomasquez/commit/3263dcac770b7433291b7e3ea361bc0e464e92b5)

## Motivation

I plan to share my posts on X, and I wanted followers to see a rich preview instead of a plain link.

## What I did

There are many tags to support X Card. For current use case on my blog, I use the summary card and set the minimum configs for it.

Here is what I did for it. I set:

- `twitter:card` to `summary`
  - ex. `<meta name="twitter:card" content="summary">`
- `twitter:title` to the page title
  - ex. `<meta name="twitter:title" content="X Card | EzPzThomaSquEz">`
- `twitter:description` to the page description
  - ex. `<meta name="twitter:description" content="I added configs for better social sharing on X.">`

I didn't set `twitter:image` for now because I don't plan to add images for posts.

## Reference

- [About X Cards](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards)
