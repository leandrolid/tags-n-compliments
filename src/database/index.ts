import { createConnection } from 'typeorm';

// export const connection = (async () => {
//   await createConnection();
//   getConnection('default');
// })();

export const connection = await createConnection();
