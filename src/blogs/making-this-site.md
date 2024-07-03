---
title: 'Making This Site'
description: 'A blogpost about making this blog'
date: 'Jul 01 2024'
thumbnail: "/posts/making-this-site/heroImage1.jpg"
---

# Which framework, bro?
I've had quite a time trying to get a website like this put together. I first had the idea to make my own site (specifically as a portfolio piece) around April of 2023.
When I set about on the project, I had a hard time picking a framework. My experience in webdev is (thankfully) pretty limited. In the past, I've heard jokes/opinions of other people lamenting
the abundance of frameworks and then I very suddenly understood their pain.

There are **actually** too many options. I just wanted a basic static site to put stuff on and say "here's what I've worked on". This framework, that framework, you need to use
Vue components, React components, JSX, Next.js, Nuxt.js, compile this yourself, etc. COMPONENTS, COMPONENTS!! It was just very overwhelming- especially when you consider that all I've known up until that point
is old-school HTML, JS, CSS. So, that's what I ended up opting for.

I tried to make my website with the most basic tools possible: just VSCode + HTML/JS/CSS. Then I realized making it look good and act [responsive](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
was way harder than I had guessed (go figure). So, I caved a little bit and used [Bootstrap](https://getbootstrap.com/). This library essentially gives you some premade CSS classes to work with.
This wasn't a bad decision, it did mostly all I wanted it to do. The problem is I still
wound up manually writing way more HTML than I should have. Also, responsive doesn't mean what you think it means unless you are already in the know. Responsive means how well the site adjusts to other devices, display sizes, etc,
not the literal millisecond responsiveness of the website.
Webdev is filled with terms that don't 
accurately represent their meaning. Try to guess what "slug" means in the context of webdev.

**Take a look at this:**

```html
<!-- MIR -->
<div class="col-sm-" style="padding: 24px;">
    <div class="card bg-opacity-25 text-bg-dark">
        <div class="card-body d-flex flex-column justify-content-center gap-2">
            <p class="card-title display-6 text-left fw-bold">Madness Interactive Reloaded</p>
            <p class="fs-3 fw-medium">2023</p>
            <p class="fs-6">I worked on various parts of MIR, but more notably:
                improved upon/created
                dev tools and editors, lots of bug fixing, and writing tests and documentation.</p>
            <iframe height="360" src="https://www.youtube.com/embed/9pq9Co8zC2Y"
                title="Madness Interactive Reloaded - Gameplay Trailer" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</div>
```
**This is how the old site displayed content... my own little awful manually typed out components.
Now, multiply that by all the projects and any other info boxes I wanted to add.**

I do think it turned out better than it could've if I had chosen not to use Bootstrap, but it's still pretty bad.
It was a stark contrast to what I've been a bit spoiled by: [s&box](https://sbox.game/)'s Razor UI. Basically, s&box lets you use Razor in the same way you would when writing
an ASP.Net Razor/Blazor, except to make UI for your games. Considering that I'd been using this for about 2 years, I got used to it! So, throughout this whole
journey I'm dying to just use Razor so I can interweave C#, HTML, and CSS in the same file to construct a page. Apparently there are some [ways](https://github.com/ZarehD/AspNetStatic), but I still find them a bit 
overly complicated for my purposes and annoying to set up.

---

# The framework in question:
Today I was determined to use one of these fancy frameworks or tools and make the website properly.
I was going to give [Hugo](https://gohugo.io/) another shot, then considered [11ty](https://www.11ty.dev/), but a few people I know really enjoyed using [Sveltekit](https://kit.svelte.dev/).
I wanted to try this one since it seems to receive universal praise.

# Why?
The driving motivation this time around is mostly to have my own devblogs. I **love** devblogs. I've read *every* [Factorio Blog]("https://www.factorio.com/blog/"), some of them multiple times out of desperation since nothing else comes close. 
Another one I've enjoyed is [Clark Kromenaker](http://clarkkromenaker.com/)'s. He's re-implenting this engine for a heavily data-oriented game called Gabriel Knight 3. It's really satisfying.
I obviously can't list all the ones I've read, but it got to the point where I was wishing there were a good aggregator specifically for devblogs. Reddit seems like the obvious answer to this, but I tried that. Maybe I didn't look hard enough.

I especially enjoy the ones that somehow perfectly balance being technical without being as boring as a whitepaper about rocks or something. 
I can only hope to hit that balance myself, but I want my own devblog too. I started working on a game at the end of May and I want to finish this one. I've had a bad habit of tinkering but never finishing stuff. 
I *did* finish a game jam project for the first time in November of last year, but I'll probably give that experience its own post instead.

I want to see what it's like to write devblogs for a game you are actively developing.
Maybe having devblogs to look forward to showing off progress on can help maintain motivation as well.

Of course, it's not *that* simple. Never let this Yahtzee Croshaw image leave your mind:
![image](/posts/gamedev.png)
This has been the first time that proper bugs have actually cropped up unexpectedly in a project of mine because there's actually enough code at work that they can pop up in.
So, I guess that's unintuitively a kinda good sign.

Anyway, thanks for reading.