module.exports = {
  extends: ["airbnb", "prettier", "plugin:promise/recommended"],
  parser: "babel-eslint",
  plugins: ["promise"],
  rules: {
    "max-len": ["error", { code: 80 }],
  },
};
