import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { app, db } from "../../Services/firebase";
import { collection, onSnapshot, deleteDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Layout from "@/app/Components/Layout";

const MySwal = withReactContent(Swal);

const Jadwal = () => {
  const token = localStorage.getItem("token");
  const [jadwal, setJadwal] = useState([]);

  const getJadwalData = async () => {
    const response = await axios.get("http://localhost:8000/api/jadwal", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setJadwal(response.data.data);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/jadwal/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      MySwal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });
      getJadwalData();
    } catch (error) {
      console.log(error.response.data);
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
    getJadwalData();
  }, []);

  return (
    <Layout>
      <div className="p-6 sm:p-10 space-y-6">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Data Jadwal</h1>
        </div>
        <Link
          to="/jadwal/add"
          className="bg-green-600 hover:bg-green-500 focus:bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create Jadwal
        </Link>
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="table-responsive">
            <table className="table w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hari
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jadwal.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.hari}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.waktu}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-1">
                      <Link
                        to={`/jadwal/edit/${item.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default Jadwal;
