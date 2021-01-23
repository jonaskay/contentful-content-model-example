module.exports = function (migration) {
  const layout = migration
    .createContentType("layout")
    .name("Layout")
    .displayField("name");

  const name = layout.createField("name");
  name.name("Name").type("Symbol").required(true);

  const before = layout.createField("before");
  before
    .name("Blocks added before page content")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["heroBlock", "block"] }],
    });

  const after = layout.createField("after");
  after
    .name("Blocks added after page content")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["heroBlock", "block"] }],
    });
};
