module.exports = function (migration) {
  const articlePage = migration
    .createContentType("articlePage")
    .name("Article Page")
    .displayField("name");

  const name = articlePage.createField("name");
  name.name("Name").type("Symbol").required(true);

  const slug = articlePage.createField("slug");
  slug
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations([{ unique: true }]);
  articlePage.changeFieldControl("slug", "builtin", "slugEditor");

  const layout = articlePage.createField("layout");
  layout
    .name("Layout")
    .type("Link")
    .linkType("Entry")
    .required(true)
    .validations([{ linkContentType: ["layout"] }]);

  const body = articlePage.createField("body");
  body.name("Body").type("RichText");

  const before = articlePage.createField("before");
  before
    .name("Blocks added before body text")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["heroBlock", "block"] }],
    });

  const after = articlePage.createField("after");
  after
    .name("Blocks added after body text")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["heroBlock", "block"] }],
    });
};
