import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { dark, light } from '../Note/styles';

function Delete(props) {
  const darkTheme = useSelector((state) => state.user.darkmode);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  async function handleDelete() {
    const { id } = props;

    dispatch({ type: 'DELETE_NOTE', data: id });
    if (logged) dispatch({ type: 'SYNC_REQUEST' });
  }

  function button() {
    Alert.alert('Deletar', 'Tem certeza que deseja deletar esse item?', [
      { text: 'NÃO', style: 'cancel' },
      {
        text: 'SIM',
        onPress: () => {
          handleDelete();
          navigation.navigate('Main');
        },
      },
    ]);
  }

  return (
    <TouchableOpacity onPress={() => button()}>
      <Feather
        name="trash"
        size={24}
        color={darkTheme ? dark.Icon.color : light.Icon.color}
      />
    </TouchableOpacity>
  );
}

export default Delete;
