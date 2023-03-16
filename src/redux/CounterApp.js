import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./actions";


const CounterApp = () => {
    const counter = useSelector(state => state.counter);
    const useDispatch = useDispatch();
    return (
        <>
            <h1>Counter: {counter}</h1>
        </>
    )
}

export default CounterApp;