import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";
import Login from "@views/Login";
import SignUp from "@views/SignUp";
import Home from "@views/Home";
import Producto from "@views/Productos";
import ProductoNew from "@views/ProductoNew";
import ChartsExamples from "@views/ChartsExamples";
import NotFound from "@views/NotFound";
import ProductoDetail from "@views/ProductoDetail";
import ProductoAdmin from "@views/ProductosAdmin";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/charts" element={<ChartsExamples />} />
        <Route
          path="/home"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <Producto />
            </PrivateRoute>
          }
        />
         <Route
          path="/productos"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <Producto />
            </PrivateRoute>
          }
        />
        <Route
          path="/productos/new"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <ProductoNew />
            </PrivateRoute>
          }
        />
         <Route
          path="/productos/:id"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <ProductoDetail />
            </PrivateRoute>
          }
        />
         <Route
          path="/admin/productos"
          element={
            <PrivateRoute allowedRoles={["public","admin"]}>
              <ProductoAdmin />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
