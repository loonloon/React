import React from 'react';
import LanguageContext from '../contexts/language-context';

class Field extends React.Component {
    //way 1
    static contextType = LanguageContext;

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className='ui field'>
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;