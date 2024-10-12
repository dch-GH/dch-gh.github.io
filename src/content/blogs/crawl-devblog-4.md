---
title: 'Crawl Blog #4'
description: "Crafted systems"
date: 'Sept  5 2024'
thumbnail: "/posts/devblogs/crawl/blog4_crafting.png"
---


<Spotify src="track/3IiZ5QNMDWrRYS0EAeyWIU?si=08849215b4144a38" />

Hey, long time no see. Last time I did say this:

>Like I said, not a very productive week this time. I’m also going to (hopefully) start getting pretty busy with IRL stuff soon. Otherwise, I also hope I can figure out how to make this Crawl game fun. That would make for more interesting dev blogs in the future.


Turns out, that did happen. I *have* been pretty busy with IRL stuff. But, it has been a good thing! There has been a bit of stress though, of course.

Having to balance things and get them done under some time pressure. I've still got a few things like that on my plate, but we just keep going.

Here's the list of commits since last time:

![image](/posts/devblogs/crawl/jul-august_commits.png)

Not even close to the frequency I usually have... Truly busy!

<BlogHeader title="Crafting Pivot"/>
  
So, like I said last time, the game isn't shaping up to be fun. I also have a big problem of enjoying the process of creating systems more than I do refining and iterating gameplay. Game design is hard. I really enjoyed creating the prototype system and deserialization system alongside it. It's really cool to have my own little framework that can read from text files and find the components listed in them, plug the text data into the fields and spawn an entity in the game and have those components placed on it with all the data and have it just work.
  
With my prototype system in mind, I realized that I could probably use it to make a crafting system relatively easily. So, that's what I've done. This was also really fun to get working, man I love making systems! This required a rework of the inventory system, which I was glad to do since I wasn't really a fan of it. But, it *was* going to work for the previous gameplay idea I was thinking of. This process actually ended up providing an unexpected challenge, a challenge that was similar to the one I faced when first writing the inventory code. I wanted to handle stacks and had a `StackComponent`. I ended up not even using it since I wound up just having the inventory be a bin of items that you would sell and they didn't stack.
  
Now that I want it to be more like a crafting game, I actually need things to stack. Here is an example recipe using the prototype system:

```json
    {
        "id": "recipe_pickaxe",
        "kind": "recipe",
        "icon": "pickaxe.png",
        "result": "item_pickaxe",
        "ingredients": {
            "item_wood_log": 2,
            "item_rock": 3
        }
    }

```
As you might be able to tell, it's just a shapeless crafting system. I kind of like how Minicraft and I guess Rust does it. It's also probably a little bit easier to do than shaped crafting. So, in t his case we need stacks of 2 items. The thing is, items are entities in the game. The way it works, which will be familiar to anyone who has worked with games is this: when you pick up an item, the actual item entity on the ground just gets visually disabled, and a reference to it (in this case because of ECS, it's just the entity numerical id) is stored in our inventory. The problem is we need to reference items in our inventory via their `prototype_id`. Every prototype has an ID, example for the "rock" item:

```json
    {
        "id": "item_rock",
        "kind": "item",
        "name": "Rock",
        "description": "Rock.",
        "sprite": "rock.png",
        "components": [
            {
                "type": "TreeFelling"
            }
        ]
    }

```
In this case obviously `item_rock` is the prototype id. (I'm glad I quickly shifted to using prefixes for prototypes. They're all stored in files like "items.json", "recipes.json", etc, but that's not really enough. I suggest doing this since it just makes organizing so much easier.) We need to reference via the id because the entity IDs are useless when it comes to checking if we have/can craft things. We'd have to iterate over every entity in the inventory, get the `ItemComponent` off of it, which has an instance of the deserialized prototype on it, and parse from that. So, we end up with this:

```cs

public sealed class InventoryComponent : Component
{
    public Dictionary<string, List<Entity>> Stacks = new();

}
```

So, we store items in our inventory in as a stack (list) of entities keyed via their prototype id. I think this works fine. Here's a little clip of how the game works with this system.

<video src="/posts/devblogs/crawl/crafting_gameplay.mp4" type="video/mp4" controls></video>

You find little rocks, grab rock, hit tree, make pickaxe, hit rock, get more little rocks. That's as far as I've gotten. I'm not sure that this will be the way to go either, I just wanted to make a crafting system. I also added water tiles. The water and boulders are generated via Perlin noise. It worked much better than I thought it would. The only thing I would need to do now is to make it a promise that the player randomly spawns at least near 1 item rock to chop down trees with. **I should note that the donut emoji is current stand-in fallback/error texture for things that don't have one set in their prototype, that's why the crafting table is a crafting donut.**

I think I want to make a building system so you can build a cozy (if ugly and top down) house. I would also need to start serializing the tilemap/level data so that would be interesting. As for the art for building, using only emoji for that is gonna be tough. Artists are so, so important. Programmer art or doing something like using emoji can get you far, but only to a certain point. I'm not sure where I'm gonna go with this without art. If you have an artist friend that wants to make games with you, you should definitely give it a try!

I'm glad I haven't completely dropped this project, but I'm not at all blind to the fact I'm just sorta spinning my wheels in place. I might have to bite the bullet and just settle on finishing a tiny, tiny game even if it's not fun. It's really hard to bring myself to do that though, but I should. I've also joined another project for a game. It seems like a very interesting, if ambitious concept. I'm no stranger to ambitious projects fizzling out really quickly so I've my thoughts and expectations are at a super comfortable and realistic place.

I've been lucky in the past for the time I had to dedicate to stuff without care, and I'm glad I did in some ways. As for these blogs, as I kind of expected, this will probably just turn into "when I feel like it". So that's why all the blogs I like are so inactive! I understand now. I'll try to post something if anything interesting happens. 

Thanks for reading, see ya next time!

<Spotify src="track/5lrCiaF8NG0IhNSqJEwbs6?si=ffca164a804e41bb" />