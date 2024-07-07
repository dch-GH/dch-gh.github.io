import path from "path";
const load = async ({ fetch }) => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/content/blogs/making-this-site.md": () => import("../../../chunks/making-this-site.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const posts = await Promise.all(
    iterablePostFiles.map(async ([filePath, resolver]) => {
      const { metadata } = await resolver();
      const { name } = path.parse(filePath);
      return {
        slug: name,
        ...metadata
      };
    })
  );
  return { posts };
};
export {
  load
};
