import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from "../../Services/firebase";
import { collection, addDoc } from "firebase/firestore";
import Layout from '@/app/Components/Layout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CreatePengunjung = () => {

    const navigate = useNavigate();
    
    const [nama, setNama] = useState("");
    const [jeniskelamin, setJeniskelamin] = useState("");
    const [nohp, setNohp] = useState("");
    const [alamat, setAlamat] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "pengunjung"), {
                nama: nama,
                jeniskelamin: jeniskelamin,
                nohp: nohp,
                alamat: alamat,
            });
            console.log("Document written with ID: ", docRef.id);
            MySwal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data has been added',
            });
            navigate('/pengunjung');
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };


  return (
    <Layout>
        <div className="p-6 sm:p-10 space-y-6 mb-5">
        <div className="mr-6">
        <h1 className="text-4xl font-semibold mb-2">Create Pengunjung</h1>
      </div>
      <Link to="/pengunjung" className="bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg">
        Back
      </Link>
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                    Nama
                </label>
                <input
                    type="text"
                    name="nama"
                    id="nama"
                    placeholder="Masukkan Pengunjung Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jeniskelamin">
                    Jeniskelamin
                </label>
                <input
                    type="text"
                    name="jeniskelamin"
                    id="jeniskelamin"
                    placeholder="Masukkan Jeniskelamin"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={jeniskelamin}
                    onChange={(e) => setJeniskelamin(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nohp">
                    Nohp
                </label>
                <input
                    type="text"
                    name="nohp"
                    id="nohp"
                    placeholder="Masukkan Nohp"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alamat">
                    Alamat
                </label>
                <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    placeholder="Masukkan Alamat"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                />
                </div>
                <button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg">
                    Add
                </button>
                </form>
    </div>
    </Layout>
  )
}

export default CreatePengunjung