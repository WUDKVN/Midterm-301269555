

import React from 'react';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

const Index = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-black text-center text-6xl mb-12 font-bold">WELCOME TO YOUR BACKEND PAGE </h1>
      <div className="max-w-lg mx-auto">
        <h2 className="text-black text-center text-4xl mb-6 font-bold">Sign Up User</h2>
        <SignUpUser />
      </div>
      <div className="max-w-lg mx-auto mt-12">
        <h2 className="text-black text-center text-4xl mb-6 font-bold">Add Product</h2>
        <AddProduct />
      </div>
    </div>
  );
};

export default Index;
