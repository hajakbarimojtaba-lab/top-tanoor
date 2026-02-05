require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./config/db');

const menuRoutes = require('./routes/menuRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// اتصال دیتابیس
connectDB();

// middleware های امنیتی
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// route ها
app.use('/api/menu', menuRoutes);
app.use('/api/auth', authRoutes);

// تست سلامت سرور
app.get('/', (req, res) => {
  res.send('TopTanoor API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
