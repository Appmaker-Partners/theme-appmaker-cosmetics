import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useProductDetail } from '@appmaker-xyz/shopify';
import '../../../../assets/fonts/Urbanist-Black.ttf';

const addToCart = (props) => {
  const { addToCart } = useProductDetail(props);

  console.log('add to cart props', useProductDetail(props));

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        addToCart({ quantity: 1 });
      }}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //   opacity
    borderWidth: 0,
    marginBottom: 10,
  },
  button: {
    width: 343,
    height: 42.95,
    backgroundColor: '#1E232C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16.95,
    fontFamily: 'Urbanist-Black',
  },
});

export default addToCart;
