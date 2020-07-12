const componentPropTable = (name, props) => {
  const componentProperties = Object.keys(props.properties).map(
    (propertyName) => {
      return `| \`${propertyName} \` | \`true\` | Some Text | \`type\` | \`${props.properties[propertyName]}\` |`;
    }
  );

  const componentEvents = Object.values(props.events).map((eventName) => {
    return `| \`${eventName}\` | \`true\` | Some Text   | \`CustomEvent\`    |`;
  });

  const displayComponentTable = `
# ${name} Prop Table

<!-- Auto Generated Below -->

## Properties

| Property                 | Required | Description | Type      | Default        |
| ------------------------ | -------- | ----------- | --------- | -------------- |
${componentProperties.join("\n")}

## Events

| Event          | Required | Description | Type               |
| -------------- | -------- | ----------- | ------------------ |
${componentEvents.join("\n")}

_Built with [DryCli](link to dry cli)_
`;

  return displayComponentTable;
};

module.exports = componentPropTable;
