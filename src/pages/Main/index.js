import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import { dark, light } from './styles';

export default function Main({ navigation }) {
  const darkTheme = useSelector((state) => state.user.darkmode);

  const userPhoto = useSelector((state) => state.user.data.photoUrl);
  const userName = useSelector((state) => state.user.data.name);
  const [headerText, setHeaderText] = useState('');
  const logged = useSelector((state) => state.user.logged);

  const notes = useSelector((state) => state.notes.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (logged) {
      setHeaderText(`Olá, ${userName.substr(0, userName.indexOf(' '))}`);
      NetInfo.fetch().then((state) => {
        if (state.isInternetReachable) {
          dispatch({ type: 'SYNC_NOTES_API', data: { loggedNow: false } });
        }
      });
    } else {
      setHeaderText(userName);
    }
  }, [logged]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkTheme ? '#121212' : '#da552f'}
      />
      <View style={darkTheme ? dark.Container : light.Container}>
        <View style={darkTheme ? dark.Header : light.Header}>
          <View
            style={darkTheme ? dark.ProfileContainer : light.ProfileContainer}
          >
            <TouchableOpacity
              style={darkTheme ? dark.HeaderButton : light.HeaderButton}
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              <Image
                source={userPhoto}
                style={darkTheme ? dark.HeaderUserImage : light.HeaderUserImage}
              />
            </TouchableOpacity>
            <Text
              style={
                !logged
                  ? darkTheme
                    ? dark.HeaderText
                    : light.HeaderText
                  : darkTheme
                  ? dark.HeaderTextLogged
                  : light.HeaderTextLogged
              }
            >
              {headerText}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={darkTheme ? dark.ProfileButton : light.ProfileButton}
          >
            <Feather
              name="arrow-right"
              size={20}
              color="rgba(255, 255, 255, 0.87)"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={darkTheme ? dark.NoteContainer : light.NoteContainer}>
              <View
                style={darkTheme ? dark.TitleContainer : light.TitleContainer}
              >
                <Text style={darkTheme ? dark.Title : light.Title}>
                  {item.title}
                </Text>
                <Text style={darkTheme ? dark.Date : light.Date}>
                  {item.updated_at}
                </Text>
              </View>
              <Text
                style={
                  darkTheme
                    ? item.description == ''
                      ? [dark.Description, { display: 'none' }]
                      : dark.Description
                    : item.description == ''
                    ? [light.Description, { display: 'none' }]
                    : light.Description
                }
              >
                {item.description}
              </Text>
              <View
                style={
                  darkTheme
                    ? item.description.length > 60
                      ? [dark.ToDosContainer, { display: 'none' }]
                      : dark.ToDosContainer
                    : item.description.length > 60
                    ? [light.ToDosContainer, { display: 'none' }]
                    : light.ToDosContainer
                }
              >
                {item.toDos.map((toDo, index) => (
                  <View
                    key={index}
                    style={darkTheme ? dark.ToDoContainer : light.ToDoContainer}
                  >
                    <CheckBox
                      value={toDo.checked}
                      tintColors={
                        darkTheme
                          ? {
                              true: 'rgba(255, 255, 255, 0.87)',
                              false: 'rgba(255, 255, 255, 0.87)',
                            }
                          : {
                              true: '#da552f',
                              false: '#da552f',
                            }
                      }
                      disabled={true}
                    />
                    <Text
                      style={
                        darkTheme
                          ? !toDo.checked
                            ? dark.Label
                            : [
                                dark.Label,
                                {
                                  color: 'rgba(255, 255, 255, 0.6)',
                                  textDecorationLine: 'line-through',
                                },
                              ]
                          : !toDo.checked
                          ? light.Label
                          : [
                              light.Label,
                              {
                                color: 'rgba(0, 0, 0, 0.6)',
                                textDecorationLine: 'line-through',
                              },
                            ]
                      }
                    >
                      {toDo.label}
                    </Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Note', item);
                }}
                style={darkTheme ? dark.NoteButton : light.NoteButton}
              >
                <Text
                  style={darkTheme ? dark.NoteButtonText : light.NoteButtonText}
                >
                  Ver mais
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={darkTheme ? dark.NoteList : light.NoteList}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={darkTheme ? dark.AddButton : light.AddButton}
        >
          <Feather
            name="plus"
            size={30}
            color={
              darkTheme ? dark.AddButtonIcon.color : light.AddButtonIcon.color
            }
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
