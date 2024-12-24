const express = require('express');
const { createExpense, getAllExpenses, deleteExpense, editExpense } = require('../controllers/expenseController');

const router = express.Router();

// Routes
router.post('/expenses', createExpense);      // Create an expense
router.get('/expenses', getAllExpenses);     // Get all expenses
router.delete('/expenses/:id', deleteExpense); // Delete an expense
router.put('/expenses/:id', editExpense);     // Edit an expense

module.exports = router;
