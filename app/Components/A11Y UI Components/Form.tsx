"use client";

import { useState } from "react";
import React from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 space-y-5"
            aria-label="Registration form"
        >
            <h1 className="text-xl font-bold text-gray-900">Sign Up</h1>

            {/* Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                >
                    Phone Number
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-describedby="phone-desc"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
                <p id="phone-desc" className="text-xs text-gray-500 mt-1">
                    Enter a 10-digit phone number.
                </p>
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    aria-describedby="password-desc"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
                <p id="password-desc" className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters.
                </p>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
                     hover:bg-blue-700"
            >
                Submit
            </button>
        </form>

    )
}

export default Form