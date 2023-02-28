import { createAction } from "@reduxjs/toolkit";

// create an action for each possible action type
export const deposit = createAction("bank/deposit");
export const withdraw = createAction("bank/withdraw");
export const addInterest = createAction("bank/addInterest");
export const applyCharges = createAction("bank/applyCharges");
