module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: [
    './enzyme.adapter.js',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['./.next/', './node_modules/', './cypress/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '../../testresults',
        outputName: 'shopping.junit.xml',
      },
    ],
  ],
};
