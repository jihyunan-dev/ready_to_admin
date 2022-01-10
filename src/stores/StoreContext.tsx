import React, { useContext, createContext } from 'react';
import CounterStore from './CounterStore';

type Counter = {
    number: number;
    increaseNumber: () => void;
    decreaseNumber: () => void;
};

export const CounterContext = createContext<Counter>(CounterStore);

const GlobalProvider = ({ children }: { children: any }) => {
    return (
        <CounterContext.Provider value={CounterStore}>
            {children}
        </CounterContext.Provider>
    );
};
export default GlobalProvider;

export const useCounter = () => {
    const counterContext = useContext(CounterContext);
    return counterContext;
};
