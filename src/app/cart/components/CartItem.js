// CartItem.js
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: 0
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={item.qty}
                            type="number"
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => {} }>
                        Update
                </button>    
                <button onClick={() => {}}>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}