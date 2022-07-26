require('dotenv').config({ path: '.env' });

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'kerem',
  password: '9180',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
