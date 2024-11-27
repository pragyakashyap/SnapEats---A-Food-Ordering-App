import MenuCard from "./MenuCard";

const Fries = ({addToCart}) => {
  const fries = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_1_gar709.png",
      ingredient: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    },
    {
      id: 2,
      name: "The classics for 3",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_3_u0hbbm.png",
      ingredient:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
    {
      id: 3,
      name: "Potato Veggies",
      price: 70,
      image:
      "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_5_jqsa3y.png",
        
      ingredient:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
    {
      id: 4,
      name: "The classics for 3",
      price: 70,
      image:
        "https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_4_yueunn.png",
      ingredient:
        "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
  ];

  return (
    <div className="categories-section">
      <h2 style={{ color: "#FC8A06", fontSize: "30px" }}>Fries</h2>
      <div className="categories-container">
        {fries.map((fry) => (
          <MenuCard
          key={fry.id}
          item={fry}
          addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Fries;
