import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './stream-form';

class StreamEdit extends React.Component {
    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        // props from react router dom (Link)
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    // ownProps from parent passing in
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);