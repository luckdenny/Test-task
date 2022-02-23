import './App.css';
import React from 'react';
import loans from './api/current-loans.json';
import { LoansList } from './components/LoansList';

const loansFromServer = loans.loans.map((loan) => {
return {...loan, inv:false}
});

function App() {
  return (
    <div className="App">
      <h1 className="title">Current Loans</h1>
      <LoansList loans={loansFromServer} />
    </div>
  );
}

export default App;
