import React, { Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'expo';

export default class SectionScreens extends Component {

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content', true)
  }

  render() {

    const { navigation } = this.props;
    const section = navigation.getParam('section');

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{position: 'absolute', right: 20, top: 30}}
          onPress={() => this.props.navigation.goBack()}
        >
          <CloseView>
            <Icon.Ionicons name='ios-close' size={36} color="#4775f2" />
          </CloseView>
        </TouchableOpacity>
      </Container>
    )
  }
};

const Container = styled.View`
    flex: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.30);
  justify-content: center;
  align-items: center;
`;
