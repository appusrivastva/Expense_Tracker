import React, { useState } from "react";
import './expense.css';

export default function ExpenseTracker() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleClick = () => {
    if (!input || !amount) {
      return;
    }
    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="main">
        <input
          type="text"
          placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-section"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-section"
        />
        <button onClick={handleClick}>Add Expense</button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
