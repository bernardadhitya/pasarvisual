import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import ChatCard from './ChatCard';
import { TouchableOpacity } from 'react-native';

const ChatPanel = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatCard/>
      </TouchableOpacity>
    </View>
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

export default ChatPanel