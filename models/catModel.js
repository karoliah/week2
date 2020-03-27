'use strict';
const promisePool = require('../database/db').promise();
const cats = [
  {
    id: '1',
    name: 'Frank',
    age: '6',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    age: '4',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

const getAllCats = async () => {
  try{
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ?', [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ?', [id]);
    return rows[0];
  } catch (e) {
    console.log('error', e.message);
  }
};

const insertCat = async (id) => {
  try {
    const [rows] = await promisePool.query('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?)', [cat.name, cat.age, cat.weight, cat.owner, cat.filename]);
    return rows[0];
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  cats,
  getAllCats,
  getCat,
  insertCat
};
