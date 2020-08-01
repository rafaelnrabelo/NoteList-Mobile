import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Asset } from 'expo-asset';
import * as Facebook from 'expo-facebook';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import styles from './styles';
import themeImage from '../../assets/Theme.png';
import cloudImage from '../../assets/syncNotes.png';
import NotesImage from '../../assets/NoteMobile.png';
import { FACEBOOK_ID } from '../../.env.json';

export default function Welcome() {
  const [page, setPage] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const logged = useSelector((state) => state.user.logged);
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  const Page1 = useRef();
  const Page2 = useRef();
  const Page3 = useRef();
  const GroupPage = useRef();

  const Dot2 = useRef();
  const Dot3 = useRef();

  async function handleNext() {
    if (page == 1) await Page1.current.fadeOutLeft(80);

    if (page == 2) Dot2.current.slideOutRight(1450);
    if (page == 2) await Page2.current.fadeOutLeft(80);
    setPage(page + 1);

    if (page == 2) Dot2.current.fadeIn(300);
    if (page == 2) await Page3.current.fadeInRight(80);
  }
  async function handleBack() {
    if (page == 2) await GroupPage.current.fadeOutRight(80);

    if (page == 3) Dot3.current.slideOutLeft(1450);
    if (page == 3) await Page3.current.fadeOutRight(80);

    setPage(page - 1);
    if (page == 2) await Page1.current.fadeInLeft(80);

    if (page == 3) Dot3.current.fadeIn(300);
    if (page == 3) await Page2.current.fadeInLeft(80);
  }

  function handleThemeChange() {
    setDarkTheme(!darkTheme);
    dispatch({ type: 'TOGGLE_THEME' });
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

  async function handleDone() {
    GroupPage.current.fadeOutLeft(80);
    dispatch({ type: 'INICIAL_DONE' });
  }

  const AnimatedSwitch = Animatable.createAnimatableComponent(Switch);
  const AnimatedTouchableOpacity = Animatable.createAnimatableComponent(
    TouchableOpacity
  );

  if (page === 1) {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Animatable.View
          style={styles.Container}
          useNativeDriver
          animation="fadeIn"
          duration={80}
          ref={Page1}
        >
          <View style={{ alignItems: 'center', flex: 1 }} useNativeDriver>
            <Text style={styles.WelcomeTitle}>Bem-Vindo(a)</Text>
            <View style={styles.NotesImageContainer}>
              <Image
                resizeMode="contain"
                resizeMethod="auto"
                source={NotesImage}
                style={styles.NotesImage}
              />
            </View>
            <AnimatedTouchableOpacity
              onPress={handleNext}
              style={styles.ButtonWelcome}
              useNativeDriver
              animation="fadeIn"
              duration={80}
            >
              <Feather name="chevron-right" size={50} color="#fff" />
            </AnimatedTouchableOpacity>
          </View>
        </Animatable.View>
      </>
    );
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Animatable.View
          style={styles.Container}
          useNativeDriver
          animation="fadeInRight"
          duration={250}
          ref={GroupPage}
        >
          {page == 2 ? (
            <Animatable.View
              style={{ alignItems: 'center', flex: 1 }}
              useNativeDriver
              ref={Page2}
            >
              <Text style={styles.Title}>Tema</Text>
              <View style={styles.ImageContainer}>
                <Image
                  resizeMode="contain"
                  resizeMethod="auto"
                  source={themeImage}
                  style={styles.ThemeImage}
                />
              </View>
              <View style={styles.SwitchContainer}>
                <Text style={styles.ThemeText}>Light</Text>
                <AnimatedSwitch
                  value={true}
                  thumbColor="#da552f"
                  trackColor={{ false: '#ddd', true: '#333' }}
                  style={styles.ThemeSwitch}
                  value={darkTheme}
                  onChange={handleThemeChange}
                  useNativeDriver
                  animation="fadeIn"
                  duration={250}
                />
                <Text style={styles.ThemeText}>Dark</Text>
              </View>
              <Text style={{ color: '#999', marginTop: 10 }}>
                Você pode mudar isso depois na tela de usuário.
              </Text>
            </Animatable.View>
          ) : (
            <Animatable.View
              style={{ alignItems: 'center', flex: 1 }}
              useNativeDriver
              ref={Page3}
            >
              <Text style={styles.Title}>Sincronização</Text>
              <View style={styles.CloudContainer}>
                <Image
                  resizeMode="contain"
                  resizeMethod="auto"
                  source={cloudImage}
                  style={styles.Cloud}
                />
              </View>
              <Text style={[styles.CloudDescription, { marginTop: 30 }]}>
                Faça <Text style={{ fontWeight: 'bold' }}>Login</Text> para
                sincronizar
              </Text>
              <Text style={styles.CloudDescription}>
                suas anotaçoes na nuvem
              </Text>
              <Text style={styles.CloudDescription}>
                e não perca <Text style={{ fontWeight: 'bold' }}>nada</Text>.
              </Text>
              {!logged ? (
                <>
                  <TouchableOpacity onPress={Login} style={styles.LoginButton}>
                    <FontAwesome
                      color="#fff"
                      size={35}
                      name="facebook-official"
                    />
                    <Text style={styles.LoginButtonText}>
                      Login com o Facebook
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.WarningText}>
                    - Não publicaremos nada no Facebook.
                  </Text>
                </>
              ) : (
                <View style={styles.LoggedContainer}>
                  <Image style={styles.LoggedPicture} source={user.photoUrl} />
                  <Text style={styles.LoggedName}>{user.name}</Text>
                </View>
              )}
            </Animatable.View>
          )}
          <View style={styles.ButtonView}>
            <TouchableOpacity onPress={handleBack} style={styles.Button}>
              <Feather name="chevron-left" size={40} color="#fff" />
            </TouchableOpacity>

            <View style={styles.DotContainer}>
              <Animatable.View
                style={styles.Dot}
                useNativeDriver
                animation="fadeIn"
                duration={250}
              />
              <Animatable.View
                style={page == 2 ? styles.DotSelected : styles.Dot}
                useNativeDriver
                animation="fadeIn"
                duration={250}
                ref={Dot2}
              />
              <Animatable.View
                style={page == 3 ? styles.DotSelected : styles.Dot}
                useNativeDriver
                animation="fadeIn"
                duration={250}
                ref={Dot3}
              />
            </View>

            {page == 3 ? (
              <TouchableOpacity onPress={handleDone} style={styles.Button}>
                <Feather name="check" size={40} color="#fff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleNext} style={styles.Button}>
                <Feather name="chevron-right" size={40} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </Animatable.View>
      </>
    );
  }
}
