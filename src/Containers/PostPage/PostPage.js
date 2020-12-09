import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, View, Image } from 'react-native';
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
import { createDMPost, uploadImage } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const PostPage = () => {
  const { user: { role, userId, name } } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [fileName, setFileName] = useState('');

  let [fontsLoaded] = useFonts(Fonts);

  const handleTopicClicked = (topic) => {
    if (!(topics.includes(topic))) {
      setTopics([...topics, topic]);
    } else {
      setTopics(topics.filter(currentTopic => currentTopic !== topic))
    }
  }

  const handlePublishClicked = async () => {
    //userId, userName, title, description, topics, skill, filePath
    const postData = {
      userId,
      userName: name,
      title,
      description,
      topics,
      location: '',
      filePath: fileName,
      minPrice,
      skill: [],
      maxPrice
    }
    if (role === 'creative'){
      const dmPostId = await createDMPost(postData);
      await uploadImage(image, 'dm-post-files/' + dmPostId + '/' + fileName);
    } else if (role === 'business'){
      const umkmPostId = await createUmkmPost(postData);
      await uploadImage(image, 'umkm-post-files/' + umkmPostId + '/' + fileName);
    }
    setTitle('');
    setDescription('');
    setTopics([]);
    setMinPrice(0);
    setMaxPrice(0);
    setImage('');
    setFileName('');
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

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled){
      const filename = pickerResult.uri.split('/').pop();
      setFileName(filename);
      setImage(pickerResult.uri);
    }
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
            Buat
          </Text>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            { role === 'business' ? 'Tawaran Pekerjaan' : 'Post'}
          </Text>
          <Text style={{
            marginTop: 30,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Judul
          </Text>
          <Input
            style={{
              backgroundColor: DarkColors["sub-tertiary"],
              borderColor: DarkColors["sub-tertiary"],
              color: DarkColors['text-secondary']
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
            Deskripsi
          </Text>
          <Input
            multiline={true}
            textStyle={{ minHeight: 100 }}
            style={{
              backgroundColor: DarkColors["sub-tertiary"],
              borderColor: DarkColors["sub-tertiary"],
              color: DarkColors['text-primary']
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
              Harga
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Input
              style={{
                backgroundColor: DarkColors["sub-tertiary"],
                borderColor: DarkColors["sub-tertiary"],
                color: DarkColors['text-primary']
              }}
              value={minPrice}
              placeholder="Minimum Price..."
              onChangeText={minPriceValue => setMinPrice(minPriceValue)}
            />
            <View style={{width: 15}}></View>
            <Input
              style={{
                backgroundColor: DarkColors["sub-tertiary"],
                borderColor: DarkColors["sub-tertiary"],
                color: DarkColors['text-primary']
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
            Topik
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
            Unggah Foto
          </Text>
          {!image ? <TouchableOpacity
            onPress={() => openImagePickerAsync()}
            style={{marginTop: 15}}
          >
            <ButtonUpload/>
          </TouchableOpacity> : <Image source={{ uri: image }} style={{height: 200, width: 150}}/>}
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
              color: DarkColors["white"],
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingBottom: 8,
              paddingTop: 8
            }}>
              + Terbitkan
            </Text>
          </TouchableOpacity>
          <View style={{height: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PostPage;