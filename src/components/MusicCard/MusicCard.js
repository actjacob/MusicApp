import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './MusicCardStyle';

const MusicCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: song.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{song.title}</Text>

        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.artist}>{song.artist} </Text>
            <Text style={styles.year}>{song.year} </Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soldoutContainer}>
              <Text style={styles.soldoutText}>TÜKENDİ </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MusicCard;
