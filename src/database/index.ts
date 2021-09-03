import { createConnection } from 'typeorm';

// const DATABASE = path.join(__dirname, 'tags_n_comliments.sqlite');
// console.log(JS);
// console.log(TS);

createConnection()
  .then((res) => {
    console.log('db.connected:', res.isConnected);
    // console.log('entities:', process.env.ENTITIES_FOLDER);
  })
  .catch((err) => {
    throw new Error(err.message);
  });
