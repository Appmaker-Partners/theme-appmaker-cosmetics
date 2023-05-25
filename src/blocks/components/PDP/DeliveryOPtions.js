import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useProductDetail } from '@appmaker-xyz/shopify';
import Icon from 'react-native-vector-icons/Feather';
import DeliveryBlock from '../../../../assets/svg/deliveryBlock';

const DeliveryOption = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Delivery Options"
            placeholderTextColor="#AAAAAA"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.whiteText}>CHECK</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.iconContainer}>
          {/* <View style={styles.iconBox}>
            <View style={styles.icon}>
              <Text>
                <Icon name="package" size={80} color="rgb(220,220,220)" />
              </Text>
            </View>
            <View>
              <Text style={styles.iconText} numberOfLines={1}>
                100% Original
              </Text>
            </View>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.icon}>
              <Text>
                <Icon name="package" size={80} color="rgb(220,220,220)" />
              </Text>
            </View>
            <View>
              <Text style={styles.iconText} numberOfLines={1}>
                Secure Payment
              </Text>
            </View>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.icon}>
              <Text>
                <Icon name="package" size={80} color="rgb(220,220,220)" />
              </Text>
            </View>
            <View>
              <Text style={styles.iconText} numberOfLines={1}>
                Contactless Delivery
              </Text>
            </View>
          </View> */}
          <DeliveryBlock width={353} height={98} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    width: 343,
    height: 38,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E8E8E8',
  },
  input: {
    width: 343,
    height: 38,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    right: 5,
    width: 70,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E232C',
    borderRadius: 1,
  },
  iconContainer: {
    width: 343,
    height: 98,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 5,
  },
  iconBox: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //   marginHorizontal: 15,
  },
  iconText: {
    fontSize: 10,
    color: 'rgb(190,190,190)',
  },
  bottom: {
    width: 343,
    height: 98,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: { color: 'white', fontFamily: 'Urbanist-Bold' },
});

export default DeliveryOption;
