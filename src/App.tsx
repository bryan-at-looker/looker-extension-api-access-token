import React from "react"
import { theme, Box, ComponentsProvider } from "@looker/components"
import { ThemeProvider } from "styled-components"
import { ExtensionProvider } from "@looker/extension-sdk-react"
import { AccessToken } from './AccessToken'


export function App () {

  return (
    <ExtensionProvider requiredLookerVersion=">=7.9.0">
      <ThemeProvider theme={theme}>
        <ComponentsProvider>
        <>
            <Box m="large" p="large">
              <AccessToken></AccessToken>
            </Box>
        </>
        </ComponentsProvider>

      </ThemeProvider>
    </ExtensionProvider>
  )
}