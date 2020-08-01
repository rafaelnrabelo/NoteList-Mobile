import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },

  WelcomeTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '20%',
  },

  NotesImageContainer: {
    marginTop: 100,
    width: '90%',
    height: '38%',
  },

  NotesImage: {
    flex: 1,
  },

  Title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '8%',
  },

  ButtonWelcome: {
    backgroundColor: '#da552f',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '80%',
    elevation: 5,
  },

  ButtonView: {
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: '88%',
  },

  Button: {
    backgroundColor: '#da552f',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },

  ImageContainer: {
    marginTop: 20,
    width: '100%',
    height: '58%',
  },

  ThemeImage: {
    flex: 1,
    borderRadius: 5,
  },

  SwitchContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },

  ThemeText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 20,
  },

  ThemeSwitch: {
    width: 50,
  },

  CloudContainer: {
    marginTop: 60,
    width: '100%',
    height: '30%',
  },

  Cloud: {
    flex: 1,
  },

  CloudDescription: {
    color: '#444',
    fontSize: 22,
  },

  LoginButton: {
    backgroundColor: '#4267B2',
    height: 50,
    width: 270,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  LoginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },

  LoggedPicture: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  LoggedContainer: {
    backgroundColor: '#4267B2',
    height: 60,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  LoggedName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },

  WarningText: {
    marginTop: 5,
    color: '#999',
    fontSize: 14,
  },

  DotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
  },

  Dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },

  DotSelected: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#da552f',
    elevation: 2,
  },
});
