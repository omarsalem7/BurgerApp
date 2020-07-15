import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price:<strong> {props.priceBurger.toFixed(2)} $</strong></p>
        {
            controls.map(el => (
                <BuildControl key={el.label}
                    label={el.label}
                    added={() => props.ingredientAdded(el.type)}
                    removed={() => props.ingredientRemove(el.type)}
                    disabled={props.disabled[el.type]}

                />
            ))}
        <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchase}>ORDER NOW</button>
    </div>
);
export default buildControls;