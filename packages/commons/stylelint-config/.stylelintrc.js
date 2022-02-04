module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-twbs-bootstrap/css",
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  rules: {
    "color-named": null,
    "color-hex-case": null,
    "function-whitespace-after": null,
    "font-family-no-missing-generic-family-keyword": null,
    "font-family-name-quotes": null,
    "no-missing-end-of-source-newline": null,
    "value-keyword-case": null,
    "no-eol-whitespace": null,
    "value-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    "declaration-block-trailing-semicolon": null,
    "string-quotes": "single",
    "number-leading-zero": null,
    "no-descending-specificity": null
  }
}
