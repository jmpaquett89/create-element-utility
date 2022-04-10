module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  testEnvironment: "jsdom",
  verbose: true,
};
