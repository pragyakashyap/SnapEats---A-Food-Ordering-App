import MenuCard from "./MenuCard"

const Fries = () => {
    return (
      <div className="categories-section">
        <h2 style={{color:'#FC8A06',fontSize:'30px'}}>Fries</h2>
        <div className="categories-container">
        <MenuCard
        name="Royal Cheese Burger with extra Fries"
        price={70}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_1_gar709.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"
      />
      <MenuCard
        name="The classics for 3"
        price={70}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_3_u0hbbm.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={70}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_4_yueunn.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={70}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_5_jqsa3y.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      </div>
      </div>
    )
  }
  
  export default Fries