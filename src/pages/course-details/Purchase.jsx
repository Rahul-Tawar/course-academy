import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion'
 // Import the Signup component

const Purchase = ({ price }) => {
  const [showSignup, setShowSignup] = useState(false); 
  const [isRotated, setIsRotated] = useState(false); // Rotate icon state

  // Function to handle "Add to Cart" click
  const handleAddToCart = () => {
    setShowSignup(true);
  };

  return (
    <div className="ml-8 mt-8">
      <div className="flex">
        <span className="text-xl font-oswald">{price}</span>
        <span className="text-gray-600 ml-2">(All you need to pay)</span>
      </div>
      <button className="flex flex-row gap-2 mt-2" onClick={handleAddToCart}>
        <h3 className="bg-[#f8b31d] p-2 rounded-2xl border-2 border-black md:w-[35vw] w-[70vw] font-oswald text-2xl">
          Add to Cart
        </h3>
        <Heart className="w-12 h-12 hover:fill-[#f8b31d] border-none" strokeWidth={1} />
      </button>

      {/* Render the Signup Modal */}
      
    </div>
  );
};

export default Purchase;
