/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";

import DetailPage from "./pages/DetailPage";
import CompanyDemandForm from "./pages/CompanyDemandForm.jsx";
import Dashboard from "./components/Dashboard.jsx";

import NotFound from "./pages/Notfound";
import DemandDetails from "./pages/DemandDetails";

import AllDemands from "./pages/AllDemands";
import Checkout from "./pages/Checkout.jsx";
import RequireAuth from "./components/RequiredAuth";
import CancelBid from './pages/FarmerCancelPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/create" element={<CompanyDemandForm />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/get" element={<AllDemands />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/demand/:id" element={<DemandDetails />} />
          <Route path="/profile/cancel" element={<CancelBid />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
