import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { dark, light } from './styles';

export default function Register({ navigation }) {
  const darkTheme = useSelector((state) => state.user.darkmode);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [toDos, setToDos] = useState([]);
  const dispatch = useDispatch();

  async function handleSave() {
    const created_at = moment().utcOffset('-03:00').format('HH:mm:ss DD/MM/YY');
    const id = Date.now().toString();
    const params = {
      id,
      title,
      description,
      toDos,
      created_at,
      updated_at: created_at,
    };
    dispatch({ type: 'ADD_NOTE', data: params });
  }

  function handleSubmit() {
    if (title != '') {
      handleSave();
      navigation.navigate('Main');
    } else {
      ToastAndroid.show(
        'O Titulo não pode ser deixado em branco.',
        ToastAndroid.LONG
      );
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
          <TextInput
            maxLength={20}
            placeholder="Titulo"
            placeholderTextColor={
              darkTheme ? dark.PlaceholderColor.color : undefined
            }
            value={title}
            onChangeText={setTitle}
            style={darkTheme ? dark.TitleText : light.TitleText}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="Digite aqui sua anotação"
              placeholderTextColor={
                darkTheme ? dark.PlaceholderColor.color : undefined
              }
              textAlignVertical="top"
              value={description}
              multiline={true}
              onChangeText={setDescription}
              style={darkTheme ? dark.DescriptionText : light.DescriptionText}
              maxLength={500}
            />
            <TouchableOpacity
              style={darkTheme ? dark.AddToDo : light.AddToDo}
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
                  style={darkTheme ? dark.LabelInput : light.LabelInput}
                  value={toDo.label}
                  onChangeText={(text) => {
                    handleChangeLabel(text, index);
                  }}
                  placeholder="Tarefa"
                  placeholderTextColor={
                    darkTheme ? dark.PlaceholderColor.color : undefined
                  }
                  maxLength={30}
                  autoFocus={true}
                />
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            onPress={handleSubmit}
            style={darkTheme ? dark.SaveButton : light.SaveButton}
          >
            <Feather
              name="save"
              size={22}
              color={
                darkTheme
                  ? dark.SaveButtonText.color
                  : light.SaveButtonText.color
              }
            />
            <Text
              style={darkTheme ? dark.SaveButtonText : light.SaveButtonText}
            >
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
