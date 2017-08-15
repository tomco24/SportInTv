import React from 'react';
import {View,Subtitle,Caption} from '@shoutem/ui';

const ListItem = (props) => {
    const {match}=props;
    const colors=['green','red'];
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
                    <Subtitle 
                        styleName="bold"
                        style={{
                            color:colors[match.gender]
                        }}
                    >
                    {match.date.time}
                    </Subtitle>
                </View>
            </View>
    );
};

export default ListItem;