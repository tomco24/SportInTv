import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadMatches,loadMatchesSuccess} from '../actions';
import {ListView,Screen,View,Text} from '@shoutem/ui';
import SportSelector from '../components/SportSelector';


class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            actualSport:null
        }
    }
    renderRow(match){
        console.log(JSON.stringify(match));
        return(
            <View>
                <Text>{match.title}</Text>
            </View>
        )
    }
    componentDidMount() {
        this.props.load();
       
    }
    handleSportSelection(sport){
        this.setState({actualSport:sport});
        console.log(JSON.stringify(this.state));
        console.log(sport);
    }
    
    render() {
        console.log(JSON.stringify(this.props));
        return (
            <Screen>
                <SportSelector 
                    actual={this.state.actualSport}
                    onSelect={this.handleSportSelection.bind(this)}
                />
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