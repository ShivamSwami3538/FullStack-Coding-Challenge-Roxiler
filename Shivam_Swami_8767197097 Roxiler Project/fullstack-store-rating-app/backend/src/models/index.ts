import { Sequelize } from 'sequelize';
import User from './User';
import Store from './Store';
import Rating from './Rating';

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb', {
  dialect: 'postgres',
});

// Define model relationships
User.hasMany(Rating);
Rating.belongsTo(User);

Store.hasMany(Rating);
Rating.belongsTo(Store);

// Export models and sequelize instance
export { sequelize, User, Store, Rating };