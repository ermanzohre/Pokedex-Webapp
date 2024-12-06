module.exports = {
    testEnvironment: "jest-environment-jsdom", // React bileşenlerini test etmek için
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testMatch: ["**/__test__/**/*.test.js"], // Sadece _test_ klasöründeki dosyaları test eder
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["@swc/jest"], // Use SWC for transformation
    },
};
