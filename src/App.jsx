import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import MedicPage from "./pages/medic";
import DoctorPage from "./pages/doctor";
import DoctorBookingPage from "./pages/booking";
import BiodataPage from "./pages/biodata";
import DashboardPage from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />

        {/* content */}
        <Route
          path='/beranda'
          element={<HomePage />}
        />
        <Route
          path='/rekam_medis'
          element={<MedicPage />}
        />

        <Route
          path='/daftar_doktor'
          element={<DoctorPage />}
        />
        <Route
          path='/doktor/:id'
          element={<DoctorBookingPage />}
        />
        <Route
          path='/biodata'
          element={<BiodataPage />}
        />
        <Route
          path='/beranda_user'
          element={<DashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
