import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import type { ReactNode } from "react";

interface FinancialCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export default function FinancialCard({
  title,
  value,
  icon,
  color,
}: FinancialCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mt: 1,
              }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: color,
              color: "white",
              width: 52,
              height: 52,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
