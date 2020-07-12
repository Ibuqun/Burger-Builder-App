import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

const { Component } = require("react");
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default  BurgerBuilder;