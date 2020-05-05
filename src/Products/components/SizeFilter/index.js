import React, { Component } from 'react';
import {Sizes,SizeButton,SizeHeading,SizeContainer} from './styles.js'
import EachSize from "../EachSize/index.js";
class SizeFilter extends Component {


    render() {
        const {onSelectSize,sizeFilter}=this.props
        return (
            <SizeContainer>
                <SizeHeading>Sizes:</SizeHeading>
                <Sizes>
                    {sizeFilter.map(size=>
                        <EachSize key={"size"} size={size} onSelectSize={onSelectSize} />
                    )}
                </Sizes>
            </SizeContainer>
        );
    }
}

export default SizeFilter;