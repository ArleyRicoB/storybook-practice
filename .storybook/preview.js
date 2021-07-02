import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import Center from '../src/components/Center/Center';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })
// import Center from '../src/components/Center/Center';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme} resetCSS>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
  (storyFn, context) => withConsole()(storyFn)(context),
  withKnobs,
  withA11y
]

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
});
