import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            color: props.value
         }
    }
    render() { 
        return ( 

            <div 
            className="cell" 
            style = {{BackgroundColor: this.state.color}}>
                he
            </div>
         );
    }
}
 
export default Cell;