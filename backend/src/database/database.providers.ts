import { first } from 'rxjs';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 1000,
        username: 'my_galaxy',
        password: 'my_galaxy',
        database: 'my_galaxy',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];