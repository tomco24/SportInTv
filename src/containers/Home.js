import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadMatches} from '../actions';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        loading:state.matches.loading,
        data:state.matches
    }
}
export default connect(mapStateToProps,{loadMatches})(HomeContainer);