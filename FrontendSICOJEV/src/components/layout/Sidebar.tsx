import {
  Dashboard,
  Event,
  Payments,
  Assessment,
  People,
  Settings,
  Save,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems = [
  {
    text: "Dashboard",
    icon: <Dashboard />,
  },
  {
    text: "Actividades",
    icon: <Event />,
  },
  {
    text: "Movimientos",
    icon: <Payments />,
  },
  {
    text: "Reportes",
    icon: <Assessment />,
  },
  {
    text: "Usuarios",
    icon: <People />,
  },
  {
    text: "Configuración",
    icon: <Settings />,
  },
  {
    text: "Respaldos",
    icon: <Save />,
  },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
        >
          SICOJEV
        </Typography>

        <Typography variant="body2">
          Sociedad de Jóvenes
        </Typography>

        <Typography variant="caption">
          Iglesia Esperanza Viva
        </Typography>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,.2)",
        }}
      />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              py: 1.5,
              mx: 1,
              my: .5,
              borderRadius: 2,

              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
