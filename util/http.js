import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post("https://manage-expense-2ba37-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
        expenseData)
}