import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'expo';

import HomeScreens from '../screens/HomeScreens';
import SectionScreens from '../screens/SectionScreens';
import CoursesScreens from '../screens/CoursesScreens';
import ProjectsScreens from '../screens/ProjectsScreens';


const active = '#4775f2';
const inactive = '#b8bece';

const HomeStack = createStackNavigator({
    Home: HomeScreens,
    Section: SectionScreens,
    Courses: CoursesScreens,
    Projects: ProjectsScreens
}, {
    mode: 'modal'
});

HomeStack.navigationOptions = ({ navigation }) => {
    var tabBarVisible = true;
    const routeName = navigation.state.routes[navigation.state.index].routeName;
    console.log(routeName)
    if(routeName == 'Section') {
        tabBarVisible = false
    }
    return {
            tabBarVisible,
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <Icon.Ionicons 
                name='ios-home' 
                size={26}
                color={focused ? active : inactive}
            />
        )
    }
}

const CoursesStack = createStackNavigator({
    Courses: SectionScreens
});

CoursesStack.navigationOptions = {
    tabBarLabel: 'Courses',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name='ios-albums'
            size={26}
            color={focused ? active : inactive}
        />
    )
}

const ProjectsStack = createStackNavigator({
    Projects: SectionScreens
});

ProjectsStack.navigationOptions = {
    tabBarLabel: 'Projects',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name='ios-folder'
            size={26}
            color={focused ? active : inactive}
        />
    )
}

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    CoursesStack,
    ProjectsStack
});

export default TabNavigator;