const tseslint = require("typescript-eslint");

module.exports = [
    { ignores: ["out/**", "node_modules/**"] },
    ...tseslint.configs.recommended,
    {
        languageOptions: { parser: tseslint.parser, parserOptions: { ecmaVersion: 6, sourceType: "module" } },
        plugins: { "@typescript-eslint": tseslint.plugin },
        rules: {
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    selector: "default",
                    format: ["camelCase", "PascalCase", "UPPER_CASE"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow",
                },
                { selector: "typeLike", format: ["PascalCase"] },
                { selector: "typeParameter", format: ["PascalCase"], prefix: ["T"] },
                { selector: "interface", format: ["PascalCase"], custom: { regex: "^I[A-Z]", match: false } },
            ],
            "no-unused-expressions": "warn",
            "no-throw-literal": "warn",
            semi: "off",
            "no-unused-vars": "off", // Disable checking for unused variables
            "@typescript-eslint/no-unused-vars": "warn", // Changed to warning
            eqeqeq: "warn",
            "prefer-const": "warn",
            "no-var": "warn", // Warn on var usage
            "@typescript-eslint/no-explicit-any": "warn", // Warn on any usage
            "@typescript-eslint/no-this-alias": "warn", // Warn on this aliasing
        },
    },
];
