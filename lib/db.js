import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",      
  host: "localhost",
  database: "shortlinks",
  password: "Sabya@#429", 
  port: 5432,
});

export default pool;