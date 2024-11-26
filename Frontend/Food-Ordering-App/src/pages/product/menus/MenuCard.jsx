import { AddCart } from "../AddCart";
import "./MenuCard.css";

const MenuCard = ({ name, price, ingredient, image }) => {
  return (
    <div className="item-card" >
      <div className="item-detail">
        <h4>{name}</h4>
        <p>{ingredient}</p>
        <h4 style={{marginTop:'5px'}}> ₹ {price}</h4>
      </div>
      <div className="item-image">
        <div className="item-image-container">
          <img  src={image}/>
          <AddCart className="add-item"/>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

