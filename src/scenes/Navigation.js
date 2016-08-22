/**
 * Created by Jason on 2016-06-02.
 */

import React, { PropTypes, Component} from 'react'
import { View, Text, Image } from 'react-native';
import { Avatar, Drawer, Divider, COLOR, TYPO,Icon } from 'react-native-material-design';

export default class Navigation extends Component {


    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path,name) => {

        const { drawer, navigator } = this.context;
        this.setState({
            route: path
        });

        navigator.to(path, name);
        drawer.closeDrawer();

    }
    render(){
        const { route } = this.state;
        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../image/nav.png')}  />}>
                    <View style={styles.header} >
                        <Avatar size={80}  text="" />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}></Text>
                    </View>
                </Drawer.Header>
                <Drawer.Section
                    title="任务"
                    items={[
              {
              icon: 'directions-car',
              value:'收货任务',

              active:true,
              onPress:()=>this.changeScene('receiving'),
              onLongPress:()=>this.changeScene('receiving')
              },
              {
              icon: 'dashboard',
              value:'上架任务',
              active:route=='boarding',
              onPress:()=>this.changeScene('boarding'),
              onLongPress:()=>this.changeScene('boarding')
              },
              {
              icon: 'shopping-cart',
              value:'拣货任务',
              active:route=='Picking',
              onPress:()=>this.changeScene('picking'),
              onLongPress:()=>this.changeScene('picking')
              },
            ]}
                    />

                <Drawer.Section
                    title="数据"
                    items={[{
                    icon: 'store',
              value: '仓储',
              active: route=='Warehousing',
              onPress: () => this.changeScene('warehousing'),
              onLongPress: () => this.changeScene('warehousing')
            }]}
                />


                <Drawer.Section
                    title="设置"
                    items={[{
              icon: 'person',
              value: '用户',
              active:  route=='User',
              onPress: () => this.changeScene('user'),
              onLongPress: () => this.changeScene('user')
            }]}
                    />

            </Drawer>

        )
    }


}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    },

};
