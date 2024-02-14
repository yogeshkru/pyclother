const addressModel = require("../model/addressModel");
const CustomError = require("../utils/customError");

class Addressdetails {
  //post
  addressCreate = async (req, res, next) => {
    try {
      // const {
      //   address_area,
      //   address_city,
      //   address_state,
      //   address_country,
      //   address_pincode,
      //   address_deliver,
      //   user_name,
      //   user_phone,
      //   selectedLocation,
      // } = req.body;
      const { _id } = req.user; // Corrected from user_id to _id

      // const billingAddressCount = await addressModel.countDocuments({
      //   user_id: _id,
      //   address_type: "billing",
      // }); // Corrected from user_id to _id

      // const address_type = billingAddressCount === 0 ? "billing" : "shipping";

      const newAddress = await addressModel.create({ 
        ...req.body,
        user_id: _id 
    });
    

      res
        .status(201)
        .json({
          success: true,
          data: newAddress,
          message: "address added successfully",
        });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  //get
  addressGetBilling = async (req, res, next) => {
    try {
      const addressallget = await addressModel.find({
        address_type: "billing",
      });
      res.status(200).json({ addressallget });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };

  addressGetshipping = async (req, res, next) => {
    try {
      const addressallget = await addressModel.find({
        address_type: "shipping",
      });
      res.status(200).json({ addressallget });
    } catch (err) {
      next(new CustomError(err.message, 500));
    }
  };

  //update
  // addressUpdateBilling = async (req, res, next) => {
  //   try {
  //     const {
  //       address_area,
  //       address_city,
  //       address_state,
  //       adddress_country,
  //       address_pincode,
  //       user_name,
  //       user_phone,
  //     } = req.body;
  //     const { address_id } = req.params;
  //     const { _id } = req.user;
  //     // Check if the specified address belongs to the user and is a billing address
  //     const existingBillingAddress = await addressModel.findOne({
  //       _id: address_id,
  //       user_id: _id,
  //       address_type: "billing",
  //     });

  //     if (!existingBillingAddress) {
  //       return res
  //         .status(404)
  //         .json({
  //           success: false,
  //           message: "Billing address not found for the user",
  //         });
  //     }

  //     // Update the existing billing address
  //     existingBillingAddress.address_area = address_area;
  //     existingBillingAddress.address_city = address_city;
  //     existingBillingAddress.address_state = address_state;
  //     existingBillingAddress.address_country = adddress_country;
  //     existingBillingAddress.address_pincode = address_pincode;
  //     existingBillingAddress.user_name = user_name;
  //     existingBillingAddress.user_phone = user_phone;
  //     // Save the changes
  //     await existingBillingAddress.save();

  //     res.status(200).json({ success: true, data: existingBillingAddress });
  //   } catch (err) {
  //     return next(new CustomError(err.message, 500));
  //   }
  // };

  addressUpdateBilling=async(req,res,next)=>{
    try{
      const UpdateAddress=await addressModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,new:true})
      if(!UpdateAddress){
        return next(new CustomError("Give Id is not exists",409))
      }
      res.status(200).json({ UpdateAddress });
      
    }catch(err){
      return next(new CustomError(err.message, 500));
    }
  }

  addressUpdateShipping = async (req, res, next) => {
    try {
      const {
        address_area,
        address_city,
        address_state,
        adddress_country,
        address_pincode,
        user_name,
        user_phone,
      } = req.body;
      const { address_id } = req.params;
      const { _id } = req.user;
      // Check if the specified address belongs to the user and is a billing address
      const existingShippingAddress = await addressModel.findOne({
        _id: address_id,
        user_id: _id,
        address_type: "shipping",
      });

      if (!existingShippingAddress) {
        return res
          .status(404)
          .json({
            success: false,
            message: "shipping address not found for the user",
          });
      }

      // Update the existing billing address
      existingShippingAddress.address_area = address_area;
      existingShippingAddress.address_city = address_city;
      existingShippingAddress.address_state = address_state;
      existingShippingAddress.address_country = adddress_country;
      existingShippingAddress.address_pincode = address_pincode;
      existingShippingAddress.user_name = user_name;
      existingShippingAddress.user_phone = user_phone;
      // Save the changes
      await existingShippingAddress.save();

      res.status(200).json({ success: true, data: existingShippingAddress });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  //delete
  addressDelete = async function (req, res, next) {
    try {
      await addressModel.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: "deleted" });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  //findone
  addressfind = async (req, res, next) => {
    const {_id} = req.user
    console.log(_id)
    try {
      const addressFind = await addressModel.find({user_id:_id});
      if (!addressFind) {
        return next(new CustomError("The give id is not found", 404));
      }
      res.status(200).json({ addressFind });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };
}

module.exports = Addressdetails;
