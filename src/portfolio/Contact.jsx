import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_user_id"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-gray-800 to-black">
      <div className="w-full max-w-3xl p-8 bg-gray-400 rounded-lg shadow-xl bg-opacity-20 backdrop-blur-lg md:p-12">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-lime-400 ">Contact Me</h1>
        <p className="mb-8 text-lg font-bold text-center text-green-600 ">Feel free to reach out to us directly.</p>

        <form onSubmit={sendEmail} className="space-y-6">
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
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-green-900 bg-green-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white dark:bg-gray-700"
            />
          </div>
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
            className="w-full px-6 py-3 font-bold tracking-wide text-white uppercase transition-all transform rounded-md bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 hover:opacity-90 hover:scale-105"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-red-600" />
            <span className="text-lg text-lime-400 ">Gazipur, Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://wa.me/+8801748186766"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-green-600 transition-all hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
          <a
            href="www.linkedin.com/in/shamim-ahmad-772484331"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-600 transition-all hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shamim-ahmad-ahnaf"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-gray-500 transition-all hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092273649975&mibextid=ZbWKwL
"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-600 transition-all hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:shamimahmad14182266@gmail.com"
            className="text-2xl text-blue-600 transition-all hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>

  );
}

export default Contact;
