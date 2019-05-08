import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreens from '../screens/HomeScreens';
import SectionScreens from '../screens/SectionScreens';
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator({
    Home: HomeScreens,
    Section: SectionScreens
},{
    mode: 'modal'
});

export default createAppContainer(TabNavigator);