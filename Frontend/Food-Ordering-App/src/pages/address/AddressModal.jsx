import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AddressModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass the data back to the parent component
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="add-address">
        <FontAwesomeIcon icon={faLocationDot} />
        <p>Add Address</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="update-address">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          </div>
          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
         
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-address">
              Cancel
            </button>
            <button type="submit" className="save-address">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
