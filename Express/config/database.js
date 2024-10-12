const { Pool } = require('pg');
require('dotenv').config(); // Для загрузки переменных окружения из .env файла

// Создаем пул подключений к PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,         // Имя пользователя базы данных
  host: process.env.DB_HOST,         // Хост базы данных
  database: process.env.DB_NAME,     // Имя базы данных
  password: process.env.DB_PASSWORD, // Пароль
  port: process.env.DB_PORT,         // Порт подключения (по умолчанию 5432)
});

// Функция для подключения к базе данных
const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database successfully');
  } catch (err) {
    console.error('Error connecting to the database', err);
    process.exit(1); // Останавливаем процесс при ошибке
  }
};

module.exports = { pool, connectDB };
