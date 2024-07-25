/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'html'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
