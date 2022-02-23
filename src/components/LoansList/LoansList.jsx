import React, { useState } from 'react';
import './LoansList.css';
import { InvestWindow } from '../InvestWindow';

export const LoansList = ({ loans, setLoansFromServer }) => {
    const [investWindowActive, setInvestWindowActive] = useState(false);
    const [loanId, setLoanId] = useState(0);
    const [isInvest, setIsInvest] = useState(false);
    const arr = loans.map(a => a.available);
    const WinActive = () => setInvestWindowActive(true);
    const [total, setTotal] = useState(arr.reduce((a,b) => (parseFloat(a) + parseFloat(b)),0).toFixed(3));
    const [available, setAvailable] = useState(0);
  return (
    <>  
    <ul> 
        {loans.map(
          loan => <li className="LoansList__item" key = {loan.id}>
              <div className="LoanList__item-contant-container">
              <h2>
              {loan.title}
              </h2>
              <p> Tranche: {loan.tranche}</p>
              <p>Annualised return: {loan.annualised_return}</p>
              </div>
              <span className={loan.inv ? "IsInvested" : "IsInvested none"}>
                Invested
              </span>    
              <button
                type="button" 
                className="LoansList__item-button" 
                onClick={()=> {WinActive(); setLoanId(loan.id);setAvailable(arr[loan.id])}}>   
                  Invest
              </button>
              {}
          </li>
        )}
    </ul>
    <InvestWindow 
      active={investWindowActive} 
      setActive={setInvestWindowActive}
      loanId={loanId}
      loans = {loans}
      isInvest = {isInvest}
      setIsInvest = {setIsInvest}
      setTotal = {setTotal}
      total = {total}
      arr = {arr}
      available = {available}
      setAvailable = {setAvailable}
    />
    <p> 
     Total amount available for investments: 
     {'   '}
     <strong>
     £{total}
     </strong>
    </p>
    </>
  );
}