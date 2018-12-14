import React, { Component } from 'react';
import {
  View
 } from 'react-native';
import {
  Container,Right,Icon,Header,Left,Text,Button,DatePicker,Textarea,Content,Body,
  Footer,FooterTab,Title}
   from 'native-base';

import { connect } from 'react-redux'   
import { addNote } from '../../publics/redux/actions/actionsNotes'
import uuidv1 from 'uuid';

class Add extends Component {
  constructor() {
    super();
    this.state = {
        text: '',
        focus: false
    }
}

  componentDidMount() {
      this.props.navigation.setParams({
          noteAdd: this.noteAdd
      });
  }
  

  noteAdd = () => {
      const text = this.state.text;
      const id = uuidv1();
      const date = Date();

      if (this.state.text !== '') {
          this.props.dispatch(addNote({ id, text, date }))
          this.props.navigation.pop();
      } else {
          this.props.navigation.pop()
      }
  }
    
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
        headerLeft: (
            <Icon style={{color: "orange",margin: 8}} 
                name='chevron-thin-left' 
                type='Entypo' size={12}
                onPress={() => params.noteAdd()}
            />
        )
    }
}

      dateShow = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const today = new Date();
        const thisMonth = months[today.getMonth()];
        const thisDate = today.getDate();
        const thisYear = today.getFullYear();
        const thisHour = today.getHours();
        const thisMinute = today.getMinutes();
        return `${thisDate} ${thisMonth} ${thisYear} ${thisHour}.${thisMinute}`;
    }
  render() {
    return (
        <Container>
          <Content>
            <Textarea onFocus={() => { this.setState({ focus: true })
              }}
              onChangeText={(text) =>this.setState({ text })
              }
              style={[{ fontSize: 16, padding: 15 }, this.state.focus ? { textAlign: "left" } : { textAlign: "center" }]}
              rowSpan={22}
              placeholder={this.state.focus ? '' : this.dateShow()}
            />
          </Content>
        </Container>

    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes,
  isGrid: state.isGrid
})

export default connect(mapStateToProps)(Add);