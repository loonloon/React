import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ShelfHeader from './shelf-header';
import ProductList from './product-list';

class Shelf extends React.Component {
    state = { isLoading: false };

    componentDidMount() {

    }

    handleFetchProducts = (filters, sort) => {
        this.setState({ isLoading: true });

    }

    render() {
        const { isLoading } = this.state;

        return (
            <React.Fragment>
                {isLoading && <Spinner />}
                <div className='shelf-container'>
                    <ShelfHeader productLength={products.length} />
                    <ProductList products={products} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Shelf);