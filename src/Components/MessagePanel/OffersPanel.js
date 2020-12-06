import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import OffersCard from './OffersCard';

const OffersPanel = (props) => {
  const { offers } = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View>
      {offers.map(offer => {
        const { bidPrice, message, receiverId, senderId, senderName, status } = offer;
        return (
          <OffersCard
            bidPrice={bidPrice}
            message={message}
            receiverId={receiverId}
            senderId={senderId}
            senderName={senderName}
            status={status}
          />
        )
      })}
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

export default OffersPanel