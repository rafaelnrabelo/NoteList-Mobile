import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Asset } from 'expo-asset';
import * as Facebook from 'expo-facebook';
import axios from 'axios';

import api from '../../services/api';
import { dark, light } from './styles';
import LightPicture from '../../assets/Login.png';
import { FACEBOOK_ID } from '../../.env.json';

export default function Profile({ navigation }) {
  const darkTheme = useSelector((state) => state.user.darkmode);
  const logged = useSelector((state) => state.user.logged);
  const [iconName, setIconName] = useState(darkTheme ? 'sun' : 'moon');

  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  function handleThemeChange() {
    setIconName(!darkTheme ? 'sun' : 'moon');
    dispatch({ type: 'TOGGLE_THEME' });
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Main');
          }}
          style={{ marginLeft: 12 }}
        >
          <Feather name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function HandleLoggout() {
    Alert.alert('Sair', 'Tem certeza que deseja sair da sua conta?', [
      { text: 'NÃO', style: 'cancel' },
      {
        text: 'SIM',
        onPress: () => {
          dispatch({ type: 'LOGGOUT' });
        },
      },
    ]);
  }

  async function HandleDelete() {
    Alert.alert(
      'Deletar',
      'Todas suas notas em nuvem serão apagadas, tem certeza?',
      [
        { text: 'NÃO', style: 'cancel' },
        {
          text: 'SIM',
          onPress: async () => {
            await api.delete(`/users/${user.id}`);
            dispatch({ type: 'LOGGOUT' });
          },
        },
      ]
    );
  }

  async function Login() {
    try {
      await Facebook.initializeAsync(FACEBOOK_ID, 'NoteList');
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        const facebookapi = axios.create();
        const response = await facebookapi.get(
          `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`
        );
        const login = response.data;

        const photo = await facebookapi.get(
          `https://graph.facebook.com/v6.0/${login.id}/picture?redirect=0&height=200&type=large&width=200`
        );
        await Asset.fromURI(photo.data.data.url).downloadAsync();
        const { localUri } = Asset.fromURI(photo.data.data.url);

        dispatch({
          type: 'LOGIN',
          data: {
            id: login.id,
            name: login.name,
            email: login.email,
            photoUrl: localUri,
          },
        });

        const user = await api.post('/users', {
          id: login.id,
          name: login.name,
          email: login.email,
          photoUrl: photo.data.data.url,
        });

        if (!user.data.created) {
          dispatch({ type: 'SYNC_NOTES_API', data: { loggedNow: true } });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (logged) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={darkTheme ? '#121212' : '#da552f'}
        />
        <View style={darkTheme ? dark.Container : light.Container}>
          <TouchableOpacity
            onPress={handleThemeChange}
            style={{ marginTop: 15, marginLeft: '80%' }}
          >
            <Feather name={iconName} size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            style={darkTheme ? dark.ProfilePicture : light.ProfilePicture}
            source={user.photoUrl}
          />
          <Text style={darkTheme ? dark.ProfileName : light.ProfileName}>
            {user.name}
          </Text>
          <Text style={darkTheme ? dark.ProfileEmail : light.ProfileEmail}>
            {user.email}
          </Text>

          <TouchableOpacity
            style={darkTheme ? dark.DeleteButton : light.DeleteButton}
            onPress={HandleDelete}
          >
            <Feather
              name="trash"
              size={24}
              color={
                darkTheme ? dark.ButtonText.color : light.DeleteButtonText.color
              }
            />
            <Text style={darkTheme ? dark.ButtonText : light.DeleteButtonText}>
              Deletar Conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={darkTheme ? dark.LoggoutButton : light.LoggoutButton}
            onPress={HandleLoggout}
          >
            <Feather
              name="log-out"
              size={24}
              color={
                darkTheme
                  ? dark.ButtonText.color
                  : light.LoggoutButtonText.color
              }
            />
            <Text style={darkTheme ? dark.ButtonText : light.LoggoutButtonText}>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={darkTheme ? '#121212' : '#da552f'}
        />
        <View style={darkTheme ? dark.Container : light.Container}>
          <TouchableOpacity
            onPress={handleThemeChange}
            style={{ marginTop: 15, marginLeft: '80%' }}
          >
            <Feather name={iconName} size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            style={darkTheme ? dark.LoginPicture : light.LoginPicture}
            source={darkTheme ? user.photoUrl : LightPicture}
          />
          <Text style={darkTheme ? dark.LoginText : light.LoginText}>
            Faça Login para sincronizar
          </Text>
          <Text style={darkTheme ? dark.LoginText : light.LoginText}>
            seus dados na nuvem
          </Text>

          <TouchableOpacity
            style={darkTheme ? dark.LoginButton : light.LoginButton}
            onPress={Login}
          >
            <FontAwesome color="#fff" size={35} name="facebook-official" />
            <Text
              style={darkTheme ? dark.LoginButtonText : light.LoginButtonText}
            >
              Login com o Facebook
            </Text>
          </TouchableOpacity>
          <Text style={darkTheme ? dark.WarningText : light.WarningText}>
            - Não publicaremos nada no Facebook.
          </Text>
        </View>
      </>
    );
  }
}
