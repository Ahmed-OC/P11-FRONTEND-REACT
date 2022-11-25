import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Notfound/NotFound";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;