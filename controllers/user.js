const axios = require('axios');
const { User: UserModel, Item: ItemModel } = require('../models');
const logger = require('../config/winston');

module.exports = {
  'oauth': async (req, res) => {
    const accessToken = req.body.access_token;
    axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
    })
      .then((data) => {
        const kakaoid = data.data.id;
        const name = data.data.properties.nickname;
        UserModel
          .findOrCreate({
            where: {
              kakaoid: `${kakaoid}@kakao.com`,
            },
            defaults: {
              name: name,
            },
          }).then((user) => {
            const { name, id } = user[0].dataValues;
            res.set('Set-Cookie', [`accessToken=${accessToken}`]);
            res.status(200).json({ name, id });
          });
      }).catch(error => {
        res.status(500).json({ 'message': 'Fail to login' });
        logger.error(`Error in Oauth: ${error}`);
      });
  },

  'name': async (req, res) => {
    const { userId, name } = req.body;
    await UserModel.update({ name: name }, {
      where: {
        id: userId
      }
    })
      .then(() => {
        res.status(200).json({ 'message': 'ok' });
      }).catch((error) => {
        res.status(500).json({ 'message': 'Fail to update name' });
        logger.error(`Error in ChangeName: ${error}`);
      });
  },

  'getBuyerItems': async (req, res) => {
    const { userId, offset, city } = req.body;
    await UserModel.findAll({
      where: {
        id: userId,
      },
      include: [
        {
          model: ItemModel,
          required: true,
          as: 'ItemB',
          through: {
            attributes: ['UserId', 'ItemId']
          }
        }
      ],
      limit: 6,
      offset: Number(offset) || 0,
      subQuery: false
    })
      .then((result) => {
        if (result.length) {
          const items = result[0].dataValues.ItemB.map((item) => {
            item.dataValues.city = city;
            return item.dataValues;
          });
          res.status(200).json({ items });
        } else {
          const items = [];
          res.status(200).json({ items });
        }
      }).catch((error) => {
        res.status(500).json({ 'message': 'Fail to load data from database' });
        logger.error(`Error in GetItemsByBuyer: ${error}`);
      });
  },

  'getSellerItems': async (req, res) => {
    const { userId, offset, city } = req.body;
    await UserModel.findAll({
      where: {
        id: userId,
      },
      include: [
        {
          model: ItemModel,
          required: true,
          as: 'Item',
          through: {
            attributes: ['UserId', 'ItemId']
          }
        }
      ],
      offset: Number(offset) || 0,
      limit: 6,
      subQuery: false
    })
      .then((result) => {
        if (result.length) {
          const items = result[0].dataValues.Item.map((item) => {
            item.dataValues.city = city;
            return item.dataValues;
          });
          res.status(200).json({ items });
        } else {
          const items = [];
          res.status(200).json({ items });
        }
      }).catch((error) => {
        res.status(500).json({ 'message': 'Fail to load data from database' });
        logger.error(`Error in GetItemsBySeller: ${error}`);
      });
  },
};
