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


const AddServicePanel = (props) => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
      <Text
        style={{
          color: DarkColors["text-primary"],
          fontFamily: 'Bold',
          fontSize: 42
        }}
      >
        Add
      </Text>
      <Text
        style={{
          color: DarkColors["text-primary"],
          fontFamily: 'Bold',
          fontSize: 42
        }}
      >
        Service
      </Text>
      <Text style={{
        marginTop: 30,
        marginBottom: 8,
        fontFamily: 'Regular',
        fontSize: 18,
        color: DarkColors["text-secondary"]
      }}>
        Title
      </Text>
      <Input style={{
        backgroundColor: DarkColors["sub-tertiary"],
        borderColor: DarkColors["sub-tertiary"],
        color: DarkColors['text-primary']
      }}
        placeholder="Insert title here..."
      />
      <Text style={{
        marginTop: 30,
        marginBottom: 8,
        fontFamily: 'Regular',
        fontSize: 18,
        color: DarkColors["text-secondary"]
      }}>
        Estimated Price
      </Text>
      <Input style={{
        backgroundColor: DarkColors["sub-tertiary"],
        borderColor: DarkColors["sub-tertiary"],
        color: DarkColors['text-primary']
      }}
        placeholder="Insert estimated price here..."
      />
      <Text style={{
        marginTop: 15,
        marginBottom: 8,
        fontFamily: 'Regular',
        fontSize: 18,
        color: DarkColors["text-secondary"]
      }}>
        Description
      </Text>
      <Input
        multiline={true}
        textStyle={{ minHeight: 100 }}
        style={{
          backgroundColor: DarkColors["sub-tertiary"],
          borderColor: DarkColors["sub-tertiary"],
          color: DarkColors['text-primary']
        }}
        placeholder="Insert description here..."
      />
      <Text style={{
        marginTop: 15,
        marginBottom: 8,
        fontFamily: 'Regular',
        fontSize: 18,
        color: DarkColors["text-secondary"]
      }}>
        Upload Media
      </Text>
      <TouchableOpacity style={{marginTop: 15}}>
        <ButtonUpload/>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{
          backgroundColor: DarkColors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          borderRadius: 12
        }}
      >
        <Text style={{
          color: DarkColors["text-primary"],
          fontFamily: 'Bold',
          fontSize: 16,
          padding: 8
        }}>
          + Publish
        </Text>
      </TouchableOpacity>
      <View style={{height: 200}}></View>
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

export default AddServicePanel