import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import ChatPanel from '../../Components/MessagePanel/ChatPanel';
import OffersPanel from '../../Components/MessagePanel/OffersPanel';
import { getProspectTransactionByReceiverId } from '../../../firebase';
import { AuthContext } from '../../Helper/AuthProvider';

const MessagePage = () => {
  const { user: { userId }} = useContext(AuthContext);
  const [selectedTabName, setSelectedTabName] = useState('chat');
  const [offers, setOffers] = useState([]);
  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedOffersByUserId = await getProspectTransactionByReceiverId(userId);
      setOffers(fetchedOffersByUserId);
    }
    fetchData();
  }, []);

  const renderTabButtons = (tabName) => {
    return tabName === selectedTabName ?
      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => setSelectedTabName(tabName)} 
          style={{
            backgroundColor: DarkColors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12
          }}
        >
          <Text style={{
            color: DarkColors['white'],
            fontFamily: 'Bold',
            fontSize: 16,
            paddingHorizontal: 8,
            paddingTop: 8, 
            textTransform: 'capitalize'
          }}>{tabName  === 'chat' ? 'Percakapan' : 'Tawaran'}</Text>
        </TouchableOpacity>
      </View>
      :
      <View style={styles.column}>
        <TouchableOpacity 
          onPress={() => setSelectedTabName(tabName)}
          style={{
            backgroundColor: DarkColors["sub-secondary"],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12
          }}
        >
          <Text style={{
            color: DarkColors.primary,
            fontFamily: 'Bold',
            fontSize: 16,
            paddingHorizontal: 8,
            paddingTop: 8, 
            textTransform: 'capitalize'
          }}>{tabName  === 'chat' ? 'Percakapan' : 'Tawaran'}</Text>
        </TouchableOpacity>
      </View>
  }

  const renderMessagePanel = () => {
    return selectedTabName === 'chat' ? <ChatPanel/> : <OffersPanel offers={offers}/>
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
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 36,
              marginBottom: 15
            }}
          >
            Percakapan
          </Text>
          <View style={styles.row}>
            {renderTabButtons('chat')}
            <View style={{width: 10}}></View>
            {renderTabButtons('offers')}
          </View>
          <View style={{height: 15}}></View>
          {renderMessagePanel()}
          <View style={{height: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  }
});

export default MessagePage;