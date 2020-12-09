import React, { useRef, useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import CreativePostDetail from '../../Components/PostPanel/CreativePostDetail';
import { Input } from '@ui-kitten/components';
import FilterTopicsPanel from '../../Components/DiscoverPanel/FilterTopicsPanel';
import ShowcasePanel from '../../Components/ShowcasePanel/ShowcasePanel';
import { Topics } from '../../Constants/Topics';
import TopicCard from '../../Components/DiscoverPanel/TopicCard';
import { TouchableOpacity } from 'react-native';
import { getAllDMPost, searchDmPostByTopics } from '../../../firebase';

const DiscoverPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  let [fontsLoaded] = useFonts(Fonts);
  const [selectedPost, setSelectedPost] = useState(null);

  const viewProfile = () => {
    sheetRef.current.snapTo(2);
    navigation.navigate('OtherProfileScreen', {
      userId: selectedPost.userId,
      userName: selectedPost.userName
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      let fetchedPosts;
      if (selectedTopics.length === 0){
        fetchedPosts = await getAllDMPost();
      } else {
        fetchedPosts = await searchDmPostByTopics(selectedTopics);
      }
      setPosts(fetchedPosts);
    }
    fetchData();
  }, [selectedTopics]);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    if (!selectedPost) return;
    const { dataImage, dataPost } = selectedPost;
    const { title, topics, desc, userName } = dataPost;
    return (
      <View
        style={{
          backgroundColor: DarkColors["background"],
          padding: 16,
          height: 500
        }}
      >
        <CreativePostDetail
          role='creative'
          handleClick={() => {viewProfile}}
          title={title}
          description={desc}
          topics={topics}
          authorName={userName}
          image={dataImage}
        />
      </View>
    )
  };

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })

    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
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
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          callbackNode={fall}
          snapPoints={[500, 400, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 36,
              marginBottom: 15
            }}
          >
            Pencarian
          </Text>
          <ScrollView horizontal>
            {Topics.map(topic => {
              return(
                <TouchableOpacity
                  onPress={() => {
                    if (!selectedTopics.includes(topic)){
                      setSelectedTopics([...selectedTopics, topic])
                    } else {
                      setSelectedTopics(selectedTopics.filter(selected => selected !== topic))
                    }
                  }}
                >
                  <TopicCard topic={topic} selected={selectedTopics.includes(topic)}/>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <ShowcasePanel
            posts={posts}
            handleClick={(post) => {
              setSelectedPost(post);
              sheetRef.current.snapTo(1)
            }}
          />
          <View style={{height: 100}}></View>
        </ScrollView>
        {renderShadow()}
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
    flexDirection: 'column',
  },
  row: {
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

export default DiscoverPage;