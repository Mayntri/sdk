import React, { useMemo } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import { theme } from '../src/theme'
import { ThemeProvider } from '../src/theme/ThemeProvider'

const THEMES = {
  light: theme(),
  dark: theme(),
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals

  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey])

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
}
