/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Navigator,
} from 'react-native';

import {
    Button,
    Card,
    Drawer
} from 'react-native-material-design';




import { createStore  } from 'redux'
import { Provider } from 'react-redux'
import  store  from './src/stores'

import Navigate from './src/utils/Navigate';
import Toolbar from './src/components/Toolbar';
import Navigation from './src/scenes/Navigation';

class wms extends Component {

    static childContextTypes = {
        drawer: React.PropTypes.object,
        navigator: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
          drawer:null,
          navigator: null
        }
    }

    getChildContext = () => {
        return {
            drawer: this.state.drawer,
            navigator: this.state.navigator
        }
    };


    setNavigator = (navigator)=>{

        this.setState({
            navigator: new Navigate(navigator)
        });
    }

    setDrawer = (drawer)=>{
        this.setState({drawer});
    }

    render() {

        const { drawer, navigator } = this.state;
        var navigationView =  React.createElement(Navigation);


        return (

          <Provider store={store}>
          <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() =>{
                if (drawer && navigator) {
                        return navigationView;
                }
                return null;}
              }
              ref = {(drawer)=>{!this.state.drawer ? this.setDrawer(drawer) : null}}>
              {drawer&&
              <Navigator
                  initialRoute={Navigate.getInitialRoute()}
                  navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
                  ref = {(navigator)=>{!this.state.navigator ? this.setNavigator(navigator) : null}}
                  renderScene={
                  (route)=> {
                  if(this.state.navigator&&route.component)
                  {
                      return (
                          <View style={styles.scene}>
                              <route.component title={route.title} path={route.path} />
                          </View>
                      )
                  }
                  }}
              />
              }
          </DrawerLayoutAndroid>
          </Provider>
        );
    }
}

const styles = {
    scene: {
        flex: 1,
        marginTop: 56
    }
};

AppRegistry.registerComponent('wms', () => wms);
