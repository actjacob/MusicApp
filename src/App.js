import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import music_data from './music-data.json';
import MusicCard from './components/MusicCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [list, setList] = useState(music_data);
  const renderData = ({item}) => <MusicCard song={item} />;

  const renderSeparator = <View style={styles.separator}></View>;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  }; //PROPERTY OLARAK SEARCHBARA GÖNDERİYORUZ

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderData}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
