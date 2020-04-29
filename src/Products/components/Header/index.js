import React, { Component } from 'react';

class Header extends Component {
    render() {
        const {productCount}=this.props
        return (
        <p>{productCount}Product(s) found.</p>
        );
    }
}

export default Header;