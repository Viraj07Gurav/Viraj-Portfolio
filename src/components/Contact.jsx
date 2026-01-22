import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        message: '',
        type: '', // "success" | "error"
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            showStatus('All fields are required', 'error');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Please enter a valid email', 'error');
            return false;
        }

        return true;
    };
    const showStatus = (message, type) => {
        setStatus({ message, type });

        setTimeout(() => {
            setStatus({ message: '', type: '' });
        }, 5000); // 5 seconds
    };

    const handleForm = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setStatus('');

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                showStatus('Message sent successfully!', 'success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            })
            .catch((error) => {
                  console.error("EmailJS ERROR 👉", error);
                showStatus('Failed to send message. Try again later.', 'error');
            })
            .finally(() => {
                setLoading(false);
            });

    };

    return (
        <div className="py-16" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-6">
                    <h2 className="font-bold text-4xl mb-4">
                        Get In <span className="text-teal-700">Touch</span>
                    </h2>
                    <p className="text-zinc-600">
                        Have a project in mind or want to discuss potential opportunities.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleForm} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-zinc-600 py-3 px-4 w-full rounded"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-zinc-600 py-3 px-4 w-full rounded"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border border-zinc-600 py-3 px-4 w-full rounded"
                        />

                        <textarea
                            name="message"
                            placeholder="Enter Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-zinc-600 py-3 px-4 h-40 w-full rounded"
                        />

                        {status.message && (
                            <p
                                className={`text-center font-medium transition-all duration-300 ${status.type === 'success'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                    }`}
                            >
                                {status.message}
                            </p>
                        )}


                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-4 px-10 py-4 rounded-full bg-zinc-800 text-white hover:bg-zinc-600 disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
