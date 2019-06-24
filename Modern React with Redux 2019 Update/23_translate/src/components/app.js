import React from 'react';
import LanguageSelector from './language-selector';
import UserCreate from './user-create';
import LanguageContext, { LanguageStore } from '../contexts/language-context';
import ColorContext from '../contexts/color-context';

class App extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value='red'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;