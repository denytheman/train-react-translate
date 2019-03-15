import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? "Submit" : "Unesi";
    }

    renderButton(colorValue) {
        return (
            <button className={`ui button ${colorValue}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        const text = this.context === 'english' ? "Submit" : "Unesi";
        return (
            <ColorContext.Consumer>
                {(colorValue) => this.renderButton(colorValue)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;