import React, { Component } from "react";
import Auxilrity from "../../hoc/Auxilirity/Auxilirity";
import Button from "../UI/Button/Button";
class OrderSummary extends Component {

    render() {
        const summaryOfOrder = Object.keys(this.props.ingredients).map((igKey) => (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
                {this.props.ingredients[igKey]}{" "}
            </li>
        ));
        return (
            <Auxilrity>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>{summaryOfOrder}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to checkout ?</p>
                <Button clicked={this.props.purchaseCancel} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.purchaseContinue} btnType="Success">Continue</Button>
            </Auxilrity>
        );
    }
};
export default OrderSummary;
