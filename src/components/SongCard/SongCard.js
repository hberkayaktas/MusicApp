import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './SongCard.styles';

function SongCard(props) {
      return (
            <View style={styles.container}>
                  <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
                  <View style={styles.inner_container}>
                        <Text style={styles.title}>{props.song.title}</Text>
                        <View style={styles.content_container}>
                              <View style={styles.info_container}>
                                    <Text >{props.song.artist}</Text>
                                    <Text>{props.song.year}</Text>
                              </View>
                              {props.song.isSoldOut &&
                                    <View style={styles.soldout_container}>
                                          <Text style={styles.soldout_title}>Tükendi</Text>
                                    </View>
                              }
                        </View>
                        <Text style={styles.album}>{props.song.album}</Text>
                  </View>
            </View>
      )
}

export default SongCard