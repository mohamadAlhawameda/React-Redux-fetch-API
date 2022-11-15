import * as React from 'react';
import { Image,ScrollView,Text, FlatList, Button, View, StyleSheet, TextInput } from 'react-native';
import { connect} from 'react-redux';
import { getdata, add, remove } from '../redux/actions/index';

const Clients = ({ client, getdata, add, remove }) => {
    React.useEffect(() => {
        getdata()
    }, []);
    const [firstname, setFirtsname] = React.useState("")
    const [lastname, setLastName] = React.useState("")
    const [username, setUsername] = React.useState("")

    return (
        <View style={styles.contain}>
            <TextInput style={styles.input} placeholder='First nsme' onChangeText={setFirtsname} />
            <TextInput style={styles.input} placeholder='Last name' onChangeText={setLastName} />
            <TextInput style={styles.input} placeholder='User name' onChangeText={setUsername} />
            <Button color='purple' onPress={() => {
                const user = {
                    firstName: firstname,
                    lastName: lastname,
                    userName: username,
                }
                add(user)
            }} title="Add user" />
            <Button color='purple' onPress={() => {
                remove()
            }} title="Remove" />
            <ScrollView style={styles.scroll}>
            <FlatList style={styles.item} data={client} renderItem={({ item }) => (<Text style={styles.inside}> First name: {item.firstName} || Lats name: {item.lastName} || UserName: {item.userName}</Text>)} />
            </ScrollView>
            <Image style={styles.logo} source={require('../assets/customer.png')} />
        </View>

    )
}
const styles = StyleSheet.create({
    contain: {
        marginTop: 40,
        backgroundColor: '#6200EE',
        flex: 1, 
        borderWidth: 2, 
        margin: 5, 
        flexWrap: 'wrap' , 
        alignContent:"space-around",
        flexDirection:'column',

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,

    },
    item: {
        backgroundColor: '#6400EE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        flexWrap:'nowrap',
        alignContent:'center',
        borderWidth:1, 
        height:350


    },
    inside: {
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        height: 50,
        margin: 10,
        padding: 8
    },
    scroll: {
        marginHorizontal:30,
        color:'red'
    },
    logo: {
        height:128,
        width:128,
        marginLeft:250
    }
});

const mapStateToProps = state => ({
    client: state.myclients.data
});
const mapDispatchToProps = (dispatch) => ({ getdata: () => getdata(dispatch), add: (user) => dispatch(add(user)), remove: (user) => dispatch(remove(user)) });
export default connect(mapStateToProps, mapDispatchToProps)(Clients)