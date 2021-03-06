import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import { TouchableOpacity } from 'react-native';
import ButtonBack from '../../Assets/buttons/ButtonBack';
import { Input } from '@ui-kitten/components';
import IconSend from '../../Assets/icons/IconSend';
import IconVideo from '../../Assets/icons/IconVideo';
import { useNavigation } from '@react-navigation/native';

const ChatPage = (props) => {
  const { name } = props.route.params;
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  const renderSelfChatBubble = (message) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{
          backgroundColor: DarkColors.primary,
          marginTop: 15,
          padding: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          maxWidth: 200,
        }}>
          <Text style={{textAlign: 'right', color: DarkColors.white}}>
            { message }
          </Text>
        </View>
      </View>
    )
  }

  const renderOthersChatBubble = (message) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={{
          backgroundColor: DarkColors['sub-primary'],
          marginTop: 15,
          padding: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          maxWidth: 200,
        }}>
          <Text style={{
            textAlign: 'left',
            color: DarkColors['text-secondary']
          }}>
            { message }
          </Text>
        </View>
      </View>
    )
  }

  const renderChatBubble = (sender, message) => {
    return sender === 'self' ?
      renderSelfChatBubble(message) : renderOthersChatBubble(message);
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
        <View style={{flex: 1, paddingHorizontal: 30, paddingTop: 50}}>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ButtonBack size={42}/>
            </TouchableOpacity>
            <View style={{width: 15}}></View>
            <Text style={{
              marginTop: 8,
              fontFamily: 'Semibold',
              fontSize: 21,
              color: DarkColors['text-primary']
            }}>{name}</Text>
          </View>
          <ScrollView>
            { renderChatBubble('others', 'Halo!') }
            { renderChatBubble('self', 'Hi, ada yang bisa saya bantu?') }
            { renderChatBubble('others',"Saya tertarik dengan karya anda, apakah anda tertarik mengambil tawaran saya") }
            { renderChatBubble('self', 'Akan saya lihat dulu ya') }
            { renderChatBubble('others', 'Terima kasih!') }
          </ScrollView>
          <View style={{marginBottom: 15, flexDirection: 'row'}}>
            <View style={styles.column}>
              <Input
                style={{
                  backgroundColor: DarkColors["sub-primary"],
                  borderColor: DarkColors["sub-primary"],
                  color: DarkColors['text-primary']
                }}
                placeholder={'Insert your message here...'}
              />
            </View>
            <TouchableOpacity style={{
              paddingTop: 10,
              paddingLeft: 8
            }}>
              <IconSend/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {navigation.navigate('VideoCallScreen')}}
              style={{
                paddingTop: 10,
                paddingLeft: 15
              }}
            >
              <IconVideo/>
            </TouchableOpacity>
          </View>
        </View>
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

export default ChatPage;