import React, { Component } from 'react';
import {Sizes,SizeButton,SizeHeading,SizeContainer} from './styles.js'
class SizeFilter extends Component {

    onSelectSize=(event)=>{
        this.props.onSelectSize(event.target.value)
    }
    render() {
        return (
            <SizeContainer>
                <SizeHeading>Sizes:</SizeHeading>
                <Sizes>
                <SizeHeading></SizeHeading>
                <SizeButton onClick={this.onSelectSize} value="XS">XS</SizeButton>
                <SizeButton onClick={this.onSelectSize} value="S">S</SizeButton>
                <SizeButton onClick={this.onSelectSize} value="M">M</SizeButton>
                <SizeButton onClick={this.onSelectSize} value="L">L</SizeButton>
                <SizeButton onClick={this.onSelectSize} value="XL">XL</SizeButton>
                <SizeButton onClick={this.onSelectSize} value="XXL">XXL</SizeButton>
            </Sizes>
            </SizeContainer>
        );
    }
}

export default SizeFilter;