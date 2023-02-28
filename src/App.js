
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw, addInterest, applyCharges } from './actions';
import './App.css';

// define the App component
const App = ({ balance, deposit, withdraw, addInterest, applyCharges }) => {
  // create a reference to the amount input field using the useRef hook
  const amountInputRef = useRef(null);

  // define a function to handle a deposit
  const handleDeposit = () => {
    deposit(amountInputRef.current.value);
  };

  // define a function to handle a withdrawal
  const handleWithdraw = () => {
    withdraw(amountInputRef.current.value);
  };

  // define a function to handle adding interest
  const handleAddInterest = () => {
  // pass the interest rate as an argument to addInterest
    addInterest(10); 
  };

  // define a function to handle applying charges
  const handleApplyCharges = () => {
  // pass the charge amount as an argument to applyCharges
    applyCharges(5); 
  };

  // render the component
  return (
    <div>
      {/* display an input field for the amount */}
      <input type="number" ref={amountInputRef} />

      {/* display a button to deposit money */}
      <button onClick={handleDeposit}>Deposit</button>

      {/* display a button to withdraw money */}
      <button onClick={handleWithdraw}>Withdraw</button>

      {/* display a button to add interest */}
      <button onClick={handleAddInterest}>Add Interest</button>

      {/* display a button to apply charges */}
      <button onClick={handleApplyCharges}>Apply Charges</button>

      {/* display the current balance */}
      <div>Balance: ${balance}</div>
    </div>
  );
};

// define the mapStateToProps function to map the state to props
const mapStateToProps = (state) => ({
  balance: state.bank.balance,
});

// connect the App component to the Redux store and export it
export default connect(mapStateToProps, { deposit, withdraw, addInterest, applyCharges })(App);


