import Header from "../header";
import Navbar from "../navbar";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer";
import { useState } from "react";
import PaymentMethods from "./paymentMethods";
import { DivIcon } from "leaflet";

const Profile = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const [profile, setProfile] = useState({
    name: "Mike Ross",
    gender: "Male",
    email: "mikeross@gmail.com",
    country: "India",
  });

  // State to manage form data and edit mode
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  const [tempData, setTempData] = useState(profile); // Temporary data for editing

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  // Enable editing
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save changes
  const handleSave = () => {
    setFormData(tempData); // Update the form data with temporary changes
    setIsEditing(false); // Exit edit mode
  };

  // Cancel changes
  const handleCancel = () => {
    setTempData(formData); // Reset temporary data to original form data
    setIsEditing(false); // Exit edit mode
  };

  return (
    <>
      <div className="profile-page">
        <Navbar />
        <Header />
       
       <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading">
            <h2>My Profile</h2>
          </div>
        </div>
        <div className="profile-page-container">
        <div className="top-container">
          <div className="name-div">
            <img className="profile-img" src="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732731903/Ellipse_11_uzzorb.png" />
            <p>Mike Ross</p>
          </div>
          {/* Buttons */}
          <div className="form-actions">
            {!isEditing ? (
              <div className="edit-button-div" type="button" onClick={handleEdit}>
                Edit
              </div>
            ) : (
              <>
                <div className="edit-button-div" type="button" onClick={handleSave}>
                  Save
                </div>
                <div className="edit-button-div" type="button" onClick={handleCancel}>
                  Cancel
                </div>
              </>
            )}
          </div>
        </div>

        <form onSubmit={handleSave} className="profile-form">
            <div className="top-info">
            <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={tempData.name}
              onChange={handleInputChange}
              disabled={!isEditing} // Disabled unless editing
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={tempData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
            </div>
          

          <div className="top-info">
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={tempData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={tempData.country}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          </div>
          
        </form>
        <PaymentMethods />
       </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
