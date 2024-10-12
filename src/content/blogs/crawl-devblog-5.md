---
title: '5: Audio, Video, Pain'
description: "Collections of sounds"
date: 'Oct 11 2024'
thumbnail: "/posts/devblogs/crawl/blog5_sound.png"
---


<Spotify src="track/4YQ4S2CjFPFOxcVP4Q92ks?si=4e46bc0e2fb942cb" />

Hi. I still have no idea how to make a fun game out of what I have.

<BlogHeader title="Sound"/>

I got sound working.  Walgelijk/OpenTK/OpenAL are doing all the hard work, I just had to pass another parameter to the `Game` constructor in Walgelijk:

```cs
		_game = new Game(
			new OpenTKWindow( "Crawl", new Vector2( -1 ), new Vector2( 1280, 1024 ) ), new OpenALAudioRenderer() );
```
Very good API design as usual, zooi. I've said it a million times and I'll say it a billion more, I really enjoy working in this engine framework thing. It's actually a good thing that it's hard to distinguish it as either one or the either. Being in the middle between engine and framework is actually exactly what I've been wanting. zooi still doesn't understand how someone could possibly enjoy using Walgelijk but he'll just have to deal, I really enjoy it. I've come to like "code-first" "code-centric" engines/frameworks, especially after moving away from Unity years ago. I'm in a mode right now where I just don't care much about art, or that I'm trying to hone in on what I *can* do vs what I can't. At this point I'm not really sure if I can even program though...

## Sound Collection
I think I first saw this used in an open source game project I was interested in around 2020 or so. The concept is far from novel, it's just the first time I think I saw it done. A `SoundCollection` is almost self-explanatory. It's a collection of sounds except they share a common source. So in this case, I have footsteps, I want a bunch of different sounds for variation (more than just random pitch offset, which I will still probably do) that play for a single sound "type". It'll be easier to understand from looking at the prototype:

```json
[
    {
        "id": "sounds_footstep_grass",
        "kind": "sound_collection",
        "sounds": [
            {
                "path": "footsteps/grass01.wav",
                "volume": 0.7
            },
            {
                "path": "footsteps/grass02.wav",
                "volume": 0.7
            },
            {
                "path": "footsteps/grass03.wav",
                "volume": 0.7
            }
        ]
    },
    {
        "id": "sounds_footstep_water",
        "kind": "sound_collection",
        "sounds": [
            {
                "path": "footsteps/water01.wav",
                "volume": 0.6
            },
            {
                "path": "footsteps/water02.wav",
                "volume": 0.6
            },
            {
                "path": "footsteps/water03.wav",
                "volume": 0.6
            },
            {
                "path": "footsteps/water04.wav",
                "volume": 0.6
            }
        ]
    }
]
```

Then it gets created in its C# type form:

```cs
public SoundCollection( SoundCollectionPrototype prototype )
{
	Id = prototype.Id;

	foreach ( var soundProto in prototype.SoundPrototypes )
	{
		var path = string.Format( "sounds/{0}", soundProto.Path );
		_sounds.Add( new( soundProto, new Sound( Assets.Load<FixedAudioData>( path ).Value ) ) );
	}
}
```

When you "Play" a `SoundCollection` it does this:
```cs

if ( destTile.SoundCollection is not null )
    SoundCollectionManager.PlayOnce( destTile.SoundCollection );

...

public static void Play( string id )
{
    if ( !_sounds.TryGetValue( id, out var soundCollection ) )
	    return;

	var soundData = soundCollection.RandomSound;
	var volume = soundData.Prototype.Volume ?? 0.5f;
	Game.Main.AudioRenderer.Play( soundData.Sound, volume );
}
```

So, you see what I mean now? It's so you can have variable sounds to pick randomly from to play for a sound. Instead of having to manually play a variation, you can just reference the prototype id of the collection when you want to play a random sound from it.

### Here's a clip:

<video src="/posts/devblogs/crawl/blog5_sound_demo.mp4" type="video/mp4" controls></video>

So, it was a lot easier to get working than I expected. The most time consuming thing was me not realizing I didn't have the openAL32.dll library in my bin folder, oops.

<BlogDivider/>

## Assets
You may have noticed the use of the `Assets` class. zooi has been working on an AssetManager for Walgelijk, mostly due to the fact MIR requires it for modding. Another reason is due to the smaller file size when using an asset archive instead of raw assets.
I've been putting off migrating to the Asset system because I thought it would be more annoying than it is to switch to it. Thanks to PostBuild events in the .csproj file, it's not an issue at all.

```xml
<Target Name="PostBuild" AfterTargets="PostBuildEvent">
    <Exec
        Command="&quot;$(TargetDir)crawl21.exe&quot; &quot;$(ProjectDir)base&quot; &quot;$(ProjectDir)resources/base.waa&quot;" />
    <Exec
        Command="xcopy &quot;$(ProjectDir)resources&quot; &quot;$(TargetDir)resources&quot; /E /I /Y" />
</Target>
```

.waa is the archive format Walgelijk uses. I think it's cute, like saying "waaaa". This PostBuild step runs a packer "script" (it's the game's entry point but if args are provided, it will pack and close instead of running the game like normal), then copies them to the ProjectDir (for debugging) and the TargetDir as per usual.


<BlogHeader title="Outro"/>

While I'm struggling to do anything in terms of gameplay, I figured I could get some sounds in. I believe it may be extremely common that when people are working on a game, for a long time in the early stages there just isn't sound. Sound can bring the game up to a slightly higher level and make it pop a bit. I'm not trying to flounder around and do random stuff that doesn't matter. I'm not sure how to sit down and think about what would be fun to turn this into. 

It's like there's a brick wall in my brain. I've definitely considered giving up on it but I've stuck with it for so long that I shouldn't, but I really wouldn't blame myself since I just really have no clue where to take it. The problem is: what else do I do? I want to make something 2D and probably tile-based anyway, so why not just stick to this? I am rambling, which I do a lot :). Hopefully I'll be returning with some better news at some point.

See you in the future.

<Spotify src="track/7FKTrXz9LyXVrkgzExksqj?si=5c195a44df0840fb" />