import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
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

const PageTwo = () => {
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
            marginBottom: 30,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            What is your role?
          </Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={{
                width: 150,
                height: 200,
                backgroundColor: DarkColors.primary,
                borderRadius: 25,
                marginRight: 25
              }}
            >
              <Text>Creative</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 150,
                height: 200,
                backgroundColor: DarkColors.primary,
                borderRadius: 25,
                marginRight: 25
              }}
            >
              <Text>Business</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              borderRadius: 12
            }}
            onPress={() => navigation.navigate('PageThree')}
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

export default PageTwo;