import React, { useContext } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import { AuthContext } from '../../Helper/AuthProvider';
import { Image } from 'react-native';

const CreativePostDetail = (props) => {
  let [fontsLoaded] = useFonts(Fonts);
  const { role, handleClick, title, description, topics, image, authorName } = props;

  const renderButton = () => {
    return (
    <TouchableOpacity 
      onPress={() => handleClick()}
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
        paddingTop: 8
      }}>
        { role === 'creative' ? 'Lihat Profil' : 'Pesan'}
      </Text>
    </TouchableOpacity>
    )
  }

  return fontsLoaded ? (
    <ScrollView style={{
      paddingHorizontal: 10
    }}>
      <Text style={{
        paddingVertical: 15,
        fontFamily: 'Bold',
        fontSize: 24,
        color: DarkColors["text-primary"]
      }}>
        {title}
      </Text>
      <Image source={{ uri: image }} style={{height: 200, borderRadius: 25}}/>
      <Text style={{
        marginTop: 15,
        fontFamily: 'Regular',
        fontSize: 14,
        color: DarkColors["text-secondary"]
      }}>
        Deskripsi
      </Text>
      <Text style={{
        fontFamily: 'Regular',
        fontSize: 14,
        color: DarkColors["text-primary"],
        marginBottom: 15
      }}>
        {description}
      </Text>
      <TouchableOpacity style={{marginBottom: 15}}>
        <View style={styles.row}>
          <View styles={styles.column}>
            <View style={{
              backgroundColor: DarkColors.red,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              marginRight: 10,
              height: 40,
              width: 40
            }}>
              <Text style={{color: DarkColors["text-primary"]}}>
                {authorName ? authorName.charAt(0) : ''}
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text
              style={{
                color: DarkColors["text-primary"],
                fontFamily: 'Bold',
                fontSize: 16
              }}
            >
              {authorName}
            </Text>
            <Text
              style={{
                color: DarkColors["text-secondary"],
                fontFamily: 'Regular',
                fontSize: 14
              }}
            >
              20 April at 4:20 PM
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      { renderButton() }
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

export default CreativePostDetail