import { createConnection } from 'typeorm';
import path from 'path';

// const JS = path.join(__dirname, '..', 'entities', '*.js');
// const TS = path.join(__dirname, '..', 'entities', '*.ts');
// const DATABASE = path.join(__dirname, 'tags_n_comliments.sqlite');
// console.log(JS);
// console.log(TS);

export default createConnection()
  .then((res) => console.log(res))
  .catch((err) => {
    throw new Error(err.message);
  });
