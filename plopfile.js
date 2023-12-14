module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Generate a new component with TypeScript',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name:',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/component.test.tsx.hbs',
        },
      ],
    });
  };
  