import React, { useState } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("Loan Amount"); 
  const [tenure, setTenure] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);


  const calculateMonthlyPayment = () => {
    const annualInterestRate = 0.12;
    const totalPayments = tenure * 12; 
    const monthlyInterestRate = annualInterestRate / 12;


    const payment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div>
      <h1 className='pb-8 text-lg dark:text-white'>Estimate your monthly installments now!</h1>
      <div className="flex flex-col items-center gap-8 w-fit px-8 py-4 rounded-3xl bg-[#F5F5EA] dark:bg-[#050517]">
        <div className='flex w-full h-full justify-center gap-4 '>
          <div className='flex flex-col justify-between dark:text-white w-full'>
            <div className='flex flex-col gap-8 items-end'>
              <label className='py-2 font-medium'>Loan Amount: </label>
              <label className='py-2 font-medium'>Loan Tenure:</label>
            </div>
            <span className='text-[#050517] text-base font-medium dark:text-white'>Monthly Payment:</span>
          </div>
          <div className='flex flex-col gap-8 justify-end w-4/5'>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              placeholder="Enter loan amount"
              className="p-2 rounded-lg"
            />

            <select
              name="tenure"
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(parseInt(e.target.value))}
              className="p-2 rounded-lg"
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
            </select>
            <div className="flex justify-end">
              <button onClick={calculateMonthlyPayment} className="font-medium bg-[#9F8CE8] rounded-lg text-white px-4 py-2">
                Calculate
              </button>
            </div>

            <p className="text-[#FF4E00] text-xl">
              ₱{monthlyPayment}
            </p>
          </div>
        </div>   
      </div>
    </div>
  );
};


export default Calculator;