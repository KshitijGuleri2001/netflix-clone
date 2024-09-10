import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import requests from "../Request";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/Dashboard");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <>
      <div className="flex justify-between font-medium items-center w-full p-4 z-[100] absolute ">
         <div className="text-red-600 cursor-pointer text-5xl mt-8 fixed">
          
          NETFLIX
        </div>
  
      </div>

      <div className="w-full h-[1080px] text-white relative">
        <div className="absolute w-full h-[600px] "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>

      <div className="fixed inset-0 overflow-y-auto bg-black/70 flex justify-center items-center z-10">
        <div className="container mx-auto max-w-[350px] lg:max-w-[500px] bg-black/80 rounded-md px-6 p-12 lg:px-12 items-center shadow-lg relative">
          <div className="flex flex-col item-center justify-center  text-white">
          
              <h1 className="text-2xl lg:text-3xl mb-4 lg:mb-6">SignIn</h1>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control w-full h-[50px] rounded-sm text-white bg-zinc-900"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control w-full h-[50px] rounded-sm text-white bg-zinc-900"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
       
            <Link to="/">
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-sm text-sm w-full h-[50px]"
                >
                  Sign In
                </button>
              </div>
            </Link>
          </div>
          <div className="flex justify-between  text-white w-full  ">
            <div className="flex ">
              <input
                className="text-white mr-2"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value="rememberMe"
              />
              <label htmlFor="rememberMe"> Remember me</label>
            </div>
            <div>
              <p>Need help?</p>
            </div>
          </div>
          <Link to="/SignUp">
            <div className="text-white mt-4 lg:mt-0 ml-0 lg:ml-auto p-2">
              <p>
                <span className="text-gray-600">New to Netflix? </span> Sign Up
                Now.
              </p>
            </div>
          </Link>
          <div className="text-white mt-4 lg:mt-0 ml-0 lg:ml-auto p-2">
            <p className="text-gray-400 text-sm">
              Sign in is protected by Google reCAPTCHA to ensure you’re not a
              bot.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
