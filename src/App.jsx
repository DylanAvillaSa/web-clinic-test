import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import MedicPage from "./pages/medic";
import Dashboard from "./pages/dashboard";
import DoctorPage from "./pages/doctor";
import DoctorBookingPage from "./pages/booking";

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
          path='/beranda_user'
          element={<Dashboard />}
        />
        <Route
          path='/daftar_doktor'
          element={<DoctorPage />}
        />
        <Route
          path='/doktor/:id'
          element={<DoctorBookingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
