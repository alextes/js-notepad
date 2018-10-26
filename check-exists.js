const { Pool } = require('pg');
const { get } = require('lodash');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});

async function main({ id }) {
  const result = await pool.query('select exists(select 1 from users where id=$1)', [id]);
  const exists = get(result, ['rows', '0', 'exists']);
  console.log('Does our user exist?', exists);
  pool.end();
}

main({ id: 5 });
