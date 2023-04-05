module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    node: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "max-len": ["warn", { "code": 80, "ignoreTemplateLiterals": true }],
    "prettier/prettier": ["error", { singleQuote: true }],
    "quotes": ["error", "single", { avoidEscape: true }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  }
};
