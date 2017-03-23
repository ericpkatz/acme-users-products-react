const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: conn.Sequelize.STRING
});

const Product = conn.define('product', {
  name: conn.Sequelize.STRING
});

const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const users = ['moe', 'larry', 'curly'];
  const products = ['foo', 'bar', 'bazz'];

  return sync()
    .then(()=> {
      const usersPromises = users.map(name => User.create({ name }));
      const productsPromises = products.map(name => Product.create({ name }));
      const allPromises = usersPromises.concat(productsPromises);
      return Promise.all(allPromises);
    });
};

module.exports = {
  models: {
    User,
    Product
  },
  sync,
  seed
};
