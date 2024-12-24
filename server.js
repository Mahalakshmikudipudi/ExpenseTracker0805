const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database and create tables
(async () => {
    await sequelize.sync();
    console.log('Database synced.');
})();

// Use routes
app.use('/api', expenseRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
