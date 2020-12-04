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
            Before
          </Text>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            We Start...
          </Text>
          <Text style={{
            marginTop: 30,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Full Name
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-primary"],
            borderColor: DarkColors["sub-primary"]
          }}
            placeholder="Insert title here..."
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
            backgroundColor: DarkColors["sub-primary"],
            borderColor: DarkColors["sub-primary"]
          }}
            placeholder="Insert email here..."
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
            backgroundColor: DarkColors["sub-primary"],
            borderColor: DarkColors["sub-primary"]
          }}
            secureTextEntry={true}
            placeholder="Insert password here..."
          />
          <Text style={{
            marginTop: 15,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Phone Number
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-primary"],
            borderColor: DarkColors["sub-primary"]
          }}
            placeholder="Insert phone number here..."
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
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 16,
              padding: 8
            }}>
              Next
            </Text>
          </TouchableOpacity>
          <View style={{height: 200}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PageOne;