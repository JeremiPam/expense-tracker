import { createContext } from "react";

interface balance{
    
    income:number,
    expense:number
}

interface BalanceContextValue{
    balance:balance,
    setBalance:(balance:balance)=>void
}
const tempVal={balance:0,income:0,expense:0};
const initVal:BalanceContextValue={balance:{income:0,expense:0},setBalance:(tempVal)=>{}};
export const amount=createContext<BalanceContextValue>(initVal);