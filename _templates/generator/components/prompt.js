module.exports = [
  {
    type: 'select',
    name: 'directory',
    message: 'select directory',
    choices: ['page', 'ui'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'input component name',
    validate: (input) => input !== '',
  },
]
