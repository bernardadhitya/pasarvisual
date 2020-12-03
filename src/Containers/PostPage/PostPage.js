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

const PostPage = () => {
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
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            Create
          </Text>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            Post
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
            Description
          </Text>
          <Input
            multiline={true}
            textStyle={{ minHeight: 100 }}
            style={{
              backgroundColor: DarkColors["sub-primary"],
              borderColor: DarkColors["sub-primary"]
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
            Topics
          </Text>
          <View style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            <TopicCard topic='Foto Produk'/>
            <TopicCard topic='Video Promosi'/>
            <TopicCard topic='Desain Poster'/>
            <TopicCard topic='Desain Kemasan'/>
          </View>
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
          <View style={{height: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PostPage;