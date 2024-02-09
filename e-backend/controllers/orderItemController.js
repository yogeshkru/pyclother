const CustomError = require("../utils/customError");
const orderItem = require("../model/orderItemModel");
// const order = require('../model/orderModel');
const addressModel = require("../model/addressModel");
// const orderModel = require("../model/orderModel");
const cartModel = require("../model/cartModel");
const productModel = require("../model/productModel")
const { default: mongoose } = require("mongoose");


class orderitem {
    createOrderItem = async (req, res, next) => {
        const { _id } = req.user;
        const { orderItem_address_Id, orderItem_product_quantity, orderItem_product_Id } = req.body;
        try {

            const findCart = await cartModel.findOne({ cart_user_user_Id: new mongoose.Types.ObjectId(_id) })

            if(!findCart){
                return res.status(404).json({
                    status: 404,
                    message: "No cart found. Please add products to the cart before placing an order.",
                  });
            };

            const productId = findCart.cart_product_product_Id;
          
            if (!productId) {
                return res.status(404).json({
                    status: 404,
                    message: "no product is found in cart. Please add product to the cart before placing an order ",
                });
            } 
            const findProduct1 = await productModel.findOne({ _id: productId });
            const gstValue = parseInt(findProduct1.Gst);
            const orderItem_product_name = findProduct1.name;
            const orderItem_product_amount = findProduct1.price;

            console.log(gstValue, orderItem_product_name, orderItem_product_amount, "newproduct")

   

            const state = await addressModel.findOne({ _id:orderItem_address_Id, address_type: "shipping || billing" })
            
            const shipping_address_state=state.address_state
            if (!state) {
                return res.status(404).json({
                    status: 404,
                    message: "state is not found",
                })
            } 

            const address1 = await addressModel.findOne({ user_id: new mongoose.Types.ObjectId(_id), address_type: "billing" });
            
             const billing_address_state = address1.address_state
            if (!address1) {
                
                return res.status(404).json({
                    status: 404,
                    message: "Address not found",
                });
            } 
            const cgst_percentage = gstValue / 2
            const sgst_percentage = gstValue / 2

            const newOrderItem = await orderItem.create({
                orderItem_user_Id: _id,
                orderItem_address_Id,
                orderItem_product_Id,
                orderItem_product_name,
                orderItem_product_amount,
                orderItem_product_quantity,


            }); console.log(orderItem_product_quantity, "hhhh")
            const totalPrice = orderItem_product_amount * orderItem_product_quantity;
        
            if (billing_address_state === shipping_address_state) {
                const cgstAmount = (cgst_percentage / 100) * totalPrice;
                const sgstAmount = (sgst_percentage / 100) * totalPrice;
                console.log(cgstAmount, "cgst")
                newOrderItem.orderItem_product_cgst_percentage = cgst_percentage;
                newOrderItem.orderItem_product_sgst_percentage = sgst_percentage;
                newOrderItem.orderItem_product_cgst_value = cgstAmount;
                newOrderItem.orderItem_product_sgst_value = sgstAmount;
                newOrderItem.orderItem_product_igst_percentage = 0;
                newOrderItem.orderItem_product_igst_value = 0;
                await newOrderItem.save();
            }
             else {
                const igstAmount = (gstValue / 100) * totalPrice;
                newOrderItem.orderItem_product_cgst_percentage = 0;
                newOrderItem.orderItem_product_sgst_percentage = 0;
                newOrderItem.orderItem_product_cgst_value = 0;
                newOrderItem.orderItem_product_sgst_value = 0;
                newOrderItem.orderItem_product_igst_percentage = gstValue;
                newOrderItem.orderItem_product_igst_value = igstAmount;
                await newOrderItem.save();
            }


            res.status(200).json({ newOrderItem })

        } catch (error) {
            next(new CustomError(error.message, 404));
        }
    }
        //get
    getOrderItem = async(req,res,next)=>{
        try {
            const allOrderItem = await orderItem.find();
            if(!allOrderItem){
                return res.status(404).json({
                    status: 404,
                    message: "orderItem not found",
                });
            }
            res.status(200).json({ allOrderItem })
        } catch (error) {
            next(new CustomError(error.message, 404));
        }
    }

    getOneOrderItem = async(req,res,next)=>{
        const {id} = req.params;
        try {
            const getOne = await orderItem.findById({_id:id})
            if(!getOne){
                return res.status(404).json({
                    status: 404,
                    message: "orderItem not found",
                });
            }  res.status(200).json({ getOne })
        } catch (error) {
            next(new CustomError(error.message, 404));  
        }
    }
}

module.exports = orderitem;