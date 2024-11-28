import {useState} from "react";
import "./address.css";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AddressModal from "./AddressModal";

const Address = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/checkout");
  };

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Mike Ross",
      address: "45, Green Street, Sector 12, New Delhi, 110011, India",
      phone: "8734657485",
      isDefault: true,
    },
    {
      id: 2,
      name: "Mike Ross",
      address: "Office 704, Tower B, Techno Plaza, Bengaluru, Karnataka, 560000",
      phone: "8934747362",
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle adding a new address
  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
    setIsModalOpen(false); // Close modal after adding
  };


  return (
    <>
      <div className="address-page">
        <Navbar />
        <Header />
        <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading">
            <h2>Your Addresses</h2>
          </div>
        </div>

        <div className="address">
        <div className="address-list">
        <div className="add-address-card" onClick={() => setIsModalOpen(true)}>
            <div className="add-address">
                <img src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732727624/Frame_100_q23rgk.png" />
                <p>Add Address</p>
            </div>
        </div>
        {addresses.map((address) => (
          <div key={address.id} className="address-card">
            <h3>{address.name}</h3>
            <p>{address.address}</p>
            <p>Phone Number: {address.phone}</p>
            {address.isDefault && <button className="default-tag">Default</button>}
            <div className="actions">
              <button className="edit-button">Edit</button>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        ))}
        
      </div>
        </div>

      {isModalOpen && (
        <AddressModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddAddress}
        />
      )}


      </div>
      <Footer />
    </>
  );
};

export default Address;
