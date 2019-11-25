import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import {
  IndicatorViewPager,
  PagerDotIndicator,
} from 'rn-viewpager';

class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          
          <View style={{ flex: 1, marginTop: 30 }}>
        <IndicatorViewPager
          style={{ height: 200 }}
          indicator={this._renderDotIndicator()}>
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
            </IndicatorViewPager>
          </View>
        </View>  
    );  
  }  
      _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
}  

class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  

class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  

class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({  
    container: {  
        flex: 0.5,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{   
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                    </View>),   
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{    
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },
         Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),   
            }  
        },    
    },  
    
    {  
      activeColor: '#1098D8',  
      barStyle: { backgroundColor: '#040814' },  
    },  
);  

export default createAppContainer(TabNavigator);  