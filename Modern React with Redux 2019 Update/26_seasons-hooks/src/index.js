import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display';
import Spinner from './spinner';
import useLocation from './use-location';

const App = () => {
    const [lat, errorMessage] = useLocation();
    let content;

    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay latitude={lat} />;
    }
    else {
        content = <Spinner message="Please accept location request" />;
    }

    return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));