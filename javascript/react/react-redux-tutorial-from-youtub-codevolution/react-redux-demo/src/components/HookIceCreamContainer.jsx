import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/ice_cream/iceCreamActions';

const HookIceCreamContainer = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Ice Cream Container "hook" based</h1>

            <h2>Number of Ice Cream In Store: {numberOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default HookIceCreamContainer
