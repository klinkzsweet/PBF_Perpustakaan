import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const MySwal = withReactContent(Swal);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
        const response = await axios.post("http://localhost:8000/api/login", {
            email,
            password,
        });
        console.log(response);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard");
        
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
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        }
    }, []);

  

  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-blue-900 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-blue-900 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-mono text-center mb-4 cursor-pointer">
            Login
          </h1>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="block text-sm font-mono py-3 px-4 rounded-lg w-full border outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm font-mono py-3 px-4 rounded-lg w-full border outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleLogin}
            className="py-3 w-64 text-xl font-mono text-white bg-blue-400 rounded-2xl"
          >
            Login
          </button>
          <p className="mt-4 text-sm font-mono">
            Don't Have An Account?{" "}
            <Link to="/register">
              <span className="underline cursor-pointer"> Register</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-40 h-40 absolute bg-blue-100 rounded-full top-0 right-12 hidden md:block" />
    </div>
  );
};

export default Login;
