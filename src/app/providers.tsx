"use client";

import { StyledComponentsRegistry } from "@lab/lib/styled-component-registry";
import { theme } from "@lab/providers/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
