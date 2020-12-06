import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import ChatCard from './ChatCard';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatPanel = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', {name: 'Ashley Stewart'})}>
        <ChatCard name='Ashley Stewart' lastMessage='Halo!'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', {name: 'Vickie Thomas'})}>
        <ChatCard name='Vickie Thomas' lastMessage='Saya tertarik dengan...'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', {name: 'Gilbert Patterson'})}>
        <ChatCard name='Gilbert Patterson' lastMessage='Terima kasih!'/>
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