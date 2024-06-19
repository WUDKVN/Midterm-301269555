
import React, { useState } from 'react';

const SignUpUser = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
        console.log(formData);
    };

    // Function to handle cancel button click (reset form data)
    const handleCancel = () => {
        setFormData({
            Username: '',
            Email: '',
            Password: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-black shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2"></label>
                <input 
                    type="text" 
                    name="Username" 
                    value={formData.Username} 
                    onChange={handleChange} 
                    placeholder="Username" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 text-white"
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2"></label>
                <input 
                    type="email" 
                    name="Email" 
                    value={formData.Email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 text-white"
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2"></label>
                <input 
                    type="password" 
                    name="Password" 
                    value={formData.Password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-900 text-white"
                />
            </div>
            <div className="flex justify-between">
                <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Up
                </button>
                <button 
                    type="button" 
                    onClick={handleCancel} 
                    className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default SignUpUser;
