import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import ShowcaseCard from './ShowcaseCard';
import { TouchableOpacity } from 'react-native';

const ShowcasePanel = (props) => {
  const { handleClick } = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      }}>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <View style={{width: 20}}></View>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <View style={{width: 20}}></View>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <View style={{width: 20}}></View>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
        <View style={{width: 20}}></View>
        <TouchableOpacity onPress={() => handleClick()}>
          <ShowcaseCard/>
        </TouchableOpacity>
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