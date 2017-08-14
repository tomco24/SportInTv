import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';


export const Navigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    }
}, {
        navigationOptions: {
            headerStyle:{
                marginTop:20
            }
        }
    });