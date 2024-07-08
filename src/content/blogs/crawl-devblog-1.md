---
title: 'Crawl Blog #1'
description: "The first weekly devblog about my game"
date: 'Jul 07 2024'
thumbnail: "/posts/devblogs/crawl/crawl_early_chunks.png"
---


I'm working on a game. I've worked on a lot of things that could have turned into games, but I've finished virtually zero of them.
I participated in a game jam in November of last year and finished a game in 3 (more like 2) days. I wasn't really proud of how the game turned out. I appreciated that it functioned and that there was
a semblance of a goal. But, the gameplay loop wasn't properly conceived and wasn't playtested enough. At the very least, you could strategize even the tiniest amount and you could lose, that's good enough I guess.

Now, I want to finish something else, but something a bit more advanced that can have more time dedicated to it than 2 days. Before I talk about what or why the game is, I'll just briefly talk about the engine I'm using.
As you may know from the landing page or the [Projects page](/projects), I've worked a bit on [MIR](https://studiominus.nl/madness-interactive-reloaded.html). I started in April of 2023 but my tasks have really died down since the tail end
of last year. However, it was a great experience, lots of fun, and a personal challenge. I'm extremely grateful that I was given the contract to begin with so I can't complain. I wish it turned out to be more of a foot in the door into
dev work, but unfortunately that hasn't been the case.

<BlogHeader title="Walgelijk" />


The person who gave me the contract is "zooi". The game also happens to be made using
his custom C# engine built on top of [OpenTK](https://opentk.net/).
I love C#, I've used and enjoyed OpenTK, and I like custom engines, especially when they are written in C#. I have some experience in using/writing (mostly using) multiple custom C# engines so I had zero hesitation getting right into the work.
The engine is called [Walgelijk](https://github.com/mestiez/Walgelijk), which is Dutch for "Disgusting". In my opinion it is anything but disgusting, it's quite nice actually!
It only took me about a couple hours to get acquainted with the overall structure and workflow. The engine is based upon the ECS paradigm, or as zooi has described Walgelijk's version of it to me as: ECSU "Entities Components Systems Utilities". The opinionated paradigm is basically "pure" ECS with stateless systems but you aren't even forced into using it. You could just have 1 system that instantiates a bunch of normal OOP classes and go from there, no need for ECS. A big pro to having pure ECS + stateless systems wherever you can is that it makes serialization for things like game saves much easier since you just serialize each component as data since it's just that, data.

I like ECS mostly for the obvious highly-granular level of composition you have due to using components. I'm not really concerned with the potential performance benefit it may or may not bring nor am I really strong on these opinions. I don't really argue about this stuff, use whatever gets the job done and doesn't get in your way. Anyway, the engine is cool and sits in a nice place between "too large fully featured engine" and "too barebones framework", exactly what I want.

Another key factor for me is a good UI system. I'm spoiled by [s&box's](https://sbox.game) implementation of Razor for UI, but I don't mind some immediate mode GUI either. Walgelijk uses a custom IMGUI called "Onion". It's like Dear IMGUI but less complicated. Walgelijk seems to check all the boxes for me but there was an issue.
Walgelijk uses [SixLabor's](https://github.com/SixLabors/ImageSharp) ImageSharp library. The engine would almost be entirely free for commercial use if not for this library. So, I [replaced it with Skia](https://github.com/dch-GH/WalgelijkSkiaSharp) which is MIT licensed. This wasn't nearly as difficult as I thought it would be. Luckily image library APIs are pretty similar to each other. Now that I have this fork, I've tweaked it and made it sort of my own [offshoot of Walgelijk](https://github.com/dch-GH/Walgelijk). I'm sure zooi isn't super comfortable with having someone else rely on his upstream changes now. Even if it's just me, it might be a little bit more stressful having other people rely on you not breaking the thing.


<BlogHeader title="The Game"/>


I've tried to make a roguelike about a dozen times. I don't really know why... they seem fun to make I guess? And by roguelike I do mostly mean "traditional" in the sense of having a little '@' character run around in tile-sized steps on a tile map bumping into 'S' and 'g'
characters. I think Risk of Rain 2 deeply cemented my enjoyment of roguelike mechanics, especially random items. Items are fun! I think I mostly enjoy the concept of having my own little emergent sandbox using item effects. Many times have I gotten a tilemap working with the '@' character running around on it. But, when it came time to implement room generation, enemy pathfinding, field-of-view, I would quickly give up or lose interest. This time has been different. It has, if terrible, room generation, it has pathfinding, and it has tile-based FOV. At first I wanted to
write my own AStar implementation for pathfinding, but I found the algorithm pretty difficult to understand and my version performed poorly. I found a good library that performs amazingly, so I solved the problem but I wish I could've figured out the algorithm myself. The same thing happened with FOV. I've implemented a form of FOV where you create a mesh based on raycasts from the viewer, but never a tile-based version. I mostly just grabbed the code from a popular example of recursive shadowcasting. As for dungeon generation, I wanted to try and do a BSP algorithm.
I spent an embarrassingly high amount of days on this but could never get the math right. Room generation is just a basic brute force "random-until-it-doesn't-intersect-with-other-rooms" algorithm that I have done before, but this time I still just used GPT for help with it.

Here's what the game looks like at the moment:
![image](/posts/devblogs/crawl/current_jul_7.png)

As you can see, the game uses almost only emoji as assets. I got this idea from [ryleigh](https://x.com/rylgh?lang=en), a senior game designer at Facepunch. He had this project in s&box called "Roguemoji". As you might have guessed, it's a roguelike made with emojis. It was actually rendered almost entirely with s&box's Razor UI system. I really liked the aesthetic the game had, especially with those nicely outlined Windows 10 emoji.

Here's a screenshot of an early build of roguemoji from a video [ubre](https://smallfi.sh/team/ubre) kindly sent me:
![image](/posts/devblogs/crawl/roguemoji_early_ubre.png)

Another screenshot from when I tried to port the game to the then freshly new scene system:
![image](/posts/devblogs/crawl/roguemoji_rewrite.png)

You can surely see the resemblance. The next visual effect I need to steal are the drop shadows. They'll be a bit more difficult considering all he had to do was apply the css drop shadow onto the emoji text. I wish it were that easy for me! They definitely make it look way more pleasant.

<BlogHeader title="But, what do you actually do in it?"/>

So the project came to a point, which I have never previously reached, where I needed to actually think about the game and not just implementing the barebones engine stuff. At this point, I'm not sure what it is and I'm definitely sure it won't be fun. I may have also realized that making a traditional roguelike may not be as fun as I had expected. I only thought as far ahead as having a dungeon, fighting monsters, and progressing through to another floor. To be fair to myself, I just wanted to finish *something* regardless of what it is. But, I really want to make something that's actually fun. This is extremely difficult. I strongly believe that game design is much harder than game programming, and game programming itself is pretty hard. I've sorta pivoted into a "collect things on the floor and try to dodge enemies but maybe you can buy items with the money you get from selling the items you picked up when you leave the floor to buy effects which make you stronger and give you abilities" kind of thing. I'm really unsure, it's all super hazy and formless right now.

<BlogHeader title="What comes next"/>

I've spent a week as a break from working on the game to work on this site you're looking at now. It's a bit ironic that today when I opened up the project for the game I lost a bit of motivation. There's those strange bugs I mentioned in the previous blog post, the codebase is pretty expansive for what very small amount of actual game there is, and the whole "I don't know what to make the game into" thing. It would be a crime that I took a break to make this site with the purpose of writing blogs about the game, only to give up on it after just starting the blogs...

I don't think I'll be giving up on it, I don't have the sort of despair that usually precedes giving up on something like this, so that's good. I think it's just been kind of compounding from: not writing my own AStar like I wanted to, copying the FOV algo, not being able to write the dungeon generation algorithm I wanted, plus the things mentioned above coming together to bring me down a bit. I still want this to be a finished thing, but I can't stand it not being fun in some way, which makes this process a lot longer and more difficult.

You'll just have to wait until next week to see what happens.

Here's an extremely relevant gif in the meantime:
![image](/images/angry-stickman.gif)
