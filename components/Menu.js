import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

const mapStateToProps = (state) => ({
    action: state.action
})

const mapDispatchToProps = dispatch => ({
    closeMenu: () => 
        dispatch({
            type: 'CLOSE_MENU'
        })
});

// function mapStateToProps(state) {
//     return { action: state.action }
// }

const screenHeight = Dimensions.get('window').height;

class Menu extends Component {

    state = {
        top: new Animated.Value(screenHeight)
    };

    componentDidMount() {
        this.toggleMenu()
    };

    componentDidUpdate() {
        this.toggleMenu()
    }

    toggleMenu = () => {

        if(this.props.action == 'openMenu') {
            Animated.spring(this.state.top, {
                toValue: 54
            }).start();
        }

        if(this.props.action == 'closeMenu') {
            Animated.spring(this.state.top, {
                toValue: screenHeight
            }).start();
        }
    };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
            <Image source={require('../assets/background2.jpg')}/>
            <Title>Alex Fish</Title>
            <Subtitle>Designer at Designers</Subtitle> 
        </Cover>
        <TouchableOpacity 
            onPress={this.props.closeMenu}
            style={{ position: 'absolute', left: '50%', top: 120, marginLeft: -22, zIndex: 1}}
        >
            <CloseView>
                <Icon.Ionicons name='ios-close' size={44} color='#546bfb' />
            </CloseView>
        </TouchableOpacity>
        <Content>
            {items.map((item, i) => (
                <MenuItem
                    key={i}
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                />
            ))}
        </Content>
      </AnimatedContainer>
    );

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)


const Image = styled.Image`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
`;

const Container = styled.View`
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
    z-index: 100;
    border-radius: 10;
    overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const items = [
    {
        icon: 'ios-settings',
        title: 'Account',
        text: 'settings'
    },
    {
        icon: 'ios-card',
        title: 'Billing',
        text: 'payments'
    },
    {
        icon: 'ios-compass',
        title: 'Learn React',
        text: 'start-course'
    },
    {
        icon: 'ios-exit',
        title: 'Log out',
        text: 'see you soon!'
    },
]