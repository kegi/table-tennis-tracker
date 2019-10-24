module.exports = {
  setupFiles: [
    './tests/setupTests.js'
  ],
  collectCoverageFrom: [
    './src/**/*.{tsx,ts,jsx,js}',
    '!src/index.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  }
}
