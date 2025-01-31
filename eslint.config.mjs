import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import unocss from "@unocss/eslint-config/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    { ignores: ["**/dist", "**/.next"] },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    unocss,
];

export default eslintConfig;
