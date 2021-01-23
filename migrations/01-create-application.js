module.exports = function (migration) {
  const application = migration
    .createContentType("application")
    .name("Application")
    .displayField("name");

  const name = application.createField("name");
  name.name("Name").type("Symbol").required(true);

  const baseMetaTitle = application.createField("baseMetaTitle");
  baseMetaTitle.name("Base Meta Title").type("Symbol").required(true);
};
