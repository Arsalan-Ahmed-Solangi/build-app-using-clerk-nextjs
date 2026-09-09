"use client";

import theme from "@/styles/theme/theme";
import { ClerkProvider } from "@clerk/nextjs";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function Providers({ children }) {
  return (
    <ClerkProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
