import React from "react";

{/* 
    Button() takes props.myText as an array of arrays:  
    [class, button-text, span-text(optional)]
*/}

function Button(props) {
    const buttonId = `button-${props.buttonInput.id}`
    return(
        <button id={buttonId} className={props.buttonInput.class}>
            {props.buttonInput.text} <span>{props.buttonInput.spantext}</span>
        </button>
    ) 
};

class ButtonWrapper extends React.Component {
    render() {
        const buttons = this.props.buttonContents.map((input) => {
            return(
                <Button buttonInput={input} />
            )
        });

        return(
            <div className="button-wrapper">
                {buttons}
            </div>
        )
    }
};

export default ButtonWrapper;