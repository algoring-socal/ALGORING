import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TitlePage from "./pages/TitlePage";
import MainPage from "./pages/MainPage";
import InventoryPage from "./pages/InventoryPage";
import { Container } from "reactstrap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TitlePage />} />
      <Route path="/algoring" element={<MainPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <Container fluid>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
