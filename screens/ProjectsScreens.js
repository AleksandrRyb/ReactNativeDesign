import React, { Component } from 'react';
import styled from 'styled-components';

export default class CoursesScreens extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container>
                <Text>Projects Screens</Text>
            </Container>
        )
    }
};

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`

`;