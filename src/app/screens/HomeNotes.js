import React, { Component } from "react";
import { View, ListView,Alert,TouchableOpacity,FlatList} from "react-native";
import {
  Container,
  Right,
  Icon,
  Header,
  Left,
  Text,
  Button,
  DatePicker,
  Textarea,
  Content,
  Body,
  Footer,
  FooterTab,
  Title,
  List,
  Card,
  ListItem,
  Grid
} from "native-base";

import { connect } from "react-redux";
import { gridNote } from "../../publics/redux/actions/actionsNotes";
import { deleteNote } from "../../publics/redux/actions/actionsNotes";
import ListNotes from "../screens/components/List";

const mapStateToProps = state => ({
  notes: state.notes,
  isGrid: state.isGrid
});

const mapDispatchToProps = dispatch => ({
  gridNote: () => dispatch(gridNote()),
  deleteNote: note => dispatch(deleteNote(note))
});


class Home extends Component {
  dataDate =new Date()
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      toggle: false,
      Selectid: [],
      GridView: false,
      selectNone: false,
    };
  }

  toggleEdit = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  Selectid = id => {
    var index = this.state.Selectid.indexOf(id);

    if (index === -1) {
      this.setState({ Selectid: [...this.state.Selectid, id] });
    } else {
      this.setState(state => {
        const Selectid = state.Selectid.filter(todo => todo !== id);
        return {
          Selectid
        };
      });
    }
  };

  Gridviews () {
    this.setState({
      GridView : (this.state.GridView == false) ? true : false
    })
  }
  deleteAllnote = () => {
    if (this.state.Selectid.length === 0) {
        this.props.notes.notes.map(todo => {
            this.props.deleteNote(todo);
        })
        this.toggleEdit()
    } else {
        this.state.Selectid.map(todo => {
            this.props.deleteNote(todo);
            this.setState({ Selectid: [], toggle: false, selectNone: true })
        })
    }
}

  deleteNotes = (note) => {
  this.props.deleteNote(note);
  }
  deleteRow = (secId, rowId, rowMap) => {
    rowMap[`${secId}${rowId}`].props.closeRow();
  };

  confirmSingle(note) {
    Alert.alert(
      "Delete Notes",
      "Are you sure you want to delete this Notes?",
      [
        { text: 'YES', onPress: () => this.deleteNotes(note) },
        { text: 'NO' }
      ]
    );
  }
  
  confirmButton() {
    Alert.alert(
      "Delete Notes",
      "Are you sure you want to delete this Notes?",
      [
        { text: 'YES', onPress: () => this.deleteAllnote() },
        { text: 'NO' }
      ]
    );
  }
  formatDate = date => {
    var date = new Date(date);
    var today = new Date();
    if (date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
      return "Today";
    }

    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(
      Math.abs((today.getTime() - date.getTime()) / oneDay)
    );

    if (diffDays < 7) {
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      return weekday[date.getDay()];
    } else {
      // if more than 6 days return format
      var dd = date.getDate();
      var mm = date.getMonth() + 1; //January is 0!
      var yy = date
        .getFullYear()
        .toString()
        .substr(-2);

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      return dd + "/" + mm + "/" + yy;
    }
  };
  render(){
    const {item,index} = this.props.notes;
    const date =this.formatDate(item,date)
    return (
      <Card style={{ width : '45%', borderRadius : 20 , padding : 10, marginLeft : 10, marginRight : 10}} key={index}>
          <View style={{ flex: 1, }} >
            <View style={{ flex: 1,alignItems : 'center', justifyContent : 'center'  }}>
                <Text numberOfLines={1}>
                  {item.notes}
                </Text>
            </View>
            <View style={{ flex: 1 ,alignItems: 'center', justifyContent : 'center', marginTop:10 }}>
                <Text style={{ color : 'grey', fontSize : 12 }}>
                  {
                    this.formatDate(item.date)
                  }
                </Text>
            </View>
          </View>
      </Card> 
      
    )
  }
    Gridchecked = () => {
      if(this.state.GridView == true){
        return(
          <FlatList 
            data={this.props.data}
            renderItem={this.item} numColumns={2}
            keyExtractor={(item, index) => index.toString()} />
        )
      }else{
        return(
        <List
          disableRightSwipe={true}
          closeOnRowBeginSwipe={true}
          rightOpenValue={-75}
          dataSource={this.ds.cloneWithRows(this.props.notes.notes)}
          renderRow={data => (
            <List>
              <ListNotes
                selectNone={this.state.selectNone}
                note={data}
                toggle={this.state.toggle}
                selectId={this.Selectid}
                style={{ marginLeft: 15 }}
              />
            </List>
        )}
        renderRightHiddenRow={(data, secId, rowId, rowMap) => (
          <Button full danger onPress={_ => {
              this.confirmSingle(data);
              this.deleteRow(secId, rowId, rowMap); }}>
            <Icon active name="trash" />
          </Button>
        )}
      />
        )
      }
    }
    render(){
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      const { navigate } = this.props.navigation
      return(   
      <Container>
        <Header
          androidStatusBarColor="orange"
          style={{ backgroundColor: "white", justifyContent: "space-between" }}
        >
          <Body style={{ left: 30 }}>
            <Title
              style={{ alignSelf: "center", fontSize: 25, color: "black" }}>
              Notes
            </Title>
          </Body>
          <Right>
            {this.props.notes.length < 1 ? (
              <TouchableOpacity hasText transparent>
                <Text style={{ color: "orange",fontSize:20 }}>Edit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity hasText transparent onPress={() => this.toggleEdit()}>
                <Text style={{ color: "orange",fontSize:20  }}>
                  {this.state.toggle ? "Cancel" : "Edit"}
                </Text>
              </TouchableOpacity>
            )}
          </Right>
        </Header>
        <Content>
        {
          this.Gridchecked()
        }
          
        </Content>

        <Footer style={{ backgroundColor: "white" }}>
          <FooterTab style={{ backgroundColor: "white" }}>
            <Left>
              <Button transparent onPress={
                () => this.Gridviews()
              }>
                <Icon
                  style={{ color: "orange", fontSize: 23 }}
                  name={(this.state.GridView == false) ? 'grid' : 'more' } 
                  />
              </Button>
            </Left>
            <Body>
              <Text style={{ color: "black",fontSize:16 }}>
                {this.props.notes.notes.length}
                {this.props.notes.length < 2 ? " Note" : " Notes"}
              </Text>
            </Body>
            <Right>
                {this.state.toggle ?
                  (
                    this.state.Selectid.length == 0 ? (
                      <TouchableOpacity style={{left:-8}} hasText transparent onPress={
                        () => {
                          this.confirmButton();
                        }
                      }>
                        <Text style={{color: "orange",fontSize:20}}>Delete All</Text>
                      </TouchableOpacity>
                    ) :
                      <TouchableOpacity style={{left:-8}} hasText transparent onPress={
                        () => {
                          this.confirmButton();
                        }
                      }>
                        <Text style={{color: "orange",fontSize:20}}>Delete</Text>
                      </TouchableOpacity>
                  ) :
                  (
                <Button transparent onPress={() => this.props.navigation.navigate("Add")}>
                    <Icon style={{ color: "orange", fontSize: 23 }} name="new-message" type="Entypo"/>
                </Button>
                  )}

                        
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home);