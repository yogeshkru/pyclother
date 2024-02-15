const RazorPay = require("razorpay");
const instace = new RazorPay({
  key_id: "rzp_test_bGxiXE38CRwzQU",

  key_secret: "hIg8nFBFtEQjWqyGMuanqh7N",
});

class PayMentMethod {
  checkOut = async (req, res) => {
    const { amount } = req.body;
    const option = {
      amount: amount * 100,
      currency: "INR",
    };

    const order = await instace.orders.create(option);
    res.status(200).json({ success: true, order });
  };

  paymentVerfication = async (req, res) => {
    const { razorpayOrderId, razorpayPaymentId } = req.body;
    res.json({ razorpayOrderId, razorpayPaymentId }); 
  };
}

module.exports = PayMentMethod;
