import React, { Component } from 'react';
import {
  View
 } from 'react-native';
import {
  Container,Right,Icon,Header,Left,Text,Button,DatePicker,Textarea,Content,Body,
  Footer,FooterTab,Title}
   from 'native-base';

export default class Edit extends Component {
  render() {
    return (
        <Container>
        <Header androidStatusBarColor='orange' style={{backgroundColor: "white",justifyContent: 'space-between'}}>
          <Left style={{left:-15}}>
            <Button transparent onPress={() => this.props.navigation.push("Home")}>
              <Icon style={{color: "orange",fontSize: 23}} name='chevron-thin-left' type='Entypo' />
            </Button>
          </Left>
          <Body style={{left: 30}}>
            <Title style={{alignSelf: 'center',fontSize: 23,color: "black"}}>  Notes </Title>
          </Body>
          <Right>
              <Text style={{color: "orange",fontSize: 23}}> Cancel </Text>
          </Right>
        </Header>
        <Content/>

        <Footer style={{backgroundColor: "white"}}>
          <FooterTab style={{backgroundColor: "white"}}>
            <Left/>
            <Body/>
            <Right style={{left:-7}}>
              <Text style={{color: "orange",fontSize: 23}}>  Delete </Text>
            </Right>
          </FooterTab>
      </Footer>
      </Container>

    );
  }
}
