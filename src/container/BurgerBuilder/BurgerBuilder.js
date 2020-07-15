import React, { Component } from 'react';
import Auxilirity from "../../hoc/Auxilirity/Auxilirity";
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,

};
class BurgerBuiler extends Component {

    state = {
        Ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }
        ).reduce((total, el) => {
            return total + el;
        }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.Ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = { ...this.state.Ingredients };
        updateIngredients[type] = updateCount;
        const price = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ Ingredients: updateIngredients, totalPrice: price });
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.Ingredients[type];
        if (oldCount <= 0) { return; }
        const updateCount = oldCount - 1;
        const updateIngredients = { ...this.state.Ingredients };
        updateIngredients[type] = updateCount;
        const price = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ Ingredients: updateIngredients, totalPrice: price });
        this.updatePurchaseState(updateIngredients);
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });

    }
    purchaseConyinueHandler = () => {

        alert('You Continue !');
    }
    render() {
        const disabledInfo = { ...this.state.Ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Auxilirity>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.Ingredients}
                        purchaseContinue={this.purchaseConyinueHandler}
                        purchaseCancel={this.purchaseCancelHandler} />
                </Modal>

                <Burger Ingredients={this.state.Ingredients} />
                <BuildControls ordered={this.purchaseHandler} priceBurger={this.state.totalPrice} purchase={this.state.purchasable} disabled={disabledInfo} ingredientRemove={this.removeIngredientHandler} ingredientAdded={this.addIngredientHandler} />
            </Auxilirity>
        );
    }
}
export default BurgerBuiler;
