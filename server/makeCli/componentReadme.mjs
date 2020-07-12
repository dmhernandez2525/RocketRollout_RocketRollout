const componentReadme = (name, props) => {
  const displayComponentReadme = `
# ${name}

## Import
  
\`\`\`
import ${name} from @comfort-order/dry
\`\`\`
  
## Important Notes
  
- Some Info
- Some Info
- Some Info
  
## Usage
  
**Using Basic Options**
  
\`\`\`jsx
<${name} props={props} />
\`\`\`
  
**Using Advanced Options**
  
\`\`\`jsx
const demo = "demo"
<div>
  <${name} props={props}>
  </${name}>
</div>;
\`\`\`
  
_Built with [DryCli](link to dry cli)_
`;

  return displayComponentReadme;
};

module.exports = componentReadme;
