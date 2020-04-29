import React, { Component } from 'react';
import {Select,SelectTag} from './styles.js'

class ProductSort extends Component {

    onSelectSortBy=(event)=>{
        this.props.onSelectSortBy(event.target.value)
    }
    render() {
        return (
            <Select>
            <p>Sort price by:</p>
            <SelectTag onChange={this.onSelectSortBy} >
                <option value="select">select</option>
                <option value="Lowest to highest">Lowest to highest</option>
                <option value="Highest to lowest">Highest to lowest</option>
            </SelectTag>
            </Select>
        );
    }
}

export default ProductSort;