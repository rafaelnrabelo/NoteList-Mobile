import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#da552f',
    alignItems: 'center',
  },

  LoginPicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 100,
    marginBottom: 30,
  },

  LoginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },

  LoginButton: {
    marginTop: 100,
    backgroundColor: '#4267B2',
    height: 50,
    width: 270,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  LoginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },

  WarningText: {
    marginTop: 5,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },

  ProfileName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 25,
  },

  ProfileEmail: {
    color: '#eee',
    fontSize: 20,
    marginBottom: '60%',
  },

  ProfilePicture: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginTop: 70,
  },

  DeleteButton: {
    backgroundColor: '#fff',
    width: 200,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 2,
  },

  LoggoutButton: {
    backgroundColor: '#222',
    width: 130,
    height: 46,
    marginTop: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 2,
  },

  DeleteButtonText: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },

  LoggoutButtonText: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export const dark = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },

  LoginPicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 100,
    marginBottom: 30,
  },

  LoginText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontWeight: 'bold',
    fontSize: 23,
  },

  LoginButton: {
    marginTop: 100,
    backgroundColor: '#4267B2',
    height: 50,
    width: 270,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  LoginButtonText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },

  WarningText: {
    marginTop: 5,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },

  ProfileName: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 25,
  },

  ProfileEmail: {
    color: '#rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    marginBottom: '60%',
  },

  ProfilePicture: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginTop: 70,
  },

  DeleteButton: {
    backgroundColor: '#ff4a4a',
    width: 200,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  LoggoutButton: {
    backgroundColor: '#4a9bff',
    width: 130,
    height: 46,
    marginTop: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  ButtonText: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
  },
});
