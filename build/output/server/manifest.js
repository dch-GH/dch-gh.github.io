export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","fonts/atkinson-bold.woff","fonts/atkinson-regular.woff","fonts/IBMPlexMono-Bold.ttf","fonts/IBMPlexMono-Medium.ttf","fonts/IBMPlexMono-Regular.ttf","fonts/Inter-Bold.ttf","fonts/Inter-Medium.ttf","fonts/Inter-Regular.ttf","posts/gamedev.png","posts/making-this-site/heroImage1.jpg"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CtgH8Xgd.js","app":"_app/immutable/entry/app.DQpEDKVE.js","imports":["_app/immutable/entry/start.CtgH8Xgd.js","_app/immutable/chunks/entry.DDOyAdYp.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/paths.dylRzT0-.js","_app/immutable/entry/app.DQpEDKVE.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.BH9QoNPY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
