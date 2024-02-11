/* eslint-disable import/no-anonymous-default-export */
const inputMinimumLength = async (input) => {
  if (input.length < 3) {
    return 'Name must be at least 3 characters.';
  }
  return true;
};

export default function (plop) {
  // Generate component
  plop.setGenerator('component', {
    description: 'Component scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of the new component',
        validate: inputMinimumLength,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{ properCase componentName }}/',
        base: '__generators__/component/',
        templateFiles: '__generators__/component/*.*',
      },
    ],
  });

  // Generate foundation
  plop.setGenerator('foundation', {
    description: 'Foundation scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'foundationName',
        message: 'Name of new foundational element',
        validate: inputMinimumLength,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/styles/foundations/{{ dashCase foundationName }}/',
        base: '__generators__/foundation/',
        templateFiles: '__generators__/foundation/*.*',
      },
      {
        type: 'append',
        path: 'src/styles/foundations/index.css',
        template:
          "@import url('./{{ dashCase foundationName }}/{{ dashCase foundationName }}.css');",
      },
    ],
  });

  plop.setHelper(
    'capitalizeFirst',
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1),
  );
}
