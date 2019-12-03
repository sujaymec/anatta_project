import React, {Component} from 'react';

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            dummyvalue: 'dummy value'
        }
    }

    render(){
        return(
            <React.Fragment>
                Hello World Homepage
            </React.Fragment>
        )
    }
}