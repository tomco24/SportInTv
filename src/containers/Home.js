import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMatches, selectMatchesFromSport, startLoading } from '../actions';
import { Image } from 'react-native'
import { ListView, Screen, View, Text, Card, Subtitle, Caption, Button, Icon } from '@shoutem/ui';
import SportSelector from '../components/SportSelector';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualSport: null,
            loading: true
        }
    }
    renderRow(match) {
        //console.log(JSON.stringify(match.date));
        return (
            <View style={{ backgroundColor: 'white' , flex:1}}
                styleName="horizontal v-center">
                <View style={{flex:60}} styleName="vertical md-gutter">
                    <Subtitle styleName="multiline v-center">
                    {match.title}
                    </Subtitle>
                    <View styleName="horizontal v-center space-between">
                        <Caption>{match.competition}</Caption>
                        <Caption>{match.station}</Caption>
                    </View>
                </View>
                <View style={{flex:40}} styleName="vertical v-start h-center">
                    <Subtitle>{match.date.time}</Subtitle>
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.props.loadSport('Futbal');

    }
    handleSportSelection(sport) {
        this.setState({ actualSport: sport });
        console.log(JSON.stringify(this.state));
        console.log(sport);
        this.props.clearDataAndStartLoading();
        this.props.loadSport(sport.value);
    }

    render() {
        console.log(JSON.stringify(this.props));
        return (
            <Screen style={{ flex: 1 }}>
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

function mapStateToProps(state) {
    return {
        loading: state.matches.loading,
        data: state.matches.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => (dispatch(loadMatches())),
        loadSport: (sport) => (dispatch(selectMatchesFromSport(sport))),
        clearDataAndStartLoading: () => (dispatch(startLoading()))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);