import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
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

const PageOne = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

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
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Nama Lengkap
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"],
            color: DarkColors['text-primary']
          }}
            placeholder="Masukkan nama anda..."
          />
          <Text style={{
            marginTop: 15,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Email
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"],
            color: DarkColors['text-primary']
          }}
            placeholder="Masukkan email anda..."
          />
          <Text style={{
            marginTop: 15,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Password
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"],
            color: DarkColors['text-primary']
          }}
            secureTextEntry={true}
            placeholder="Masukkan password anda..."
          />
          <Text style={{
            marginTop: 15,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Nomor Telepon
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"],
            color: DarkColors['text-primary']
          }}
            placeholder="Masukkan nomor telepon disini..."
          />
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              borderRadius: 12
            }}
            onPress={() => navigation.navigate('PageTwo')}
          >
            <Text style={{
              color: DarkColors["white"],
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingTop: 8
            }}>
              Selanjutnya
            </Text>
          </TouchableOpacity>
          <View style={{height: 200}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PageOne;