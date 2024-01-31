const CustomError = require("../utils/customError");
const orderItem = require("../model/orderItemModel");
const order = require('../model/orderModel');
const addressModel = require("../model/addressModel");
const orderModel = require("../model/orderModel");
const cartModel = require("../model/cartModel");
const { default: mongoose } = require("mongoose");


class orderitem {
    createOrderItem = async(req,res,next)=>{
        const { _id } = req.user;
        const { orderItem_order_Id, orderItem_product_quantity,orderItem_product_Id } = req.body;
        try {
          
            const findCart = await ca
          
              console.log(product,"ewfqwefqefef")
            const gstValue = parseInt(product[0].gst.join(''));
             
            const  orderItem_product_name = product[0].productName.join('');
            const orderItem_product_amount = product[0].productAmnt.join('');
            console.log(gstValue,"gst")


            const order = await orderModel.findOne({order_user: new mongoose.Types.ObjectId(_id) });
             const shipping_address_id = order.order_user_address;
            if (!order) {
                return res.status(404).json({
                    status: 404,
                    message: "Order not found",
                });
            }console.log(shipping_address_id ,"sdjbdiujgdgvbkgbkJD")

          const {address_state:shipping_address_state} = await addressModel.findOne({_id:shipping_address_id,address_type:"shipping"})
                if(!shipping_address_state){
                    return res.status(404).json({
                        status:404,
                        message:"state is not found",
                    })
                }console.log(shipping_address_state ,"shipping")

            const address1 = await addressModel.findOne({ user_id:new mongoose.Types.ObjectId(_id),address_type:"billing" });
            //  console.log(address1.address_state,"sdfvjygusadiudgfvuidguidg")
              const billing_address_state = address1.address_state;
            if (!address1) {
                // Handle the case where the address is not found
                return res.status(404).json({
                    status: 404,
                    message: "Address not found",
                });
            } console.log(billing_address_state,"billing");
            const cgst_percentage= gstValue/2
            const sgst_percentage = gstValue/2
                
            const newOrderItem = await orderItem.create({
                orderItem_order_user_Id:_id,
                orderItem_order_Id,
                orderItem_product_Id,
                orderItem_product_name,
                orderItem_product_amount,
                orderItem_product_quantity,
              
                
            }); console.log(orderItem_product_quantity,"hhhh")
            const totalPrice = orderItem_product_amount * orderItem_product_quantity;
            if(billing_address_state===shipping_address_state ){
                const cgstAmount = (cgst_percentage/100)*totalPrice;
                const sgstAmount = (sgst_percentage/100)*totalPrice;
               console.log(cgstAmount,"cgst")
               newOrderItem.orderItem_product_cgst_percentage=cgst_percentage;
               newOrderItem.orderItem_product_sgst_percentage=sgst_percentage;
                newOrderItem.orderItem_product_cgst_value = cgstAmount;
                newOrderItem.orderItem_product_sgst_value = sgstAmount;
                newOrderItem.orderItem_product_igst_percentage = 0;
                newOrderItem.orderItem_product_igst_value = 0;
            }else{
                const igstAmount = (gstValue/100)*totalPrice;
              
                newOrderItem.orderItem_product_cgst_value = 0;
                newOrderItem.orderItem_product_sgst_value = 0;
                newOrderItem.orderItem_product_igst_percentage = gstValue;
                newOrderItem.orderItem_product_igst_value = igstAmount;
            }


            res.status(200).json({newOrderItem,product})
        
        } catch (error) {
            next(new CustomError(error.message, 404));
        }
    }
}

module.exports = orderitem;