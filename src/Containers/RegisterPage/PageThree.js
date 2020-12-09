import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import { Input } from '@ui-kitten/components';
import TopicCard from '../../Components/DiscoverPanel/TopicCard';
import ButtonUpload from '../../Assets/buttons/ButtonUpload';
import { TouchableOpacity } from 'react-native';
import ButtonBack from '../../Assets/buttons/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { Topics } from '../../Constants/Topics';

const PageThree = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);
  const [topics, setTopics] = useState([]);

  const handleTopicClicked = (topic) => {
    if (!(topics.includes(topic))) {
      setTopics([...topics, topic]);
    } else {
      setTopics(topics.filter(currentTopic => currentTopic !== topic))
    }
  }

  const renderTopicsCards = () => {
    return Topics.map(topic => {
      return (
        <TouchableOpacity onPress={() => handleTopicClicked(topic)}>
          <TopicCard
            topic={topic}
            selected={topics.includes(topic)}
          />
        </TouchableOpacity>
      )
    })
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: DarkColors.background
        }}
      >
        <ScrollView style={{paddingHorizontal: 30, paddingTop: 80}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ButtonBack />
          </TouchableOpacity>
          <View style={{height: 30}}></View>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            Sebelum
          </Text>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            Kita Mulai...
          </Text>
          <Text style={{
            marginTop: 30,
            marginBottom: 30,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Pilih topik yang kamu suka
          </Text>
          <View style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            { renderTopicsCards() }
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: DarkColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 12
            }}
          >
            <Text style={{
              color: DarkColors["white"],
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingBottom: 8,
              paddingTop: 8
            }}>
              Selesai
            </Text>
          </TouchableOpacity>
          <View style={{height: 200}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
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

export default PageThree;