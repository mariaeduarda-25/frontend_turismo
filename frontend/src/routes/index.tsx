import { Routes, Route } from "react-router-dom";
import { InitialPage } from "../pages/Inicial";
import { Hospedagem } from "../pages/Hospedagem";
import { Passeios } from "../pages/Passeio";
import { Avaliacoes } from "../pages/Avaliacoes";
import { Login } from "../pages/Login";
import { CadastrePage } from "../pages/Cadastro";
import { ProtectedRoute } from "./ProtectedRoute";

export function RouteWeb() {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/hospedagens" element={<Hospedagem />} />
      <Route path="/passeios" element={<Passeios />} />
      <Route
        path="/avaliacoes"
        element={
          <ProtectedRoute>
            <Avaliacoes />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CadastrePage />} />
    </Routes>
  );
}
