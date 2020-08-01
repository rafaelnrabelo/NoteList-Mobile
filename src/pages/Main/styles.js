import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#da552f',
  },

  Header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    height: 55,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
  },

  HeaderTextLogged: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 19,
    marginLeft: 10,
  },

  HeaderText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 17,
  },

  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  HeaderButton: {
    marginLeft: 10,
  },

  HeaderUserImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  ProfileButton: {
    marginRight: 10,
    backgroundColor: '#da552f',
    borderRadius: 13,
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NoteList: {
    flex: 1,
    paddingVertical: 10,
  },

  NoteContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  Title: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
    maxHeight: 25,
    maxWidth: 210,
    overflow: 'hidden',
  },

  Date: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
  },

  Description: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: 24,
    maxHeight: 100,
    maxWidth: 700,
    overflow: 'hidden',
    marginTop: 2,
  },

  NoteButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  NoteButtonText: {
    fontWeight: 'bold',
    color: '#da552f',
    fontSize: 16,
  },

  AddButton: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '91%',
    left: '82%',
    elevation: 10,
  },

  AddButtonIcon: {
    color: '#da552f',
  },

  ToDosContainer: {
    maxHeight: 90,
    overflow: 'hidden',
  },

  ToDoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Label: {
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: 150,
    maxWidth: '88%',
    fontSize: 16,
  },
});

export const dark = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  Header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    height: 55,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3d3d3d',
    elevation: 10,
  },

  HeaderTextLogged: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 19,
    marginLeft: 10,
  },

  HeaderText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 17,
  },

  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  HeaderButton: {
    marginLeft: 10,
  },

  HeaderUserImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  ProfileButton: {
    marginRight: 10,
    backgroundColor: '#da552f',
    borderRadius: 13,
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NoteList: {
    flex: 1,
    paddingVertical: 10,
  },

  NoteContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },

  Title: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.87)',
    fontWeight: 'bold',
    maxHeight: 25,
    maxWidth: 210,
    overflow: 'hidden',
  },

  Date: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },

  Description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 24,
    maxHeight: 100,
    maxWidth: 700,
    overflow: 'hidden',
  },

  NoteButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.87)',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  NoteButtonText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 16,
  },

  AddButton: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: '#da552f',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '91%',
    left: '82%',
    elevation: 10,
  },

  AddButtonIcon: {
    color: 'rgba(255, 255, 255, 0.87)',
  },

  ToDosContainer: {
    maxHeight: 90,
    overflow: 'hidden',
  },

  ToDoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Label: {
    color: 'rgba(255, 255, 255, 0.87)',
    minWidth: 150,
    maxWidth: '80%',
    fontSize: 16,
  },
});
