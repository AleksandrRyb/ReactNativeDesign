import React from 'react';
import { StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'expo';
import { NotificationIcon } from '../components/Icons';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Card from '../components/Card';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';

const CardsQuery = gql`
{
    CardsCollection {
        items {
            title
        }
    }
}
`;

const mapStateToProps = state => ({
    action: state.action,
    name: state.name
})

const mapStateToDispatch = dispatch => ({
    openMenu: () => dispatch({
        type: 'OPEN_MENU'
    })
})

class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1)
    };

    componentDidUpdate = () => {
        this.toggleMenu();
    };

    toggleMenu = () => {
        if(this.props.action == 'openMenu') {
            Animated.timing(this.state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
            }).start();
            Animated.spring(this.state.opacity, {
                toValue: 0.5
            }).start();

            StatusBar.setBarStyle('light-content', true);
        }

        if(this.props.action == 'closeMenu') {
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.in()
            }).start();
            Animated.spring(this.state.opacity, {
                toValue: 1
            }).start();
        }

        StatusBar.setBarStyle('dark-content', true);
    };

    render() {
        return (
            <RootView>
                <Menu />
                <AnimatedContainer style={{ transform: [{ scale: this.state.scale }], opacity: this.state.opacity}}>
                    <SafeAreaView>
                        <ScrollView style={{ height: '100%' }}>
                            <TitleBar>
                                <TouchableOpacity style={{
                                    marginLeft: 20,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                                    onPress={this.props.openMenu}
                                >
                                    <Avatar />
                                </TouchableOpacity>
                                <Title>Hello world</Title>
                                <Name>{this.props.name ? this.props.name : 'Alex'}</Name>
                                <NotificationIcon
                                    style={{ position: 'absolute', right: 20, top: 5 }}
                                />
                            </TitleBar>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30 }}
                            >
                                {logos.map((logo, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => {
                                            this.props.navigation.push('Projects')
                                        }}
                                    >
                                        <Logo
                                            image={logo.image}
                                            text={logo.text}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <ScrollView
                                horizontal={true}
                                style={{ paddingBottom: 30 }}
                                showsHorizontalScrollIndicator={false}
                            >
                                {/* <Query query={CardsQuery}>
                                    {({loading, data, error }) => {
                                        if(loading) return <Message></Message>;
                                        console.log(data.cardsCollection.items)
                                        return <Message />
                                    }}
                                </Query> */}
                                {cards.map((card, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => {
                                            this.props.navigation.push('Section',{
                                                section: card
                                            })
                                        }}
                                    >
                                        <Card
                                            title={card.title}
                                            image={card.image}
                                            caption={card.caption}
                                            subtitle={card.subtitle}
                                            logo={card.logo}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <Subtitle>Continue Learning</Subtitle>
                                {courses.map((course, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => this.props.navigation.push('Courses')}    
                                    >
                                        <Course
                                            image={course.image}
                                            logo={course.logo}
                                            title={course.title}
                                            subtitle={course.subtitle}
                                            avatar={course.avatar}
                                            author={course.author}
                                            caption={course.caption}
                                        />
                                    </TouchableOpacity>
                                ))}
                        </ScrollView>
                    </SafeAreaView>
                </AnimatedContainer>
            </RootView>
        );
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(HomeScreen)

const Subtitle = styled.Text`
  color: #b8bebc;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;


const Message = styled.Text`

`;

const RootView = styled.View`
    background: black;
    flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8beee;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4568;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
    {
        image: require('../assets/logo-framerx.png'),
        text: "Framer X"
    },
    {
        image: require('../assets/logo-figma.png'),
        text: "Figma"
    },
    {
        image: require('../assets/logo-invision.png'),
        text: "inVision"
    },
    {
        image: require('../assets/logo-swift.png'),
        text: "Swift"
    },
    {
        image: require('../assets/logo-studio.png'),
        text: "Studio"
    },
];

const cards = [
    {
        title: "React Native for Designers",
        image: require("../assets/background11.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 sections",
        logo: require("../assets/logo-react.png")
    },
    {
        title: "Styled Components",
        image: require("../assets/background12.jpg"),
        subtitle: "React Native",
        caption: "2 of 12 sections",
        logo: require("../assets/logo-react.png")
    },
    {
        title: "Props and Icons",
        image: require("../assets/background13.jpg"),
        subtitle: "React Native",
        caption: "3 of 12 sections",
        logo: require("../assets/logo-react.png")
    },
    {
        title: "Static Data and Loop",
        image: require("../assets/background14.jpg"),
        subtitle: "React Native",
        caption: "4 of 12 sections",
        logo: require("../assets/logo-react.png")
    }
];

const courses = [
    {
        title: "Prototype in InVision Studio",
        subtitle: "10 sections",
        image: require("../assets/background13.jpg"),
        logo: require("../assets/logo-studio.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Design and interactive prototype"
    },
    {
        title: "React for Designers",
        subtitle: "12 sections",
        image: require("../assets/background11.jpg"),
        logo: require("../assets/logo-react.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Learn to design and code a React site"
    },
    {
        title: "Design and Code with Framer X",
        subtitle: "10 sections",
        image: require("../assets/background14.jpg"),
        logo: require("../assets/logo-framerx.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption: "Create powerful design and code components for your app"
    },
    {
        title: "Design System in Figma",
        subtitle: "10 sections",
        image: require("../assets/background6.jpg"),
        logo: require("../assets/logo-figma.png"),
        author: "Meng To",
        avatar: require("../assets/avatar.jpg"),
        caption:
            "Complete guide to designing a site using a collaborative design tool"
    }
];

