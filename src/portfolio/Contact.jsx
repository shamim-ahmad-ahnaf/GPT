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
    <div className="flex items-center justify-center min-h-screen text-center bg-gray-50">
      <div>
        <h1 className="mb-4 text-4xl font-semibold text-gray-800">Contact Me</h1>
        <p className="text-lg text-gray-600">Feel free to reach out to me via email at example@email.com</p>
      </div>
    </div>

  );
}

export default Contact;
