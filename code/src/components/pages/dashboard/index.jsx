"use client";

import { UserButton } from "@clerk/nextjs";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            py: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Dashboard
          </Typography>

          <UserButton />
        </Stack>

        <Box sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Welcome back 👋
          </Typography>

          <Typography color="text.secondary">
            You’re successfully signed in. Welcome to your dashboard.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
