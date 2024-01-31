const addressModel = require("../model/addressModel");
const CustomError = require("../utils/customError");

class Addressdetails {
  //post
  addressCreate = async (req, res, next) => {
    try {
      const { user_id, address_area, address_city, address_state, address_country, address_pincode } = req.body;


      const billingAddressCount = await addressModel.countDocuments({ user_id, address_type: 'billing' });


      const address_type = billingAddressCount === 0 ? 'billing' : 'shipping';

      const newAddress = await addressModel.create({
        user_id,
        address_area,
        address_city,
        address_state,
        address_country,
        address_pincode,
        address_type
      });

      res.status(201).json({ success: true, data: newAddress });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  //get
  addressGet = async (req, res, next) => {
    try {
      const addressallget = await addressModel.find()
      res.status(200).json({ addressallget })
    } catch (err) { 
      next(new CustomError(err.message, 500))
    }

  }

  //update
  addressUpdateBilling = async (req, res, next) => {
    try {
      const { user_id, address_area, address_city, address_state, adddress_country, address_pincode } = req.body;
      const { _id } = req.params;
      // Check if the specified address belongs to the user and is a billing address
      const existingBillingAddress = await addressModel.findOne({
        _id: _id,
        user_id,
        address_type: 'billing'
      });

      if (!existingBillingAddress) {
        return res.status(404).json({ success: false, message: 'Billing address not found for the user' });
      }

      // Update the existing billing address
      existingBillingAddress.address_area = address_area;
      existingBillingAddress.address_city = address_city;
      existingBillingAddress.address_state = address_state;
      existingBillingAddress.adddress_country = adddress_country;
      existingBillingAddress.address_pincode = address_pincode;

      // Save the changes
      await existingBillingAddress.save();

      res.status(200).json({ success: true, data: existingBillingAddress });

    } catch (err) {
      return next(new CustomError(err.message, 500))
    }
  }

  addressUpdateShipping = async (req, res, next) => {
    try {
      const { user_id, address_area, address_city, address_state, adddress_country, address_pincode } = req.body;
      const { _id } = req.params;
      // Check if the specified address belongs to the user and is a billing address
      const existingShippingAddress = await addressModel.findOne({
        _id: _id,
        user_id,
        address_type: 'shipping'
      });

      if (!existingShippingAddress) {
        return res.status(404).json({ success: false, message: 'shipping address not found for the user' });
      }

      // Update the existing billing address
      existingShippingAddress.address_area = address_area;
      existingShippingAddress.address_city = address_city;
      existingShippingAddress.address_state = address_state;
      existingShippingAddress.adddress_country = adddress_country;
      existingShippingAddress.address_pincode = address_pincode;

      // Save the changes
      await existingShippingAddress.save();

      res.status(200).json({ success: true, data: existingShippingAddress });

    } catch (err) {
      return next(new CustomError(err.message, 500))
    }
  }

  //delete
  addressDelete = async function (req, res, next) {
    try {
      await addressModel.findByIdAndDelete(req.params.id)
      res.status(204).json({ message: "deleted" })
    } catch (err) {
      return next(new CustomError(err.message, 500))
    }

  }

  //findone
  addressfind = async (req, res, next) => {
    try {
      const addressFind = await addressModel.findById(req.params.id)
      if (!addressFind) {
        return next(new CustomError("The give id is not found", 404))
      }
      res.status(200).json({ addressFind })
    } catch (err) {
      return next(new CustomError(err.message, 500))
    }
  }

}

module.exports = Addressdetails;
