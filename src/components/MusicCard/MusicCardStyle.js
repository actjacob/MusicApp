import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth, windowHeight);

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    flex: 1, //flex içinde bulunduğu yerde kaplayabildiği kadar yer kaplar
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artist: {},
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldoutText: {
    fontSize: 12,
    color: 'red',
  },
});
