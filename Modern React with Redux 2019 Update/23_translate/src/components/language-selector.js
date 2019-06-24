import React from 'react';
import LanguageContext from '../contexts/language-context';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>Select a language:
                <i className='flag us' onClick={() => this.contextType.onLanguageChange('english')} />
                <i className='flag nl' onClick={() => this.contextType.onLanguageChange('dutch')} />
            </div>
        );
    }
}

export default LanguageSelector;