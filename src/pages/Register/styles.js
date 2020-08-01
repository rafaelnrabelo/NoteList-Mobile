import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#da552f',
  },

  NoteView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 80,
    marginBottom: 30,
    height: 'auto',
    maxHeight: 710,
  },

  TitleText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 10,
  },

  DescriptionText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
    overflow: 'hidden',
    maxHeight: 600,
    minHeight: 50,
    marginBottom: 5,
  },

  SaveButton: {
    width: 100,
    height: 35,
    marginLeft: 'auto',
    marginRight: 5,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  SaveButtonText: {
    fontWeight: 'bold',
    color: '#da552f',
    fontSize: 20,
    marginLeft: 2,
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
  },
});

export const dark = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  NoteView: {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 80,
    maxHeight: '88%',
  },
  TitleText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'rgba(255, 255, 255, 0.87)',
    marginBottom: 10,
  },
  SaveButton: {
    width: 100,
    height: 35,
    marginLeft: 'auto',
    marginRight: 5,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  SaveButtonText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    marginLeft: 2,
  },
  DescriptionText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    overflow: 'hidden',
    maxHeight: 600,
    minHeight: 50,
    marginBottom: 5,
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
  },
});
