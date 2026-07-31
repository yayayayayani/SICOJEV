import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import {
  AccountBalanceWallet,
  Paid,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";

import DashboardTable from "../../components/common/DashboardTable";
import FinancialCard from "../../components/common/FinancialCard";
import SectionTitle from "../../components/common/SectionTitle";

export default function DashboardPage() {
  return (
    <Grid
      container
      spacing={3}
    >
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <FinancialCard
          title="Saldo Disponible"
          value="Q 12,450.00"
          icon={<AccountBalanceWallet />}
          color="#1976D2"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <FinancialCard
          title="Ingresos del Mes"
          value="Q 3,500.00"
          icon={<TrendingUp />}
          color="#2E7D32"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <FinancialCard
          title="Egresos del Mes"
          value="Q 850.00"
          icon={<TrendingDown />}
          color="#C62828"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <FinancialCard
          title="Resultado Neto"
          value="Q 2,650.00"
          icon={<Paid />}
          color="#FB8C00"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Box sx={{ mt: 2 }}>
          <SectionTitle title="Últimos movimientos" />
          <DashboardTable />
        </Box>
      </Grid>
    </Grid>
  );
}
