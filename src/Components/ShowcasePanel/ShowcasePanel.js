import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import ShowcaseCard from './ShowcaseCard';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { DarkColors } from '../../Constants/Colors';

const ShowcasePanel = (props) => {
  const { handleClick, posts } = props;
  let [fontsLoaded] = useFonts(Fonts);

  const renderPosts = () => {
    if (!posts) return;
    return posts.map((post, index) => {
      const { dataImage } = post; 
      return index % 2 === 0 ?
        <TouchableOpacity onPress={() => handleClick(post)}>
          <Image
            source={{ uri: dataImage }}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </TouchableOpacity> :
        <>
          <View style={{width: 20}}></View>
          <TouchableOpacity onPress={() => handleClick(post)}>
            <Image
              source={{ uri: dataImage }}
              style={{
                marginTop: 20,
                width: 175,
                height: 220,
                borderRadius: 25,
                backgroundColor: DarkColors["sub-secondary"],
              }}
            />
          </TouchableOpacity>
        </>
    })
  }

  return fontsLoaded ? (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      }}>
        { renderPosts() }
      </View>
    </ScrollView>
  ) : <AppLoading/>;
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

export default ShowcasePanel