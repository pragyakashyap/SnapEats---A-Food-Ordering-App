import express from "express"
import Deal from "../../schema/deals.schema.js"


const router = express.Router()
router.get("/", async (req, res) => {
    try {
        const deals = await Deal.find();
        res.json(deals)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error })
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, discount, image } = req.body
        const newDeal = new Deal(req.body)
        const savedDeal = await newDeal.save()
        res.json(savedDeal)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error })
    }
})

export default router
