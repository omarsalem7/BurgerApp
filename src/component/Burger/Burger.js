import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformIngredients = Object.keys(props.Ingredients).map(igKey => {
        return [...Array(props.Ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient type={igKey} key={igKey + i} />
        })
    })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>please choose ingrdients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}
export default Burger;