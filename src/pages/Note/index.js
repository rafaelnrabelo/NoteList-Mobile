import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Alert,
  StatusBar,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Delete from '../components/Delete';
import { dark, light } from './styles';

export default function Note({ route, navigation }) {
  const darkTheme = useSelector((state) => state.user.darkmode);

  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [toDos, setToDos] = useState([]);

  const [toDoChange, setToDoChange] = useState(false);

  const [editing, setEditing] = useState(false);
  const [editButton, setEditButton] = useState('edit');
  const [editSize, setEditSize] = useState(24);
  const [editColor, setEditColor] = useState(
    darkTheme ? dark.Icon.color : light.Icon.color
  );

  const onBackPress = async () => {
    if (editing) {
      Alert.alert('Sair', 'Tem certeza que deseja sair sem salvar?', [
        { text: 'NÃO', style: 'cancel' },
        {
          text: 'SALVAR',
          onPress: () => {
            handleSubmit(true);
          },
        },
        {
          text: 'SIM',
          onPress: () => {
            setEditButton('edit');
            setEditColor('#333');
            setEditing((editing) => !editing);
            navigation.navigate('Main');
          },
        },
      ]);
    } else {
      if (toDoChange) {
        handleUpdate(true);
      } else {
        navigation.navigate('Main');
      }
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={onBackPress} style={{ marginLeft: 12 }}>
          <Feather
            name="arrow-left"
            size={25}
            color="rgba(255, 255, 255, 0.87)"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, editing]);

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [editing]);

  useEffect(() => {
    async function loadInfo() {
      const { title, description, toDos } = route.params;
      setTitle(title);
      setDescription(description);
      setToDos(toDos);
    }
    loadInfo();
  }, []);

  function handleUpdate(back) {
    const updated_at = moment().utcOffset('-03:00').format('HH:mm:ss DD/MM/YY');
    const { created_at } = route.params;
    const params = {
      id,
      title,
      description,
      toDos,
      created_at,
      updated_at,
    };

    dispatch({ type: 'UPDATE_NOTE', data: params });

    if (back) {
      navigation.navigate('Main');
    }
    setToDoChange(false);
  }

  function handleSubmit(back) {
    if (editing == true) {
      if (title != '') {
        handleUpdate(back);

        setEditButton('edit');
        setEditColor(darkTheme ? dark.Icon.color : light.Icon.color);
        setEditSize(24);
        setEditing((editing) => !editing);
      } else {
        ToastAndroid.show(
          'O Titulo não pode ser deixado em branco.',
          ToastAndroid.LONG
        );
      }
    } else {
      setEditButton('save');
      setEditColor('#da552f');
      setEditSize(25);
      setEditing((editing) => !editing);
    }
  }

  function handleAddToDo() {
    if (toDos.length < 20) {
      const id = Date.now().toString();
      setToDos([...toDos, { id, label: '', checked: false }]);
    } else {
      ToastAndroid.show(
        'Número máximo de tarefas atingido.',
        ToastAndroid.SHORT
      );
    }
  }

  function handleChangeLabel(text, id) {
    var array = toDos;
    array[id].label = text;
    setToDos([...array]);
  }

  function handleChangeCheck(id) {
    var array = toDos;
    array[id].checked = !array[id].checked;
    setToDoChange(true);
    setToDos([...array]);
  }

  function handleDeleteToDo(id) {
    var array = toDos.filter((todo, index) => index != id);
    setToDos([...array]);
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkTheme ? '#121212' : '#da552f'}
      />
      <View style={darkTheme ? dark.Container : light.Container}>
        <View style={darkTheme ? dark.NoteView : light.NoteView}>
          <View style={darkTheme ? dark.TitleView : light.TitleView}>
            <TextInput
              placeholder="Titulo"
              maxLength={20}
              editable={editing}
              value={title}
              onChangeText={setTitle}
              style={darkTheme ? dark.TitleText : light.TitleText}
            />
            <TouchableOpacity
              onPress={() => {
                handleSubmit(false);
              }}
              style={darkTheme ? dark.EditButton : light.EditButton}
            >
              <Feather name={editButton} size={editSize} color={editColor} />
            </TouchableOpacity>
            <Delete
              id={id}
              style={darkTheme ? dark.DeleteButton : light.DeleteButton}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder={editing ? 'Digite aqui sua anotação' : ''}
              editable={editing}
              textAlignVertical="top"
              value={description}
              multiline={true}
              onChangeText={setDescription}
              style={
                darkTheme
                  ? !editing && description == ''
                    ? [dark.DescriptionText, { display: 'none' }]
                    : dark.DescriptionText
                  : !editing && description == ''
                  ? [light.DescriptionText, { display: 'none' }]
                  : light.DescriptionText
              }
              maxLength={500}
            />
            <TouchableOpacity
              style={
                darkTheme
                  ? editing
                    ? dark.AddToDo
                    : [dark.AddToDo, { display: 'none' }]
                  : editing
                  ? light.AddToDo
                  : [light.AddToDo, { display: 'none' }]
              }
              onPress={handleAddToDo}
            >
              <Feather
                name="check-square"
                size={24}
                color={darkTheme ? dark.AddToDo.color : light.AddToDo.color}
              />
              <Feather
                name="plus"
                size={22}
                color={darkTheme ? dark.AddToDo.color : light.AddToDo.color}
              />
            </TouchableOpacity>
            {toDos.map((toDo, index) => (
              <View
                key={index}
                style={darkTheme ? dark.ToDoContainer : light.ToDoContainer}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleDeleteToDo(index);
                  }}
                  style={!editing ? { display: 'none' } : {}}
                >
                  <Feather
                    name="x"
                    size={16}
                    color={
                      darkTheme ? dark.AddToDo.color : light.LabelInput.color
                    }
                  />
                </TouchableOpacity>
                <CheckBox
                  value={toDo.checked}
                  onValueChange={() => {
                    handleChangeCheck(index);
                  }}
                  tintColors={
                    darkTheme
                      ? { true: dark.AddToDo.color, false: dark.AddToDo.color }
                      : {
                          true: light.AddToDo.color,
                          false: light.AddToDo.color,
                        }
                  }
                />
                <TextInput
                  style={
                    darkTheme
                      ? !toDo.checked
                        ? dark.LabelInput
                        : [
                            dark.LabelInput,
                            {
                              color: 'rgba(255, 255, 255, 0.6)',
                              textDecorationLine: 'line-through',
                            },
                          ]
                      : !toDo.checked
                      ? light.LabelInput
                      : [
                          light.LabelInput,
                          {
                            color: 'rgba(0, 0, 0, 0.6)',
                            textDecorationLine: 'line-through',
                          },
                        ]
                  }
                  value={toDo.label}
                  onChangeText={(text) => {
                    handleChangeLabel(text, index);
                  }}
                  placeholder={editing ? 'Tarefa' : ''}
                  maxLength={30}
                  editable={editing}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
