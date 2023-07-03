import { React, useState, useEffect } from "react";
import Layout from "@/app/Components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../Services/firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditPetugas = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");


  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "petugas", id);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setNama(docSnap.data().nama);
        setEmail(docSnap.data().email);
        setNohp(docSnap.data().nohp);
      }else{
        console.log("No such document!");
      }
    };
    if(id){
      getProduct();
  }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "petugas", id);
      await updateDoc(docRef, {
        nama: nama,
        email: email,
        nohp: nohp,
      });
      console.log("Document written with ID: ", docRef.id);
      MySwal.fire({
        icon: "success",
        title: "Success",
        text: "Data has been updated",
      });
      navigate("/petugas");
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <Layout>
      <div className="p-6 sm:p-10 space-y-6 mb-5">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Edit Petugas</h1>
        </div>
        <Link
          to="/petugas"
          className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Back
        </Link>
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
               Nama
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Masukkan Nama"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Masukkan Jenis Kelamin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nohp"
            >
              nohp
            </label>
            <input
              type="text"
              name="nohp"
              id="nohp"
              placeholder="Masukkan nohp"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditPetugas;
