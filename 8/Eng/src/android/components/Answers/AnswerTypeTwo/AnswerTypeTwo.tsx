import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image, Card } from 'react-native-elements';
import firebase from 'firebase';
import styles from './styles';
import layout from '../../../constants/layout'; 
const WIDTH = layout.window.width;
const HEIGHT = layout.window.height;

const AnswerTypeTwo = (props: { content?: any; lessonInfo?: any }) => {
  const { content, lessonInfo } = props;
  const database = firebase.database();
  const result = database.ref('/topic_detail/' +
    lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName +
    '/results/' + content.id);

  function onPress(selected: any) {
    // console.log(selected); 
    result.on('value', function (snapshot: any) {
      // console.log(snapshot); 
      if (snapshot.val().text == selected) {
        console.log("True");
        console.log(snapshot);
      } else {
        console.log("False");
      }
    })
  }

  return (
    <View style={{width:200,bottom:HEIGHT/6}}>
      <View>
        <TouchableOpacity
          style={styles.view_a}
          onPress={() => onPress('a')}
        >
          <Card containerStyle={{alignItems:'center'}}>
            <Image
              source={{ uri: content.content_a }}
              containerStyle={styles.image}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view_b}
          onPress={() => onPress('b')}
        >
          <Card>
            <Image
              source={{ uri: content.content_b }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.view_c}
          onPress={() => onPress('c')}
        >
          <Card>
            <Image
              source={{ uri: content.content_c }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view_d}
          onPress={() => onPress('d')}
        >
          <Card>
            <Image
              source={{ uri: content.content_d }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AnswerTypeTwo; 