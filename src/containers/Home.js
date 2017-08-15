import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMatches, selectMatchesFromSport, startLoading, selectDate,selectDateAndUpdateData } from '../actions';
import { DatePickerAndroid } from 'react-native'
import {
    ListView, Screen, View, Text, Card, Subtitle, Caption, Button, Title, NavigationBar,
    Icon
} from '@shoutem/ui';
import SportSelector from '../components/SportSelector';
import moment from 'moment';
import {formatDate} from '../utils';

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
            <View style={{ backgroundColor: 'white', flex: 1 }}
                styleName="horizontal v-center">
                <View style={{ flex: 60 }} styleName="vertical md-gutter">
                    <Subtitle styleName="multiline v-center">
                        {match.title}
                    </Subtitle>
                    <View styleName="horizontal v-center space-between">
                        <Caption>{match.competition}</Caption>
                        <Caption>{match.station}</Caption>
                    </View>
                </View>
                <View style={{ flex: 40 }} styleName="vertical v-start h-center">
                    <Subtitle styleName="bold">{match.date.time}</Subtitle>
                </View>
            </View>
        )
    }
    renderHeader() {
        return (
            <View styleName="horiozntal h-center v-center">
                <SportSelector
                    actual={this.state.actualSport}
                    onSelect={this.handleSportSelection.bind(this)}
                />
            </View>
        )
    }
    componentDidMount() {
        this.props.loadSport('Futbal',this.props.currentDate);

    }
    handleSportSelection(sport) {
        this.setState({ actualSport: sport });
        console.log(JSON.stringify(this.state));
        console.log(sport);
        this.props.clearDataAndStartLoading();
        this.props.loadSport(sport.value,this.props.currentDate);
    }
    async handleCalendarPress() {
        
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                const timestamp=moment({year,day,month}).unix();
                const currentSport=this.state.actualSport!=null
                                        ?this.state.actualSport.value
                                        :'Futbal';
                console.log(currentSport);
                this.props.selectDateAndUpdateData(currentSport,timestamp);
    }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        console.log(JSON.stringify(this.props));
        return (
            <Screen>
                <NavigationBar
                    styleName="inline"
                    centerComponent={
                        <Title styleName="md-gutter v-center">{formatDate(this.props.currentDate)}</Title>
                    }
                    rightComponent={
                        <Button onPress={this.handleCalendarPress.bind(this)}
                         styleName="tight clear">
                            <Icon name="add-event" />
                         </Button>
                    }
                />
                <ListView
                    data={this.props.data}
                    loading={this.props.loading}
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={this.renderHeader.bind(this)}
                />
            </Screen>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.matches.loading,
        data: state.matches.data,
        currentDate:state.status.date
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => (dispatch(loadMatches())),
        loadSport: (sport,selectDate) => (dispatch(selectMatchesFromSport(sport,selectDate))),
        clearDataAndStartLoading: () => (dispatch(startLoading())),
        selectDate: (date) => dispatch(selectDate(date)),
        selectDateAndUpdateData: (sport,selectDate) => (dispatch(
                                                    selectDateAndUpdateData(sport,selectDate)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);