import React from 'react';
import Sort from '../sort';

const ShelfHeader = props => {
    return (
        <div className='shelf-container-header'>
            <small className='product-found'>
                <span>{props.productsLength} Products(s) found.</span>
            </small>
            <Sort />
        </div>
    );
};

export default ShelfHeader;