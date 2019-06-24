import React from 'react';
import LanguageContext from '../contexts/language-context';
import ColorContext from '../contexts/color-context';

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>

            </button>
        );
    }

    render() {
        // way 2
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;