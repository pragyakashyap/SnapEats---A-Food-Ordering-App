import express from "express"
import Address from "../../schema/address.schema.js"
import authenticate from "../../middleware/index.js";

const router = express.Router()

router.get('/api/addresses', authenticate, async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user is authenticated
      const addresses = await Address.find({ userId });
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch addresses' });
    }
  });
  
  router.post('/api/addresses', authenticate, async (req, res) => {
    try {
      const userId = req.user.id;
      const addressData = { ...req.body, userId };
      const newAddress = await Address.create(addressData);
  
      if (req.body.isDefault) {
        await Address.updateMany({ userId }, { $set: { isDefault: false } });
        newAddress.isDefault = true;
        await newAddress.save();
      }
  
      res.status(201).json(newAddress);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create address' });
      console.log(error)
    }
  });

  router.put('/api/addresses/:id', authenticate, async (req, res) => {
    try {
      const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
      if (req.body.isDefault) {
        await Address.updateMany({ userId: req.user.id }, { $set: { isDefault: false } });
        address.isDefault = true;
        await address.save();
      }
  
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update address' });
    }
  });

  router.delete('/api/addresses/:id' , authenticate, async (req, res) => {
    try {
      await Address.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Address removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove address' });
    }
  });

  export default router;
  
  
  