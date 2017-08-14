import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadMatches,loadMatchesSuccess} from '../actions';
import {ListView,Screen,View,Text} from '@shoutem/ui';
import axios from 'axios';


class HomeContainer extends React.Component {
    constructor(props){
        super(props);
    }
    renderRow(match){
        console.log(JSON.stringify(match));
        return(
            <View>
                <Text>kdd</Text>
            </View>
        )
    }
    componentDidMount() {
        this.props.load();
       
    }
    
    render() {
        console.log(JSON.stringify(this.props));
        return (
            <Screen>
                <ListView
                    data={this.props.data}
                    loading={this.props.loading}
                    renderRow={this.renderRow.bind(this)}
                />
            </Screen>
        );
    }
}

function mapStateToProps(state){
    return {
        loading:state.matches.loading,
        data:state.matches.data
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        load: () => (dispatch(loadMatches()))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);