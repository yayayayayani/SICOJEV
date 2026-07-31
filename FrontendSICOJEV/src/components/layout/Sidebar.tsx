import { useLocation, useNavigate } from "react-router-dom";

import {
  Assessment,
  Dashboard,
  Event,
  Payments,
  People,
  Save,
  Settings,
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
    path: "/",
  },
  {
    text: "Actividades",
    icon: <Event />,
    path: "/actividades",
  },
  {
    text: "Movimientos",
    icon: <Payments />,
    path: "/movimientos",
  },
  {
    text: "Reportes",
    icon: <Assessment />,
    path: "/reportes",
  },
  {
    text: "Usuarios",
    icon: <People />,
    path: "/usuarios",
  },
  {
    text: "Configuración",
    icon: <Settings />,
    path: "/configuracion",
  },
  {
    text: "Respaldos",
    icon: <Save />,
    path: "/respaldos",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                    py: 1.5,
                    mx: 1,
                    my: .5,
                    borderRadius: 2,

                    color: "white",

                    "&.Mui-selected": {
                        bgcolor: "primary.main",
                    },

                    "&.Mui-selected:hover": {
                        bgcolor: "primary.main",
                    },

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
