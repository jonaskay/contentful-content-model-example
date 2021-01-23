module.exports = function (migration) {
  const author = migration
    .createContentType("author")
    .name("Author")
    .displayField("name");

  const name = author.createField("name");
  name.name("Name").type("Symbol").required(true);

  const avatar = author.createField("avatar");
  avatar
    .name("Avatar")
    .type("Link")
    .linkType("Asset")
    .validations([{ linkMimetypeGroup: ["image"] }]);

  const articlePage = migration.editContentType("articlePage");
  const authorField = articlePage.createField("author");
  authorField
    .name("Author")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["author"] }]);
};
