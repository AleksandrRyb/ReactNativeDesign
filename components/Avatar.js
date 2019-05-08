import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    name: state.name
});

const mapStateToDispatch = dispatch => ({
    updateName: name => dispatch({
        type: 'UPDATE_NAME',
        name: name
    })
})


class Avatar extends Component {
  
  state = {
      photo: ''
  }

  componentDidMount() {
      fetch('https://uinames.com/api/?ext')
      .then(response => response.json())
      .then(result => {
        this.setState({ photo: result.photo })
        this.props.updateName(result.name)
      })
  }

    render() {
    return (
      <Image source={{ uri: this.state.photo }}/>
    )
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(Avatar);

const Image = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 22px;
`;
