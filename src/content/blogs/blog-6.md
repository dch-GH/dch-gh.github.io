---
title: '6: Verge of Going Insane'
description: "AAAAAAAAAAAAAA"
date: 'Nov 11 2024'
thumbnail: "/images/angry-stickman.gif"
---

<Spotify src="track/5HDn8fl53QzZxejNpx1q9w?si=a3570531a39341e8" />

I do not know what to do anymore. I'm at the end of my rope with this stuff. I'm starting to believe that I don't have a brain made for making games. Maybe I don't have a brain at all.

Look, here's the first commit of this project:
![image](/posts/devblogs/crawl/first-commit.png)

Over 5 months. It's been 5 months and I have NOTHING. 
<BlogDivider/>
For a few days in October, I added a sound mixer system (just multiplying floats wow), added user settings with serialization, and improved the prototype system by making it use an actual abstract prototype base like I wanted to originally.
<BlogHeader title="prototypes suck less"/>

```cs
using System.Text.Json.Serialization;

namespace Crawl;

[JsonDerivedType( typeof( BasePrototype ), "base" )]
[JsonDerivedType( typeof( EntityPrototype ), "entity" )]
[JsonDerivedType( typeof( ItemPrototype ), "item" )]
[JsonDerivedType( typeof( RecipePrototype ), "recipe" )]
[JsonDerivedType( typeof( LevelPrototype ), "level" )]
[JsonDerivedType( typeof( TilePrototype ), "tile" )]
[JsonDerivedType( typeof( TilePalettePrototype ), "tile_palette" )]
[JsonDerivedType( typeof( SoundCollectionPrototype ), "sound_collection" )]
public class BasePrototype
{
	[JsonPropertyName( "id" )]
	public string Id { get; set; }

	/// <summary>
	/// Entity, Level, TilePallette, etc.
	/// </summary>
	[JsonPropertyName( "kind" )]
	public string PrototypeKind { get; set; }
}
```

```json
    {
        "id": "sounds_footstep_grass",
        "$type": "sound_collection",
...
```
So on and so forth. I had fun fixing this up. That's about it. No more repeating the Id and PrototypeKind properties per each subclass of prototypes. I knew that I didn't need to do that but I was just getting it working when I made it and not bothering to figure out how to do it properly. To get this working I had to use a release candidate version of System.Text.Json anyway, so it might literally not have been a feature. Whatever.

<BlogHeader title="i command thee"/>

These past few days I've done minor experimenting where I'll make another branch, rip loads of stuff out and try to see how making the game into a different game goes. Factory/RTS game, Sokobon game. The only real value I've gained from this is confidence in the "Command" pattern, which I implemented pretty early on since I saw it suggested in some blog I read. 


I was able to very easily change the `BumpCommand` from the roguelike version of the game into a version that works great in the sokobon test:
```cs
public sealed class BumpCommand : Command
{
	private Entity _bumped;
	private Vector2 _direction;

	public BumpCommand( Entity source, Entity bumped, Vector2 direction ) : base( source )
	{
		_bumped = bumped;
		_direction = direction;
	}

	public override CommandResult Perform( Scene scene )
	{
		if ( scene.HasComponent<PushableComponent>( _bumped ) && scene.TryGetComponentFrom<TransformComponent>( _bumped, out var xform ) )
		{
			if ( !scene.TryGetSystem<Tilemap>( out var tilemap ) || !tilemap.TryGetTile( xform.Position + _direction, out var pushedDestTile ) )
				return CommandResult.Failure;

			if ( !pushedDestTile.IsWalkable )
				return CommandResult.Failure;

			var pushedWalk = new WalkCommand( _bumped, _direction );
			pushedWalk.Perform( scene );

			var pusherWalk = new WalkCommand( Source, _direction );
			pusherWalk.Perform( scene );
		}
...
```
The command moves the thing being pushed and moves the pusher along with it so you dont have to tap movement keys a bunch of times. All done just using WalkCommand and BumpCommand itself. Pretty neat. I think I like the idea of making actions an actual object. It's one of the few instances I've seen OOP be taken advantage of really. The data and functionality are in the same place and it makes sense. Obviously, obviously obviously obviously, this could be done in any paradigm in any language, it's just convienent in the OOP world.
```cs
var x = new ThingCommand(a,b,c);
x.Perform();
```
All of them have the same Perform method and just work on the data they were constructed with. I don't really care about OOP, but I like seeing it have a nice use like this.

Ok, that's all the possibly slightly interesting content of this post. The rest is just me saying "i dont know" over and over and over and over again. Bail out now if you want.

<BlogHeader title="i am fukkn sad"/>

I feel like no scope is small enough. There's something wrong with me, anyone else under the sun can handle even bigger scopes by THEMSELVES. I dunno if it's just because I've literally never taken the first solitary step in making something from nothing in regards to game design. I literally cannot think of a single concept. Even if I could, I would just sit with analaysis paralysis and indecision for hours anyway. I do NOT want to be like those youtubers who are restarting their game for the 28th time, but at this point I'm no better than them. I see that an option is to push past the pressure of making something fun and worth any time, and just make something garbage and finish it to finish it but, I don't see much point in that. What will I learn? I learned things from finishing the game jam game, but this just doesn't make sense. It'll just be a couple weeks of grunt work and result in a zero fun "game" regardless. 

I don't know what fun is. You would think after 2 decades of playing many many games that I would've absorbed at least some trace of knowing what makes a game fun, but no. I cannot describe to you when asked what I like about the games I enjoy, and what makes them fun. If it turns out this is not what I'm meant for, I can understand and take that. I'd really rather not, but it's possible that it's just another thing I'm not good at. I dunno what the next thing I invest years of time into will be, but I am becoming more and more convinced that I need to get ready to do that.
<Spotify src="track/5PhhffPSjGz8TR0w7FkzFG?si=58615654aa71469e" />