module.exports = {
    roots: [
      "<rootDir>/src"
    ],
    preset: "ts-jest",
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/setupEnzyme.ts"],
};