const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const load = async ({ params }) => {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/blogs/making-this-site.md": () => import("../../../../chunks/making-this-site.js") }), `../../../content/blogs/${params.slug}.md`, 6);
  const blogPost = post.metadata;
  return {
    content: post.default,
    blogPost: {
      ...blogPost
    }
  };
};
export {
  load
};
