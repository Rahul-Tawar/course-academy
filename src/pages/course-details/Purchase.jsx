import React from 'react';

const Purchase = ({ price }) => {
  return (
    <div className="ml-8 mt-8">
      <h3 className="font-bebasneue font-bold text-3xl mb-4">Purchase Course</h3>
      <p>Price: {price}</p>
      <button className="bg-[#f8b31d] text-white font-bold py-2 px-4 rounded mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default Purchase;