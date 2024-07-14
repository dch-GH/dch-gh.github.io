---
title: 'Crawl Blog #2'
description: "It's not over after all"
date: 'Jul 14 2024'
thumbnail: "/posts/devblogs/crawl/shadows2.png"
---


It’s official now, right? Two in a row makes this official!!
I’m excited to show some progress so let’s go.


<BlogHeader title="The Bugs"/>


Firstly, those bugs from last week which I felt like were some deep-rooted fundamental issues with the game turned out to be, in-fact, both simple 1 line of code fixes. After fixing these I felt my motivation return to what it was before. Now, onto what I’ve added with that rejuvenated motivation.


<BlogHeader title="Prototype System"/>


A few projects I’ve worked with have done prefabs a few different ways. One I really enjoyed, which was in an ECS engine, used whatever your favorite data language is to define entity prototypes.


So you would do something like this:




```yaml
    entity:
    - id: player
    - components:
        - Health
          maxHealth: 100
        - Physics
          static: true


...etc
```


I really liked this approach. It’s probably pretty standard and nothing special, but I thought it was cool. Walgelijk does support making your own serializers for data but doesn’t really have a built-in “Prefab System". This isn’t a problem at all, it means I get to make my own instead!




In the past I think I’ve tried to make my own version of this a couple times. It’s not that I didn’t know how, I just didn’t finish it or utilize it in any way. I default to YAML since it’s much more human-readable and typable. Though, I am a big proponent of JSON when in doubt because it’s pretty [simple](https://www.json.org/json-en.html) and robust. It just works, in my experience anyway.




Of course trying to use YAML didn’t go well otherwise I wouldn’t be mentioning JSON. Maybe I was doing something wrong but it just wasn’t working. So I switched to JSON and it worked. Thought it wasn’t fun typing out the prototypes in JSON.




The way I made it work is I have a BasePrototype class you inherit from and then fill with fields like normal.


```cs
public sealed class EntityPrototype : BasePrototype
{
    [JsonPropertyName( "id" )]
    public string Id { get; set; }


    /// <summary>
    /// Entity, Level, TilePallette, etc.
    /// </summary>
    [JsonPropertyName( "kind" )]
    public string PrototypeKind { get; set; }


    [JsonPropertyName( "sprite" )]
    public string? Sprite { get; set; }


    [JsonPropertyName( "renderOrder" )]
    public string? RenderOrder { get; set; }


    [JsonPropertyName( "tags" )]
    public List<string>? Tags { get; set; }


    [JsonPropertyName( "components" )]
    public List<ComponentPrototype> Components { get; set; }
}
```

Then you can define any entity prototypes you want in JSON like this:

```json
    {
        "id": "player",
        "kind": "entity",
        "sprite": "player.png",
        "renderOrder": "Player",
        "tags": [
            "Player"
        ],
        "components": [
            {
                "type": "Actor",
                "speed": 100
            },
            {
                "type": "FOV"
            },
            {
                "type": "Player"
            },
            {
                "type": "Info",
                "name": "You",
                "description": ""
            },
            {
                "type": "Health",
                "current": 1,
                "maxHealth": 10
            },
            {
                "type": "Living"
            },
            {
                "type": "Inventory"
            }
        ]
    }
```


The API is pretty simple:


```cs
    Prototypes.TrySpawnEntity( "player", out _, spawnPos );


    if ( !Prototypes.TryGet<TilePalette>( levelPrototype.Palette, out var palette ) )
    {
        Logger.Error( $"No TilePalette found with name {levelPrototype.Palette}" );
        return;
    }


    Prototypes.TryGetAllOf<ItemPrototype>( out var protos );
```
As you can see, I made good use of this system by having a bunch of things be prototypes instead of hardcoded.


![image](/posts/devblogs/crawl/prototypes_jsons.png)


This feels much nicer to work with.


<BlogHeader title="Shadows" />


Last week I mentioned how good the shadows in Roguemoji look and that I wanted to add that to my game. I’m glad I did because they make the game look so much better.


![image](/posts/devblogs/crawl/shadows1.png)


This definitely looks better, but you might notice something is off. The trees don’t have any shadows! The problem is that the trees are actually just wall tiles, not entities. I first configured the shadows to only draw for entities. Tiles are rendered via a batch system whereas entities are rendered using regular Walgelijk draw commands. At first I almost gave up before even trying because I assumed it would be too messy to get shadows working for both, but it was very easy thanks to Walgelijk being so awesome. 

You may also notice that there is now a floor under those trees. Before, it was just a black square underneath them. Now I render a "fake" floor tile underneath non-tile-shaped tiles (just trees for now). The floors are fake since they are rendered manually instead of representing actual tiles like in a multi-layer tilemap.


![image](/posts/devblogs/crawl/shadows2.png)


That looks a LOT better.

There was an issue where the tree shadows would stick out on left side of a neighboring tile even if you couldn't see the tree due to FOV. That was an easy fix that also led me to the realization that I wasn't skipping non-visible tiles while rendering. 🤦
These are probably not final. I do want to add a Gaussian blur effect to make it look more like a fuzzy drop shadow, but I didn't have the time to figure out the shader.


See you again next week!