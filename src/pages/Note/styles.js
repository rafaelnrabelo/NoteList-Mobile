import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#da552f',
    paddingBottom: 10,
  },

  NoteView: {
    padding: 20,
    maxHeight: '88%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 80,
  },

  TitleText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    width: 260,
    padding: 0,
  },

  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  DeleteButton: {
    width: 30,
    marginRight: 0,
  },

  Icon: {
    color: 'rgba(0, 0, 0, 0.87)',
  },

  EditButton: {
    width: 30,
    marginLeft: 'auto',
    marginRight: 5,
  },

  DescriptionText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
    minHeight: 40,
  },

  AddToDo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 45,
    justifyContent: 'space-between',
    marginBottom: 5,
    color: '#da552f',
  },

  ToDoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  LabelInput: {
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: 150,
    maxWidth: '88%',
    fontSize: 18,
    padding: 4,
  },
});

export const dark = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingBottom: 10,
  },

  NoteView: {
    padding: 20,
    maxHeight: '88%',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 80,
  },

  TitleText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'rgba(255, 255, 255, 0.87)',
    width: 260,
    padding: 0,
  },

  PlaceholderColor: {
    color: 'rgba(255, 255, 255, 0.5)',
  },

  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  DeleteButton: {
    width: 30,
    marginRight: 0,
  },

  Icon: {
    color: 'rgba(255, 255, 255, 0.87)',
  },

  EditButton: {
    width: 30,
    marginLeft: 'auto',
    marginRight: 5,
  },

  DescriptionText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    minHeight: 40,
  },

  AddToDo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 45,
    justifyContent: 'space-between',
    marginBottom: 5,
    color: 'rgba(255, 255, 255, 0.87)',
  },

  ToDoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  LabelInput: {
    color: 'rgba(255, 255, 255, 0.87)',
    minWidth: 150,
    maxWidth: '88%',
    fontSize: 18,
    padding: 4,
  },
});
