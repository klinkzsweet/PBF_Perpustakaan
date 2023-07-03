"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import Book from "./Pages/Book/Index";
import CreateBook from "./Pages/Book/Create";
import EditBook from "./Pages/Book/Edit";
import Jadwal from "./Pages/Jadwal/Index";
import CreateJadwal from "./Pages/Jadwal/Create";
import EditJadwal from "./Pages/Jadwal/Edit";
import Pengunjung from "./Pages/Pengunjung/Index";
import CreatePengunjung from "./Pages/Pengunjung/Create";
import EditPengunjung from "./Pages/Pengunjung/Edit";
import Petugas from "./Pages/Petugas/Index";
import CreatePetugas from "./Pages/Petugas/Create";
import EditPetugas from "./Pages/Petugas/Edit";


export default function Home() {
  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* book */}
          <Route path="/book" element={<Book />} />
          <Route path="/book/add" element={<CreateBook />} />
          <Route path="/book/edit/:id" element={<EditBook />} />

          {/* jadwal */}
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/jadwal/add" element={<CreateJadwal />} />
          <Route path="/jadwal/edit/:id" element={<EditJadwal />} />

          {/* pengunjung */}
          <Route path="/pengunjung" element={<Pengunjung />} />
          <Route path="/pengunjung/add" element={<CreatePengunjung />} />
          <Route path="/pengunjung/edit/:id" element={<EditPengunjung />} />

          {/* petugas */}
          <Route path="/petugas" element={<Petugas />} />
          <Route path="/petugas/add" element={<CreatePetugas />} />
          <Route path="/petugas/edit/:id" element={<EditPetugas />} />
        </Route>
      </Routes>
    </Router>
  );
}
