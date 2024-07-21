---
title: 'Crawl Blog #3'
description: "Softly shaded"
date: 'Jul 21 2024'
thumbnail: "/posts/devblogs/crawl/softshadowsthumbnail.png"
---

Not much happened this week to be honest. I got caught up in... playing too much Elden Ring again...

<BlogHeader title="Soft Shadows"/>

I did get around to adding blurry soft shadows like I mentioned last week:

<video src="/posts/devblogs/crawl/softshadows1.mp4" type="video/mp4" controls></video>

This probably isn't the final version of the feature but it looks good enough already.
I went ahead and made it an option in case the shader breaks on certain devices or causes framerate issues, though I doubt it will have a performance impact.
Anyway, it only takes a couple seconds to make it an option so why not? Just don't go overboard throwing 100s of options at the player outside of console commands.

<BlogHeader title="Random Stuff"/>

I also experimented with having a sort of skybox in the background. I'd imagine it would be something like dense forest textures for the forest level, dark cave textures for the caves, etc.
This led me to realize that I was using alpha for the checkerboard pattern on the tiles instead of just adjusting the brightness of the tile color, that's fixed now! 
Unfortunately, the optimization I did last week for skipping tiles that aren't visible means either the camera clear color or the skybox would render instead of the FOV "not-visible" color (black). 
So that didn't pan out but, it's whatever, it probably wouldn't look great anyway.

Also, one of those bugs wasn't actually fixed, it came back. It didn't take me long to discover the problem and fix it for good this time (probably).

<BlogHeader title="The Other Thing I Was Busy With"/>

Other than Elden Ring, I did spend a few days tinkering with a sidescroller game in s&box. [Carson Kompon](https://carsonk.net/) was showing me how his [Sprite Tools](https://sbox.game/facepunch/spritetools) library worked, and I thought it was so neat that it motivated me to tinker on something in s&box again. It had been a while since I last worked with s&box but, it didn't take long for me to get back into the groove and enjoy the relatively frictionless workflow that this engine provides. 

<video src="/posts/devblogs/rose/rosedemo1.mp4" type="video/mp4" controls></video>

I was just messing around with the sprite tools but, I think I stumbled onto something potentially pretty fun and challenging. Being able to stumble onto interesting gameplay just by implementing something I wanted to play with (kicking rigidbodies around in this case) would be a great habit to start forming.

Like I said, not a very productive week this time. I'm also going to (hopefully) start getting pretty busy with IRL stuff soon. Otherwise, I also hope I can figure out how to make this Crawl game fun. That would make for more interesting dev blogs in the future.

Seeya next time!