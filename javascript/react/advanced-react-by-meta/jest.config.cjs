module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css | less | scss)$': 'identity-obj-proxy',
    },
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ],
    "transform": {
        "^.+\\.(js|jsx)$": "babel-jest",
    }
};