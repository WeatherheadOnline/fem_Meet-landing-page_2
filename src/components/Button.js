import React from "react";

function Button(props) {
    return(
        <button className={props.mytext[0]}>{props.mytext[1]} <span>{props.mytext[2]}</span></button>
    ) 
};

class ButtonWrapper extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const buttons = this.props.thistext.map((buttonInput) => {
            return(
                <Button mytext={buttonInput} />
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