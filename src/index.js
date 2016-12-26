import React, {Component} from 'react';
import {render} from 'react-dom';
import * as Comp from  './Component';
class App extends Component {
    handleClick() {
        console.log(1);
        console.log(1);
    };
    render() {
        let style = {
            color: "red"
        };
        return (
            <div>
                <h1 onClick={this.handleClick} style={style}>hello world?</h1>
            </div>
        )
    }
}
var root = document.getElementById("root");
render(<App/>, root);
