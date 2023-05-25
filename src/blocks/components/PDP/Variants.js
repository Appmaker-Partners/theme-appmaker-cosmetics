import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  useProductDetail,
  useProductListItem,
  useProductOptions,
  useProductVariations,
} from '@appmaker-xyz/shopify';

const Variants = (props) => {
  // const { product } = useProductDetail(props);
  const { setOptions, variant, selectedVariant, isMultiOptions } =
    useProductVariations(props);

  const {
    variationOptions,
    options,
    setOption,
    selectedOptions,
    product,
    isOptionAvilable,
    isOptionAvailable,
    variants,
  } = useProductOptions(props);

  const { imageAspectRatio } = useProductListItem(props);

  // console.log('useProductOptions', useProductOptions(props).variants.edges[0]);
  // console.log('options', imageAspectRatio);
  // console.log('This is variants', useProductDetail(props));

  // console.log('useProductOptions', selectedOptions, options.name);
  // console.log('selectedVariant inside variant.js is', selectedVariant);

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) {
      return str;
    }

    const firstLetter = str[0].toUpperCase();
    const restOfString = str.slice(1).toLowerCase();

    return firstLetter + restOfString;
  };

  const colours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    isMultiOptions && (
      <View style={styles.block}>
        {/* <View>
          {options.map((option) => {
            console.log('Option', option.name);
            if (
              option.name.toLowerCase() === 'color' ||
              option.name.toLowerCase() === 'colour'
            ) {
              return (
                <View style={styles.default}>
                  <Text style={styles.varTitle}>
                    {capitalizeFirstLetter(option.name)}
                  </Text>
                  <ScrollView horizontal={true} style={styles.scroller}>
                    {option.values.map((value) => {
                      return (
                        selectedOptions !== undefined && (
                          <TouchableOpacity
                            onPress={() => {
                              setOption(option.name, value);
                            }}>
                            <View
                              key={value}
                              style={[
                                styles.imageContainer,
                                {
                                  borderWidth:
                                    selectedOptions[option.name] === value
                                      ? 0
                                      : 0,
                                },
                              ]}
                              // style={[
                              //   selectedOptions[option.name] === value
                              //     ? styles.buttonActive
                              //     : styles.buttonInactive,
                              //   { backgroundColor: value.toLowerCase() },
                              // ]}
                            >
                              <Image
                                source={{
                                  uri: variant?.node?.image?.src,
                                }}
                                style={[
                                  styles.image,
                                  { aspectRatio: 1 / imageAspectRatio },
                                ]}
                              />
                            </View>
                          </TouchableOpacity>
                        )
                      );
                    })}
                  </ScrollView>
                </View>
              );
            } else
              return (
                <View style={styles.default}>
                  <Text style={styles.varTitle}>
                    {capitalizeFirstLetter(option.name)}
                  </Text>
                  <ScrollView horizontal={true} style={styles.scroller}>
                    {option.values.map((value) => {
                      return (
                        selectedOptions !== undefined && (
                          <TouchableOpacity
                            onPress={() => {
                              setOption(option.name, value);
                            }}>
                            <View
                              key={value}
                              style={
                                selectedOptions[option.name] === value
                                  ? styles.buttonActive
                                  : styles.buttonInactive
                              }>
                              <Text
                                style={
                                  selectedOptions[option.name] === value
                                    ? { color: 'white' }
                                    : { color: 'black' }
                                }>
                                {value.split('')[0]}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )
                      );
                    })}
                  </ScrollView>
                </View>
              );
          })}
        </View> */}
        <View>
          <View style={styles.default}>
            <Text style={styles.varTitle}>
              {capitalizeFirstLetter('Choose shade')}
            </Text>
            <ScrollView horizontal={true} style={styles.scroller}>
              {colours.map((value) => {
                return (
                  selectedOptions !== undefined && (
                    <TouchableOpacity
                      onPress={() => {
                        // setOption(option.name, value);
                      }}>
                      <View
                        key={value}
                        style={{
                          borderWidth: 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 2,
                          marginRight: 12,
                          borderRadius: 37,
                          borderColor: false ? '#000000' : '#D2D2D2',
                        }}>
                        <View
                          style={{
                            height: 37,
                            width: 37,
                            borderRadius: 37,
                            backgroundColor: 'red',
                          }}></View>
                      </View>
                    </TouchableOpacity>
                  )
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  buttonActive: {
    backgroundColor: '#1E232C',
    color: 'white',
    width: 36,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  buttonInactive: {
    backgroundColor: '#ECECF3',
    color: 'black',
    width: 36,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E4E4ED',
    borderWidth: 0.5,
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  default: { paddingVertical: 5 },
  varTitle: {
    fontSize: 17,
    paddingBottom: 10,
  },
  scroller: { flexDirection: 'row', overflow: 'visible' },
  imageContainer: {
    width: 80,
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#F0F1F7',
  },
  image: {
    // height: 150,
    width: 79,
    overflow: 'hidden',
    borderRadius: 2,
  },
});

export default Variants;
