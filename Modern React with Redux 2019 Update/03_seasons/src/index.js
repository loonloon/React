import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display';
import Spinner from './spinner';

class App extends React.Component {
    //same as initialize in constructor, but lesser code
    state = { latitude: null, errorMessage: "" };

    componentDidMount() {
        console.log("My component was rendered to the screen");

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My component was just updated - it rerendered!");
    }

    render() {
        console.log("render");
        return <div className="border red">{this.renderContent()}</div>;
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />;
        }

        return <Spinner message="Please accept location request" />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));