module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['<rootDir>/src/**/?(*.)+(test).ts?(x)'],
  modulePaths: ['<rootDir>/dist'],
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
  verbose: true,
  coveragePathIgnorePatterns: ['node_modules', 'utils', 'lib', 'dist', 'configs'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/configs/fileMock.js'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  collectCoverage: true
}
