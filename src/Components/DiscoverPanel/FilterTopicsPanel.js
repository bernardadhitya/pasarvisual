import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import TopicCard from './TopicCard';

const FilterTopicsPanel = () => {
  let [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 10
        }}
      >
        <ScrollView horizontal>
          <TopicCard topic='Foto Produk'/>
          <TopicCard topic='Video Promosi'/>
          <TopicCard topic='Desain Poster'/>
          <TopicCard topic='Desain Kemasan'/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default FilterTopicsPanel;