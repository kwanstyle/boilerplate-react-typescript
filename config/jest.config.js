module.exports = {
    rootDir: '../src',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)?$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    collectCoverage: true,
    coverageDirectory: '../coverage',
    setupFilesAfterEnv: ['../config/enzyme.config.js'],
};
