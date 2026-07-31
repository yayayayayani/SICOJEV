import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import ActividadesPage from "../pages/Actividades/ActividadesPage";
import MovimientosPage from "../pages/Movimientos/MovimientosPage";
import ReportesPage from "../pages/Reportes/ReportesPage";
import UsuariosPage from "../pages/Usuarios/UsuariosPage";
import ConfiguracionPage from "../pages/configuracion/ConfiguracionPage";
import RespaldosPage from "../pages/Respaldos/RespaldosPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />

        <Route
          path="/actividades"
          element={
            <MainLayout>
              <ActividadesPage />
            </MainLayout>
          }
        />

        <Route
          path="/movimientos"
          element={
            <MainLayout>
              <MovimientosPage />
            </MainLayout>
          }
        />

        <Route
          path="/reportes"
          element={
            <MainLayout>
              <ReportesPage />
            </MainLayout>
          }
        />

        <Route
          path="/usuarios"
          element={
            <MainLayout>
              <UsuariosPage />
            </MainLayout>
          }
        />

        <Route
          path="/configuracion"
          element={
            <MainLayout>
              <ConfiguracionPage />
            </MainLayout>
          }
        />

        <Route
          path="/respaldos"
          element={
            <MainLayout>
              <RespaldosPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}