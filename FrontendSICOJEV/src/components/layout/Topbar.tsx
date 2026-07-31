import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >
            Sistema Contable SICOJEV
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Sociedad de Jóvenes • Iglesia Esperanza Viva
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Daylin
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Tesorero
            </Typography>
          </Box>

          <Avatar sx={{ bgcolor: "primary.main" }}>
            D
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
