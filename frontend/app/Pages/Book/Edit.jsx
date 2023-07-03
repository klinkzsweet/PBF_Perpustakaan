import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "@/app/Components/Layout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditBook = () => {

  const {id} = useParams();
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');
  const [tahun, setTahun] = useState('');

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }

    const getBookData = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/book/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJudul(response.data.data.judul);
      setPenulis(response.data.data.penulis);
      setTahun(response.data.data.tahun);

    };
    getBookData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/api/book/${id}`,
        {
          judul: judul,
          penulis: penulis,
          tahun: tahun,
        },
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
      navigate("/book");
    } catch (error) {
      console.log(error.response.data);
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };




  return (
    <Layout>
      <div className="p-6 sm:p-10 space-y-6 mb-5">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Edit Buku</h1>
        </div>
        <Link
          to="/book"
          className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Back
        </Link>
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="judul"
            >
              Judul
            </label>
            <input
              type="text"
              name="judul"
              id="judul"
              placeholder="Masukkan Judul"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="penulis"
            >
              Penulis
            </label>
            <input
              type="text"
              name="penulis"
              id="penulis"
              placeholder="Masukkan Nama Penulis"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tahun"
            >
              Tahun
            </label>
            <input
              type="text"
              name="tahun"
              id="tahun"
              placeholder="Masukkan Tahun"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
            />
          </div>
          <button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditBook;
