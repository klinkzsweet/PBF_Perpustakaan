import { React, useState, useEffect } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import { app, db } from "../Services/firebase";
import { collection, onSnapshot, deleteDoc, doc, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  const [book, setBook] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [pengunjung, setPengunjung] = useState([]);
  const [petugas, setPetugas] = useState([]);

  const getBookData = async () => {
    const response = await axios.get("http://localhost:8000/api/book", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // count data book
    const countBook = response.data.data.length;
    setBook(countBook);
  };

  const getJadwalData = async () => {
    const response = await axios.get("http://localhost:8000/api/jadwal", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // count data jadwal
    const countJadwal = response.data.data.length;
    setJadwal(countJadwal);
  };

  const getPengunjungData = async () => {
    const querySnapshot = await getDocs(collection(db, 'pengunjung'));
        const length = querySnapshot.size;
        setPengunjung(length);
  };

  const getPetugasData = async () => {
    const querySnapshot = await getDocs(collection(db, 'petugas'));
        const length = querySnapshot.size;
        setPetugas(length);
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  
    const fetchData = async () => {
      await getBookData();
      await getJadwalData();
      await getPengunjungData();
      await getPetugasData();
    };
  
    fetchData();
  
  }, []);

  return (
    <Layout>
      <main className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          </div>
        </div>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex items-center p-8 bg-sky-700 shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
            </div>
            <div>
              <span className="block text-2xl text-white font-bold">{jadwal}</span>
              <span className="block text-white">Jadwal</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-green-700 shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
            </div>
            <div>
              <span className="block text-2xl text-white font-bold">{book}</span>
              <span className="block text-white">Book</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-red-700 shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
            </div>
            <div>
              <span className="inline-block text-2xl text-white font-bold">{pengunjung}</span>
              <span className="block text-white">
                Pengunjung
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-yellow-700 shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
            <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
            </div>
            <div>
              <span className="block text-2xl text-white font-bold">{petugas}</span>
              <span className="block text-white">Petugas</span>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6"></section>
      </main>
    </Layout>
  );
};

export default Dashboard;
