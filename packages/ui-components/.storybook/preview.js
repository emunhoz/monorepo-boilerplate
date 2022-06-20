// import createTheme from '@monorepo/design-tokens'

// console.log(createTheme, 'createTheme')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
