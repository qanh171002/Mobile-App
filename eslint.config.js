// eslint.config.js
import { Linter } from "eslint";

/** @type {Linter.Config} */
const config = {
    plugins: ["import"],
    rules: {
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always"
            }
        ]
    }
};

export default config;
