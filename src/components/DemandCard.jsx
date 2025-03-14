/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const DemandCard = ({ demand }) => {
  const { cropImage, crop, duration, quantity, rate, _id } = demand; // Assuming demand has _id
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  // Handle navigation to the checkout page
  const handleCheckout = () => {
    navigate(`/checkout/${_id}`, { state: { demand } }); // Pass demand details to the new page
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
      {/* Crop Image */}
      
        {crop==="wheat" ? <img src="https://www.shutterstock.com/image-photo/wheat-ears-isolated-on-white-260nw-1969403536.jpg" alt="Rice" className="w-full h-48 object-cover rounded-lg mb-4" /> :<img src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rice" className="w-full h-48 object-cover rounded-lg mb-4" />}
      

      {/* Crop Info */}
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{crop}</h3>
      <p className="text-gray-300">
        <span className="font-semibold">Duration:</span> {duration}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Quantity:</span> {quantity} tons
      </p>
      <p className="text-gray-300">
        <span className="font-semibold">Rate:</span> ₹{rate} per ton
      </p>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default DemandCard;