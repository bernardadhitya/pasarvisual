import React, { useContext, useState } from 'react';
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
import { AuthContext } from '../../Helper/AuthProvider';
import { Topics } from '../../Constants/Topics';
import { createDMPost } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';

const PostPage = () => {
  const { user: { role, userId } } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts(Fonts);

  const handleTopicClicked = (topic) => {
    if (!(topics.includes(topic))) {
      setTopics([...topics, topic]);
    } else {
      setTopics(topics.filter(currentTopic => currentTopic !== topic))
    }
  }

  const handlePublishClicked = async () => {
    const postData = {
      userId,
      title,
      description,
      topics,
      location: '',
      filePath: [],
      minPrice,
      maxPrice
    }
    if (role === 'creative'){
      await createDMPost(postData);
    } else if (role === 'business'){
      await createUmkmPost(postData);
    }
    setTitle('');
    setDescription('');
    setTopics([]);
    setMinPrice(0);
    setMaxPrice(0)
    navigation.navigate('HomeTab');
  }

  const renderTopicsCards = () => {
    return Topics.map(topic => {
      return (
        <TouchableOpacity onPress={() => handleTopicClicked(topic)}>
          <TopicCard
            topic={topic}
            selected={topics.includes(topic)}
          />
        </TouchableOpacity>
      )
    })
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
            { role === 'business' ? 'Job Offer' : 'Post'}
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
          <Input
            style={{
              backgroundColor: DarkColors["sub-primary"],
              borderColor: DarkColors["sub-primary"]
            }}
            value={title}
            placeholder="Insert title here..."
            onChangeText={titleValue => setTitle(titleValue)}
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
            value={description}
            placeholder="Insert description here..."
            onChangeText={descriptionValue => setDescription(descriptionValue)}
          />
          { role === 'business' ? 
          <>
            <Text style={{
              marginTop: 15,
              marginBottom: 8,
              fontFamily: 'Regular',
              fontSize: 18,
              color: DarkColors["text-secondary"]
            }}>
              Budget
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Input
              style={{
                backgroundColor: DarkColors["sub-primary"],
                borderColor: DarkColors["sub-primary"]
              }}
              value={minPrice}
              placeholder="Minimum Price..."
              onChangeText={minPriceValue => setMinPrice(minPriceValue)}
            />
            <View style={{width: 15}}></View>
            <Input
              style={{
                backgroundColor: DarkColors["sub-primary"],
                borderColor: DarkColors["sub-primary"]
              }}
              value={maxPrice}
              placeholder="Maximum Price..."
              onChangeText={maxPriceValue => setMaxPrice(maxPriceValue)}
            />
            </View>
          </>: null }
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
            { renderTopicsCards() }
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
            onPress={() => handlePublishClicked()}
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