import { StyleSheet, Dimensions } from 'react-native';
import { DefaultTheme } from 'react-native-paper';


export const commonStlye = StyleSheet.create({
  defalutView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 40,
  },
  singleView: {
    margin: 5,
  },
  multiView: {
    margin: 5,
    flexDirection: 'row',
  },
});

export const loaderStlye = StyleSheet.create({
  indicator: {
    position: 'absolute',
    zIndex: 2,
    opacity: 0.3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export const drawerStyles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: 15,
    justifyContent: 'center',
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export const loginStlye = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width * 80 / 100,
    height: Dimensions.get('window').width * 80 / 100,
  },
  input: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center'
  }
});

export const wrkPlcMngStyle = StyleSheet.create({
  listContainer: {
    height: '100%',
  },
  adrContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  aplyContainer: {
    width: 320,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  adrPostcode: {
    width: 320,
    height: 500,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: Dimensions.get('window').width,
  },
  listItem: {
    backgroundColor: 'white',
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});

export const CommuteMngStyle = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  mapViewContainer: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
  },
  commuteLBtn: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DefaultTheme.colors.surface,
    width: (Dimensions.get('window').width - 50) / 2,
    height: (Dimensions.get('window').width - 50) / 2
  },
  commuteRBtn: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DefaultTheme.colors.surface,
    width: (Dimensions.get('window').width - 50) / 2,
    height: (Dimensions.get('window').width - 50) / 2
  },
  initBtn: {
    top: '0%',
    left: '85%',
  }
});