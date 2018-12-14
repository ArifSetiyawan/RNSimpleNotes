// import React, { Component } from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';

// export default class Grid extends Component {
//   renderItem({ item, index }) {
//     return (
//       <CardItem style={{ flexGrow: 1, flexDirection: "column", borderColor: "#98999b", borderWidth: 1, borderRadius: 5 }}>
//           <Text numberOfLines={1} style={{ flex: 1 }}>
//               {this.props.notes[index].text.split('\n')[0]}
//           </Text>
//           <Text note style={{ flex: 1 }} numberOfLines={1}>
//               {
//                   this.props.notes[index].text.split('\n')[1] === undefined ?
//                       "No additional text" :
//                       this.props.notes[index].text.split('\n')[1]
//               }
//           </Text>
//           <Text note numberOfLines={1} style={{ flex: 1 }}>
//               {this.formatDate(this.props.notes[index].date)}
//           </Text>
//       </CardItem>
//         )
//      }

//      GridViews(){
    
//         this.setState({
//           gridNote : (this.state.gridNote == false) ? true : false
//         })   
       
//       }

// //     <View style={{
// //     flex: 1,
// //     margin: 5,
// //     minWidth: 170,
// //     maxWidth: 223,
// //     height: 304,
// //     maxHeight:304,
// //     backgroundColor: '#CCC',
// //     }}/>
    
// // }
//     GridChecked = () => {
//     if(this.state.gridNote == true){
//     return (
//     <FlatList keyExtractor={(item, index) => index.toString()}
//     contentContainerStyle={styles.list}
//     data={this.props.notes}
//     renderItem={this.renderItem}
//     />
//     )
//     }else{
//     return (
//         <List
//             disableRightSwipe={true}
//             closeOnRowBeginSwipe={true}
//             rightOpenValue={-75}
//             dataSource={this.ds.cloneWithRows(this.props.notes.notes)}
//             renderRow={data => (
//               <List>
//                 <ListNotes
//                   selectNone={this.state.selectNone}
//                   note={data}
//                   toggle={this.state.toggle}
//                   selectId={this.Selectid}
//                   style={{ marginLeft: 15 }}
//                 />
//               </List>
//             )}
//             renderRightHiddenRow={(data, secId, rowId, rowMap) => (
//               <Button full danger onPress={_ => {
//                   this.confirmSingle(data);
//                   this.deleteRow(secId, rowId, rowMap); }}>
//                 <Icon active name="trash" />
//               </Button>
//             )}
//           />
//      )
//     }
//   }

// const styles = StyleSheet.create({
//   list: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   }
// });
