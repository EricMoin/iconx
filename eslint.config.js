import { defineConfig } from "eslint/config";
import config from "eslint-config-standard";


export default defineConfig([
  config,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    }
  }
]);