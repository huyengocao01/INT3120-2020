import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles'; 
import layout from '../../../constants/layout'; 
const WIDTH = layout.window.width;
const HEIGHT = layout.window.height;
console.log(HEIGHT);

const TypeOne = (props: {content?: any; lessonInfo?: any}) => {
  const { content, lessonInfo } = props; 
  const database = firebase.database(); 
  const result = database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id); 
  const [styleButtonA, setStyleButtonA] = useState({color: '#f57f17', disabled: false}); 
  const [styleButtonB, setStyleButtonB] = useState({color: '#f57f17', disabled: false}); 

  useEffect(() => {
    setStyleButtonA({color: '#f57f17', disabled: false}); 
    setStyleButtonB({color: '#f57f17', disabled: false}); 
  }, [content])

  // console.log(content);   
  // console.log(lessonInfo); 

  const contentAPress = () => {
    result.on('value', function(snapshot: any){
      if (snapshot.val().text == "a") {
        console.log('True'); 
        setStyleButtonA({color: '#43a047', disabled: true}); 
        setStyleButtonB({color: 'white', disabled: true})
      } else if (snapshot.val().text == "b"){
        console.log('False'); 
        setStyleButtonB({color: '#43a047', disabled: true}); 
        setStyleButtonA({color: '#f44336', disabled: true}); 
      }
    })
  }

  const contentBPress = () => {
    result.on('value', function(snapshot: any){
      if (snapshot.val().text == "b") {
        setStyleButtonB({color: '#43a047', disabled: true}); 
        setStyleButtonA({color: 'white', disabled: true}); 
      } else if (snapshot.val().text == "a") {
        console.log('False'); 
        setStyleButtonA({color: '#43a047', disabled: true});
        setStyleButtonB({color: '#f44336', disabled: true});  
      }
    })
  }

  return (
    <View style={{flexDirection:'row',alignItems:"center",justifyContent:'center',marginTop:HEIGHT*0.1}}>
      <Button 
        title={content.content_a}
        titleStyle={{color:'#FFF'}}
        type="clear"
        style={styles.answerA}
        onPress={contentAPress}
        disabled={styleButtonA.disabled}
        buttonStyle={
          {
            backgroundColor: styleButtonA.color,
            marginRight:50,
            width:100,
            bottom:HEIGHT*0.001
          }
        }
      />
      <Button 
        title={content.content_b}
        titleStyle={{color:'#FFF'}}
        type="clear"
        style={styles.answerB}
        onPress={contentBPress}
        disabled={styleButtonB.disabled}
        buttonStyle={
          {
            backgroundColor: styleButtonB.color,
            width:100,
            bottom:HEIGHT*0.001,
            
          }
        }
      />
    </View>
  )
}

export default TypeOne; 