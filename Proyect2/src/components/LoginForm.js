import React, { Component } from 'react';
//import { TextInput } from 'react-native';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeHolder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureText
            placeHolder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <CardItem>
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
