import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadMatches,selectMatchesFromSport,startLoading} from '../actions';
import {ListView,Screen,View,Text} from '@shoutem/ui';
import SportSelector from '../components/SportSelector';


class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            actualSport:null,
            loading:true
        }
    }
    renderRow(match){
        //console.log(JSON.stringify(match));
        return(
            <View>
                <Text>{match.title}</Text>
            </View>
        )
    }
    componentDidMount() {
        this.props.loadSport('Futbal');
       
    }
    handleSportSelection(sport){
        this.setState({actualSport:sport});
        console.log(JSON.stringify(this.state));
        console.log(sport);
        this.props.clearDataAndStartLoading();
        this.props.loadSport(sport.value);
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
        load: () => (dispatch(loadMatches())),
        loadSport: (sport) => (dispatch(selectMatchesFromSport(sport))),
        clearDataAndStartLoading: () => (dispatch(startLoading()))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);