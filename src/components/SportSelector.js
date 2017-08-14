import React, { Component } from 'react';
import {DropDownMenu} from '@shoutem/ui';

class SportSelector extends Component {
    constructor(props){
        super(props);
        this.state={
            sports:[
                { title: 'Futbal', value: 'Futbal'},
                { title: 'Basketbal', value: 'Basketbal'},
                { title: 'Hokej', value: 'Hokej'},
            ]
        }
    }
    render() {
        console.log(this.props.actual);
        return (
            <DropDownMenu
                styleName="horizontal"
                options={this.state.sports}
                selectedOption={this.props.actual?this.props.actual:this.state.sports[0]}
                onOptionSelected={this.props.onSelect}
                titleProperty="title"
                valueProperty="value"
            />
        );
    }
}

export default SportSelector;