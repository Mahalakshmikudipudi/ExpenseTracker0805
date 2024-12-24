const Expense = require('../models/Expense');

// Create an expense
exports.createExpense = async (req, res) => {
    const { title, amount, category } = req.body;

    try {
        const expense = await Expense.create({ title, amount, category });
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create expense', details: error.message });
    }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await Expense.findByPk(id);

        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }

        await expense.destroy();
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete expense' });
    }
};

// Edit an expense
exports.editExpense = async (req, res) => {
    const { id } = req.params;
    const { title, amount, category } = req.body;

    try {
        const expense = await Expense.findByPk(id);

        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }

        await expense.update({ title, amount, category });
        res.json({ message: 'Expense updated successfully', expense });
    } catch (error) {
        res.status(500).json({ error: 'Failed to edit expense' });
    }
};
