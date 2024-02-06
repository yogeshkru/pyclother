const Event = require("../model/eventModel");
const Shop = require("../model/shopModel");
const CustomError = require("../utils/customError");

class EventController {
  async eventCreate(req, res, next) {
    try {
      const { _id } = req.user;
      const shopExist = await Shop.findById(_id);

      if (!shopExist) {
        return next(new CustomError("Shop ID is invalid", 400));
      }

      const eventData = req.body;
      eventData.shopId = _id;

      const storeEvent = await Event.create(eventData);
      res.status(201).json({ success: true, storeEvent });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  }

  async getAllShopEvent(req, res, next) {
    try {
      const { _id } = req.user;
      const events = await Event.find({ shopId: _id });

      res.status(200).json({ success: true, events });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  }

  deleteEvent = async function (req, res, next) {
    try {
      const { id } = req.params;
      const deletedEvent = await Event.findByIdAndDelete(id);
      if (!deletedEvent) {
        return next(new CustomError("Product not found with this id", 404));
      }

      res.status(204).json({ message: "Deleted" });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  };
}

module.exports = EventController;
