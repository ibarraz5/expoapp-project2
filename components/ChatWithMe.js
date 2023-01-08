import { StyleSheet, Text, TextInput, View,Button,Image } from "react-native";
import React, { useReducer, useState } from "react";
import { postMessage } from "../store/chatSlice";
import { useDispatch, useSelector } from "react-redux";
const ChatWithMe =() =>{
        const CHAT= useSelector(state=>state.CHAT);
        const [message,setMessage]=useState();
        const dispatch=useDispatch()
        const h_sendMessage=(who)=>{
            dispatch(postMessage({who:who,message:message}))
            setMessage('')
        }
    return(
        <View style={styles.body}>
            <View style={styles.chatBox}>
                <Text style={styles.messageFriend}>{CHAT.friend}</Text>
                <Text style={styles.messageMy}>{CHAT.me}</Text>
                <TextInput style={styles.textInputBox} onChangeText={setMessage}/>
                <View style={{flexDirection:'row',justifyContent:'space-between' }}>
{/*                     <PressButton
                        h_press={h_sendMessage}press_arg={'friend'} styleBox={{borderRadius:7,
                        marginHorizontal:5,backgroundColor:'#295', width:100, height:30}}
                        styleBoxPressed={{borderRadius:15, marginHorizontal:5, backgroundColor:'#dc5',
                    width:30, height:50}} styleText={{color:'#ccc',fontSize:16}} titlePressed={'m'} title={'Buddy'}
                    />
                    <PressButton
                        h_press={h_sendMessage}press_arg={'me'} styleBox={{borderRadius:7,
                        marginHorizontal:5,backgroundColor:'#295', width:100, height:30}}
                        styleBoxPressed={{borderRadius:15, marginHorizontal:5, backgroundColor:'#dc5',
                    width:30, height:50}} styleText={{color:'#ccc',fontSize:16}} titlePressed={'m'} title={'Me'}
                    /> */}
                         <Button title='Friend' onPress= {()=>h_sendMessage('friend')} color={'#fff'}/>
                        <Button title='Me' color={'#fff'} fontSize={25} onPress= {()=>h_sendMessage('me')}/>
                </View>
                    
            </View>
        </View>
    )
}

export default ChatWithMe

const styles= StyleSheet.create({
    body:{
        backgroundColor:'#000',
        width:'100%',
        alignItems:'center',
        paddingTop: '2%',
    },
    btn1:{
        borderRadius:7,
                        marginHorizontal:5,backgroundColor:'#fff', width:100, height:60, fontSize:26
    },
    button3: {
        backgroundColor: '#f39c12',
        padding: 10,
        borderRadius: 3,
        marginTop: 10,
        },
    chatBox:{
        height:'40%',width:'80%',
        marginTop:'3%',
        borderWidth:1, borderColor:'#fff',borderRadius:3, 
        justifyContent:'space-evenly',

    },
    messageMy:{
        color:'#fff',
        textAlign:'right',
        fontSize:24,
        paddingRight:4,
    },
    messageFriend:{
        color:'#fff',
        textAlign:'left',
        fontSize:24,
        paddingRight:4,
    },
    textInputBox:{
        borderWidth:1,borderColor:'#444', backgroundColor:"#fff",color:'#000',fontSize:20,
    }
})