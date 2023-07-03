import { React, useState, useEffect } from "react";
import { app, db } from "../../Services/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Layout from "@/app/Components/Layout";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Pengunjung = () => {

  const [pengunjung, setPengunjung] = useState([]);

  useEffect(() => {
    const pengunjung = onSnapshot(collection(db, "pengunjung"), (snapshot) => {
      setPengunjung(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return pengunjung;
  }, []);

  console.log(pengunjung);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "pengunjung", id));
      MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data has been deleted',
      });
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
      <div className="p-6 sm:p-10 space-y-6">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Data Pengunjung</h1>
        </div>
        <Link
          to="/pengunjung/add"
          className="bg-green-600 hover:bg-green-500 focus:bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create Pengunjung
        </Link>
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <table className="w-full divide-y divide-gray-200">
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
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Jenis Kelamin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No Hp
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Alamat
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
              {pengunjung.map((item, index) => (
                <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.jeniskelamin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.nohp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.alamat}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-1">
                  <Link to={`/pengunjung/edit/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Pengunjung;
