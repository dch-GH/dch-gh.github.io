---
title: '7: A Pure Idea'
description: "It happened x)"
date: 'March 7 2025'
thumbnail: "/images/Screenshot 2025-03-07 022758.png"
---

<Spotify src="track/0PtX8hPA2i680YIfaAAgr0?si=c141e8f2ba494a42"/>

Hey, how are you doing? You can't answer back so I'll assume you are thriving. If you aren't, I wish you were.

So, last time I was upset and frustrated about that game I poured months into. I'm over it now of course. I do wish that it would have turned into something fun, but maybe I'll revisit it in the future.

Since then, I did indeed become very busy. I didn't think I would *actually* do the whole abandoned blog thing, but of course it happened x). After working with C# and a (good) [engine](https://github.com/mestiez/Walgelijk) passionately for a few months, I abandoned the project and took a break to focus on stuff outside of programming/gamedev. 


<BlogHeader title="Odin Break"/>

After a bit, when I felt like getting back into it, I took a break from C# and worked with [Odin](https://odin-lang.org/) some more. This is my favorite systems programming language by far. It's C without all the dumb shit. I've always preferred C over C++, and I like the removal of dumb shit. You can look into Odin if you want to, I'm not selling it. It's fun to write in, it's design is pragmatic, and is a joy to work with. One problem I have with working outside of engines is needing a good UI system. I don't want to make my own, and a good UI system is something I find mandatory for making a game or other realtime app. I saw [Clay](https://github.com/nicbarker/clay), which is awesome enough to have first-party Odin bindings, and implemented it into my small project. It's very good and comes with a useful UI debugger. 

<video src="/posts/devblogs/Recording 2025-03-07 024216.mp4" type="video/mp4" controls/>

I like consoles and I've always wanted to make one outside of Unity.
I specifically wanted a good command history buffer using the arrow keys. Nothing to write home about, even though I am right now I guess. This Odin project originally looked like this:

<video src="/posts/devblogs/crawl3d.mp4" type="video/mp4" controls/>

This 3D stuff (which I usually avoid since making a 3D game alone is very hard) was me learning how instanced rendering worked. This was actually a fun, interesting and useful process. I learned more about GPUs and how their memory works and is layed out. This is only the second time I've even touched the idea of trying to implement lighting. I've always loved that old blocky Minecraft lighting from the alpha and beta days. I recreated it for the most part, but when it came to shadow casting (even just on a per-tile basis), I quickly folded after attempting it once. I figured I could re-use some 2D tile based shadow code and just tack on the 3rd dimension, but no luck.

I ended up just making the project 2D and playing with the idea of a resource farming game, mostly about trees. I wanted to have wacky machines like sawblade launchers to farm the trees with. What I ended up focusing on more than the gameplay was: how to layout the structure of entities and game saving/loading. I did some game serialization with the emoji project, but that was in C# and relatively easy. Doing it in a manual memory management non-OOP language with a less complicated type system posed some challenges, but I had fun figuring it out and ended up not even hating my solution.


```go
Save_State :: struct {
	version:         i32,
	// If this is the default starting save all players start with.
	is_default_save: bool,
	resource_nodes:  []Node_Save,
	saplings:        []Sapling_Save,
	drops:           []Material_Save,
	player_data:     Player_Save,
}

...

nc.log(app.console, "Saving saplings...")
save.saplings = save_components(
	Sapling,
	Sapling_Save,
	app,
	&save,
	proc(app: ^App, e: Entity, comp: Sapling, buffer: ^[dynamic]Sapling_Save) {
		append_elem(
			buffer,
			Sapling_Save{id = comp.owner, position = e.position, life_time = comp.life_time},
		)
	},
)

...

save_components :: proc(
	$C: typeid,
	$S: typeid,
	app: ^App,
	save: ^Save_State,
	callback: proc(_: ^App, _: Entity, _: C, _: ^[dynamic]S),
) -> []S {
	entities := get_entities_with_component(app, C, false, context.temp_allocator)
	buffer := make([dynamic]S, context.temp_allocator)

	for entity in entities {
		if Entity_Flags.SerializeIgnore in entity.flags {
			continue
		}

		if comp, ok := try_get_component(entity, C); ok {
			callback(app, entity^, comp^, &buffer)
		}
	}

	sliced := buffer[:]
	slice.sort_by(sliced, proc(x, y: S) -> bool {
		return x.id < y.id
	})
	return sliced
}
```

Callbacks save the day again. This could be made more generic with dictionaries or something, but it works fine as is. Having to add another struct for saving per entity is a bit tedious, yeah. Regardless, it would probably end up in a megastruct anyway.

As for entities:

```go
Entity_Flags :: enum {
	None,
	Node,
	// Can this be picked up and dragged around with the mouse?
	Draggable,
	SerializeIgnore,
}

EntityId :: u32

Entity :: struct {
	id:               EntityId,
	is_valid:         bool,
	position:         rl.Vector2,
	rotation:         f32,
	velocity:         rl.Vector2,
	name:             string,
	render_order:     Render_Order,
	flags:            bit_set[Entity_Flags],
	sprite:           Maybe(Sprite),
	custom_tick_proc: Maybe(proc(app: ^App, dt: f32, entity: ^Entity)),
	custom_draw_proc: Maybe(proc(app: ^App, dt: f32, entity: ^Entity)),
	custom_delete:    Maybe(proc(app: ^App, entity: ^Entity)),
	hover_proc:       Maybe(proc(app: ^App, dt: f32, entity: ^Entity)),
	is_temp:          bool,
	temp_id:          i32,
	components:       map[typeid]Component,
}

generate_id :: proc() -> EntityId {
	old_rng := context.random_generator
	context.random_generator = crypto.random_generator()
	uid := uuid.generate_v4()
	context.random_generator = old_rng
	bytes := cast([16]u8)uid
	return EntityId(hash.crc32(bytes[:]))
}

// NOTE: "id" param is for loading from a save, so we restore the existing id instead of generating a new one.
// Enables persistent entities across saves.
entity_new :: proc(app: ^App, id: Maybe(EntityId) = nil) -> ^Entity {
	entity := new(Entity)
	entity.render_order = .Entities
	if id == nil {
		entity.id = generate_id()
	} else {
		entity.id = id.?
	}
	entity.is_valid = true

	app.entities[entity.id] = entity
	return entity
}
```

I had the concept of normal entities and "temp" entities. Stuff like particle effects or other things that aren't expected to live long. That stuff was just stored in a circular buffer whereas normal entities were stored in a dynamic array for the long term. The `EntityId` allows saving and reloading entities easily. The RNG method is probably not the best, but it worked. I ended up regretting the `custom_` procedure pointer fields. I think having those made things too complicated where instead just switch casing over each component type would have been easier to handle in one file instead of being spread around. It's probably just OOP tendencies that I don't realize how used to I've gotten. 

I almost went with the "Entity will just be a super big struct that can handle any possible Entity you can think of and have all the fields in the world" idea, but ended up wanting composition like usual. This isn't ECS, it's more like Unity/Godot/S&box. I've had my fill with ECS and I'm not as enamoured with it anymore. I think just preferring composition even in OOP land will be more productive than ECS, especially when prototyping.

<BlogHeader title="Real Inspiration"/>

That's sorta all I've had going on, but not really, since you can only put so much into words and our minds blur and obscure memory anyway. There is one interesting thing that's happened though. Last year I played a lot of [HYPER DEMON](https://store.steampowered.com/app/1743850/HYPER_DEMON/), to the extent that I could close my eyes and see the game in scarily high detail. While the music in the game is interesting and good, I always listen to my own, more well-fitting music.

Stuff like this: <iframe class="mx-auto self-center p-5" width="800" height="400" src="https://www.youtube.com/embed/bkintfXvEAY" title="HEALTH :: UNLOVED :: MUSIC VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In particular, lots and lots of another artist I absolutely love. Her songs fit perfectly. I just wished the game was timed to the music in some way... 🙂. I was on one of my walks listening to her music when the idea for this game fully occured to me. This is a game I **actually** want to play. Not just saying that in the sense of "make the game you want to play", no, this a game I hurriedly want to make so I can play and enjoy it as soon as possible. 

I've made some pretty quick progress and come up with a smart solution in regards to tooling. I'm keeping it a bit close to my chest, because it's very dear to me. It's like my own little world I want to make. If I figure out a way to sell it, it will be on the ever-monopolistic Steam store whenever it's finished. The thing about this that excites me is that it's an organic *pure idea*. I didn't sit down and think about making a game, forcing ideas of what maybe could be fun if you squinted and tilted your head. No, this is something that I imagine playing and wish were real. 

Like usual, the wheels could fall off for any reason at any time. I'm mostly terrified of getting the gameplay right. The core idea is there and obvious, but the implementation and execution is not exactly presenting a step-by-step guide of how to make itself. Hopefully it's just a matter of needing some experimentation to figure out fully. 

With what I have now, I'm already finding it challenging and fun. I'm being very blunt and opinionated about certain decisions. The game will be unforgiving and difficult. Like HYPER DEMON, the Souls series, and Getting Over It, I want that overcoming yourself and blissful sense of accomplishment when you finally reach the goal. It will make more sense given the full picture idea of the game. Not difficult for the sake of difficult or prolonging playtime, instead being difficult just because it needs to be.

I've just gotten one of the first important technical hurdles out of the way. It took a lot of effort and I overcomplicated it and ended up going back and modifying the original simpler solution. At least I'm getting better I guess. I can safely say that I've never had one of these "pure" ideas before. I'm hoping it works out. 

See you again.


<Spotify src="track/6LshtAb9ky09yLEbjFBg7S?si=c63ec133ef284d8f"/>