module.exports = function (migration) {
  const heroBlock = migration
    .createContentType("heroBlock")
    .name("Hero Block")
    .displayField("name");

  const name = heroBlock.createField("name");
  name.name("Name").type("Symbol").required(true);

  const heading = heroBlock.createField("heading");
  heading.name("Heading").type("Symbol").required(true);

  const image = heroBlock.createField("image");
  image
    .name("Image")
    .type("Link")
    .linkType("Asset")
    .validations([{ linkMimetypeGroup: ["image"] }]);
};
