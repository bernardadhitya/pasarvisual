import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import IconCallOff from '../../Assets/icons/IconCallOff';
import { useNavigation } from '@react-navigation/native';

const VideoCallPage = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <View style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}>
              <TouchableOpacity
                onPress={() => {navigation.goBack()}}>
                <View style={{
                  backgroundColor: DarkColors.red,
                  padding: 25,
                  borderRadius: 50,
                  margin: 20
                }}>
                  <IconCallOff/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </SafeAreaView>
    )
  }
}

export default VideoCallPage;