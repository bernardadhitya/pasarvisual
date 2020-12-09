import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native';
import { DarkColors } from '../../Constants/Colors';

const TopicCard = (props) => {
  const { topic, selected } = props;
  let [fontsLoaded] = useFonts(Fonts);

  const renderTopicCard = () => {
    return !selected ? <View style={{
      backgroundColor: DarkColors["sub-primary"],
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      marginBottom: 10,
      marginRight: 10
    }}>
      <Text style={{
        fontFamily: 'Semibold',
        color: DarkColors["text-secondary"]
      }}>
        { topic }
      </Text>
    </View> : <View style={{
      backgroundColor: DarkColors["primary"],
      paddingHorizontal: 10,
      paddingBottom: 10,
      paddingTop: 10,
      borderRadius: 10,
      marginBottom: 10,
      marginRight: 10
    }}>
      <Text style={{
        fontFamily: 'Semibold',
        color: DarkColors["white"]
      }}>
        { topic }
      </Text>
    </View>
  }


  return fontsLoaded ? renderTopicCard() : <AppLoading/>;
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default TopicCard