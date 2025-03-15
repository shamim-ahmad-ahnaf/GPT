import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ফোন নাম্বার ফিল্ড যোগ করা হয়েছে
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "38df47ed-4efc-4a52-932b-9b24ea8c48a0");

    const json = JSON.stringify(Object.fromEntries(formDataObj));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-black">
      <div className="w-full max-w-3xl p-8 bg-gray-400 rounded-lg shadow-xl bg-opacity-20 backdrop-blur-lg md:p-12">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-lime-400">
          Contact Me
        </h1>
        <p className="mb-8 text-lg font-bold text-center text-green-600">
          Feel free to reach out to us directly.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-blue-900 bg-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:bg-gray-700"
            />
             <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-purple-900 bg-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white dark:bg-gray-700"
          />
          </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-green-900 bg-green-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white dark:bg-gray-700"
            />
         
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-yellow-900 bg-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white dark:bg-gray-700"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 font-bold tracking-wide text-white uppercase transition-all transform rounded-md bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 hover:opacity-90 hover:scale-105"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
