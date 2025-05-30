import React from "react";

{/* 
    Button() takes props.myText as an array of arrays:  
    [class, button-text, span-text(optional)]
*/}

function Button(props) {
    return(
        <button className={props.buttonInput[0]}>{props.buttonInput[1]} <span>{props.buttonInput[2]}</span></button>
    ) 
};

class ButtonWrapper extends React.Component {
    constructor(props){
        super(props);
    }
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