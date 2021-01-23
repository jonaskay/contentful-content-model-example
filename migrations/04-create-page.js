module.exports = function (migration) {
  const page = migration
    .createContentType("page")
    .name("Page")
    .displayField("name");

  const name = page.createField("name");
  name.name("Name").type("Symbol").required(true);

  const slug = page.createField("slug");
  slug
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations([{ unique: true }]);
  page.changeFieldControl("slug", "builtin", "slugEditor");

  const layout = page.createField("layout");
  layout
    .name("Layout")
    .type("Link")
    .linkType("Entry")
    .required(true)
    .validations([{ linkContentType: ["layout"] }]);

  const blocks = page.createField("blocks");
  blocks
    .name("Blocks")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["heroBlock", "block"] }],
    });
};
