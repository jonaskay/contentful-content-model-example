module.exports = function (migration) {
  const block = migration
    .createContentType("block")
    .name("Block")
    .displayField("name");

  const name = block.createField("name");
  name.name("Name").type("Symbol").required(true);

  const component = block.createField("component");
  component
    .name("Component")
    .type("Symbol")
    .required(true)
    .validations([{ regexp: { pattern: "^[A-Z][a-zA-Z0-9]*$" } }]);

  const properties = block.createField("properties");
  properties.name("Properties").type("Object");
};
