import { DataSource } from 'typeorm';

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentax',
  entities: [
    './src/modules/cars/entities/*.ts',
    './src/modules/accounts/entities/*.ts',
  ],
  migrations: ['./src/database/migrations/*.ts'],
});

export { appDataSource };
