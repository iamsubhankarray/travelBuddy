import { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    travelPaid:0,
    accommodationPaid:0,
    foodPaid: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    axios.post("http://192.168.0.111:3000/login",formData)
    .then(console.log(formData))
    // ("Form Submitted:", {formData}))
    .catch(err=>console.log(err))
  };

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-sky-700/25 w-1/4 p-10 shadow-lg rounded-xl flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="number"
                name="travelPaid"
                placeholder="Travel paid"
                value={formData.travelPaid}
                onChange={handleChange}
              />
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="number"
                name="accommodationPaid"
                placeholder="Accommodation paid"
                value={formData.accommodationPaid}
                onChange={handleChange}
              />
              <input
                className="bg-sky-100 w-full h-10 text-center rounded-lg"
                type="number"
                name="foodPaid"
                placeholder="Food paid"
                value={formData.foodPaid}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-green-500 w-full h-10 rounded-xl hover:bg-green-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
