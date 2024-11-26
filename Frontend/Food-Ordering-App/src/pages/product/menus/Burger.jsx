
import MenuCard from './MenuCard'

const Burger = () => {
  return (
    <div className="categories-section">
      <h2 style={{fontSize:'30px'}}>Burgers</h2>
      <div className="categories-container">
      <MenuCard
        name="Royal Cheese Burger with extra Fries"
        price={120}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"
      />
      <MenuCard
        name="The classics for 3"
        price={120}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={120}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_aljhvv.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={120}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_2_dwmmok.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      </div>
    </div>
  )
}

export default Burger