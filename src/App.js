import React, { Component } from "react";




class ReverseWordsApp extends Component{
    state ={
        txt: ""
    };
    render(){
        return(
            <div className="app">
                <div className="top">
                
                    <input className="inputFld" id="inputField" required onChange={e=> this.setState({txt:e.target.value})}/>
                    <span className="label" id="move">INPUT YOUR TEXT HERE</span>
                </div>
                <div className="bottom">
                    <span className="output" id="btmLine">{this.state.txt.split("").reverse().join("")}</span>
                </div>
            </div>
        )
    }
}

export default ReverseWordsApp;