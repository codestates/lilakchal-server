const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Item: ItemModel } = require('../models');
const logger = require('../config/winston');

module.exports = {
  'keyword': async (req, res) => {
    // console.log(req.query); // {keyword: '맥북, city: '서울시 마포구', offset: 1}
    const { keyword, city, offset } = req.query;
    const today = new Date();
    // 검색어로 아이템 검색
    if (keyword) {
      ItemModel.findAll({
        offset: Number(offset) || 0,
        limit: 6,
        where: {
          [Op.or]: [{
            title: {
              [Op.like]: '%' + keyword + '%'
            }
          },
          {
            description: {
              [Op.like]: '%' + keyword + '%'
            }
          }],
          [Op.and]: {
            endTime: {
              [Op.gt]: today,
            }
          }
        }
      })
        .then((result) => {
          if (result.length) {
            let items = result.map((item) => {
              item.dataValues.city = city;
              return item.dataValues;
            });
            res.status(200).json({ items });
          } else {
            const items = [];
            res.status(204).json({ items });
          }
        }).catch((error) => {
          logger.error(`Error in Search By Keywords: ${error}`);
          res.status(500).json({ 'message': 'Fail to load data from database' });
        });
    }
    // 랜딩페이지에서 서치 페이지로 이동하는 순간 지역 정보 받음 (전체 물품 보여줌)
    else {
      const today = new Date();
      ItemModel.findAll({
        offset: Number(offset) || 0,
        limit: 6,
        where: {
          endTime: {
            [Op.gt]: today,
          }
        },
      })
        .then((result) => {
          if (result.length) {
            let items = result.map((item) => {
              item.dataValues.city = city;
              return item.dataValues;
            });
            res.status(200).json({ items });
          } else {
            const items = [];
            res.status(204).json({ items });
          }
        }).catch((error) => {
          logger.error(`Error in Search All: ${error}`);
          res.status(500).json({ 'message': 'Fail to load data from database' });
        });
    }
  }
};
