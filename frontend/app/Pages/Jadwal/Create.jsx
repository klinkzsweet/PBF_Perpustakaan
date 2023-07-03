import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Layout from '@/app/Components/Layout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CreateJadwal = () => {

    const [hari, setHari] = useState('');
    const [waktu, setWaktu] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = {
            hari: hari,
            waktu: waktu,
        }
        try {
            const response = await axios.post('http://localhost:8000/api/jadwal', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            MySwal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data berhasil ditambahkan',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/jadwal');
            
        } catch (error) {
            console.error(error);
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Data gagal ditambahkan',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


  return (
    <Layout>
        <div className="p-6 sm:p-10 space-y-6 mb-5">
        <div className="mr-6">
        <h1 className="text-4xl font-semibold mb-2">Create Jadwal</h1>
      </div>
      <Link to="/jadwal" className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        Back
      </Link>
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hari">
                    Hari
                </label>
                <input
                    type="text"
                    name="hari"
                    id="hari"
                    placeholder="Masukkan Hari"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={hari}
                    onChange={(e) => setHari(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waktu">
                    Waktu
                </label>
                <input
                    type="text"
                    name="waktu"
                    id="waktu"
                    placeholder="Masukkan Waktu"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={waktu}
                    onChange={(e) => setWaktu(e.target.value)}
                />
                </div>
                <button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                    Tambah
                </button>
                </form>
    </div>
    </Layout>
  )
}

export default CreateJadwal