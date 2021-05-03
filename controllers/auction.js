const { Item: ItemModel, Seller_item: SellerModel } = require('../models');
const logger = require('../config/winston');

module.exports = {
  // 경매 물품 등록
  'register': async (req, res) => {
    const { userId, title, price, endTime, description, city } = req.body;
    ItemModel.create({
      title: title,
      price: price,
      photo: req.file.filename,
      description: description,
      endTime: endTime,
      winnerId: null,
      sellerId: userId,
      isClosed: false,
      city: city,
    })
      .then((item) => {
        SellerModel.create({
          UserId: userId,
          ItemId: item.dataValues.id,
        });
      })
      .then(() => {
        res.status(201).json({ 'message': 'ok' });
      }).catch((error) => {
        logger.error(`Error in Register Auction: ${error}`);
        res.status(500).json({ 'message': 'Fail to load data from database' });
      });
  }
};
