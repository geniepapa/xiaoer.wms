
import React, { Component} from 'react';
import {
    PropTypes,
    Text,
    View
} from 'react-native';
import {
    Toolbar as MaterialToolbar,
    COLOR
} from 'react-native-material-design';

import Camera from 'react-native-camera';







export default class Toolbar extends Component {

    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }


    componentDidMount = () => {

    };

    componentWillUnmount() {
    }

    handleAppStore = (store) => {
    };

    render() {
        const { navigator } = this.context;
        const { counter } = this.state;
        const { onIconPress } = this.props;
        const theme = COLOR['paperTeal700'].color;

        return (

            <MaterialToolbar
                title= {navigator && navigator.currentRoute ? navigator.currentRoute.title : '收货任务'}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
                actions={[{
                    icon: 'info',
                    onPress: ()=>{}
                }]}
                rightIconStyle={{
                    margin: 10
                }}
            />
        );
    }
}
