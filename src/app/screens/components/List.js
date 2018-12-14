import React, { Component } from "react";
import { View } from "react-native";
import { Body, ListItem, Text, Left,CheckBox } from 'native-base';
import { withNavigation } from 'react-navigation';

class List extends Component {
    state = {
        selected: false,
        selectNone: this.props.selectNone
    }

    // RERENDER PROPS AND SET CHECKED TO FALSE
    componentDidUpdate(prevProps) {
        if (prevProps.toggle === false) {
            if (this.state.selected === true) {
                this.setState({ selected: false })
            }
        }
    }

        formatDate = (date) => {
        var date = new Date(date);
        var today = new Date();
        if (date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
            return "Today"
        }
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = Math.round(Math.abs((today.getTime() - date.getTime()) / (oneDay)));

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
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!
            var yy = date.getFullYear().toString().substr(-2);

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return dd + '/' + mm + '/' + yy;
        }
    }

    render() {
        return (
            <ListItem key={this.props.note.id} onPress={() => {
                this.props.navigation.navigate("EditNote", {
                    id: this.props.note.id,
                    date: this.props.note.date,
                    text: this.props.note.text
                })
            }
            }>
                {this.props.toggle ?
                    <CheckBox color="orange" checked={this.state.selected}
                        onPress={
                            () => {
                                this.props.selectId(this.props.note)
                                this.setState({ selected: !this.state.selected })
                            }
                        } />
                    :
                    <View />

                }
                <Body>
                    <Text numberOfLines={1} style={{ fontSize: 18 }}>
                        {this.props.note.text.split('\n')[0]}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 0 }}>
                        <Text style={{ fontSize: 16, color: "#949494", marginVertical: 0 }}>
                            {this.formatDate(this.props.note.date)}
                        </Text>
                        <Text numberOfLines={1} style={{ flex: 1, fontSize: 16, color: "#949494", marginVertical: 0 }}>
                            {
                                this.props.note.text.split('\n')[1] == undefined ?
                                    "Blank Text" :
                                    this.props.note.text.split('\n')[1]
                            }
                        </Text>
                    </View>
                </Body>
            </ListItem>
        );
    }
}
export default withNavigation(List);