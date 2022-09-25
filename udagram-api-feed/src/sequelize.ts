import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': 'postgres',
  'password': 'postgrespw',
  'database': 'udacity-udagram-monolithic-to-microservice',
  'host': '127.0.0.1',
  'port':55000,
  'dialect': 'postgres',
  'storage': ':memory:',
});

// export const sequelize = new Sequelize({
//   'username': config.username,
//   'password': config.password,
//   'database': config.database,
//   'host': config.host,

//   'dialect': config.dialect,
//   'storage': ':memory:',
// });
