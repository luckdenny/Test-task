import { useState } from 'react';
import './InvestWindow.css';

export const InvestWindow = ({active, setActive, loanId, loans, setIsInvest, setTotal, total, available, setAvailable}) => {
    const inf = [...loans].filter(loan => loan.id === loanId);
    const [investInLoan, setInvestInLoan] = useState(0);
    const invest = () => setIsInvest(inf.length ? inf[0].inv = true : inf[0].inv = false);
    const getInvest = (e) => {
      setInvestInLoan(+e.target.value); 
    }
    const handleAmount = () => setAvailable(available - investInLoan);
    const newTotal = () => setTotal(total - investInLoan);

    return (
        <div className={active ? "InvestWindow active" : "InvestWindow"} onClick={()=> setActive(false)}>
           <div className ={active ? "InvestWindow__content active" : "InvestWindow__content"} onClick= {e => e.stopPropagation()}>
               <h2 className="InvestWindow__title"> Invest in Loan </h2>
               <h3>{inf.length ? inf[0].title : ''}</h3>
               <p>Amount available: {'  '} {available}</p>
               <p>Loan end in: {inf.length ? Math.floor(parseInt(inf[0].term_remaining) / 86400) : ''}{'  '}days </p>
               <p>Investment amount (£) {investInLoan}</p>

               <div className="investWindow__form">
                 <input type="text" 
                   placeholder = {inf.length ?`Max invest: ${available}` : ''}
                   value={investInLoan}
                   onChange={getInvest}
                 />
                 <button 
                   type="button"
                   className="InvestWindow__form-button"
                   onClick={() => {invest(); setActive(false); newTotal(); handleAmount()}}
                 >
                   Invest
                 </button>
               </div>
           </div>
        </div>
    );
}