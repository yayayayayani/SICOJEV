import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Topbar />

        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
