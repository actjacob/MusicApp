import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBarStyles';

const SearchBar = props => {
  //   const onSearch = text => console.log(text);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChangeText={props.onSearch}
        //kullanıcı yazı yazdıkçta tetiklenen değeri alır
      />
    </View>
  );
};

export default SearchBar;
