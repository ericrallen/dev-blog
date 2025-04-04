export default function (plop) {
  plop.setHelper("kebabCase", (txt) => txt.split(" ").join("-").toLowerCase());

  // generate blog post markdown template in /_posts with the proper YAML frontmatter
  plop.setGenerator("post", {
    description: "Create a new blog post",
    prompts: [
      { name: "title", type: "input", message: "Post title?" },
      {
        name: "date",
        type: "input",
        message: "Publishing date?",
        default: new Date().toISOString().split("T")[0],
      },
      { name: "excerpt", type: "input", message: "Post description?" },
      {
        name: "mdFormat",
        type: "list",
        message: "Markdown format?",
        choices: ["mdx", "md"],
        default: "mdx",
      },
    ],
    actions: [
      {
        type: "add",
        path: `_posts/{{ kebabCase title }}.{{mdFormat}}`,
        templateFile: "templates/blog-post.md.hbs",
      },
    ],
  });
}
