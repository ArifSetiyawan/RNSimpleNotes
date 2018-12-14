import {
  createStackNavigator,
} from 'react-navigation';

import Home from '../../app/screens/HomeNotes';
import Edit from '../../app/screens/EditNotes';
import Add from '../../app/screens/AddNotes';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
    header:null
    }
  },
  Edit: {
    screen: Edit,
    navigationOptions: {
    header:null
    }
  },
  Add: {
    screen: Add,
      navigationOptions: {
       title: "Notes",
       headerTitleStyle: {
        fontSize:25,
      }
     }    
  }
});

export default RootNavigator;