import React from 'react';
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import { useProductDetail } from '@appmaker-xyz/shopify';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ProductCards(props) {
  const {
    title,
    imageUrl,
    salePrice,
    salePriceValue,
    // regularPrice,
    // regularPriceValue,
    // onSale,
    // salePercentage,
    // average_rating,
    // reviews_count,
    product,
  } = useProductDetail(props);

  function getPriceValue(price) {
    const numericValue = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    return numericValue;
  }

  //Static data replacement
  let salePercentage = 20;
  let reviews_count = 214;
  let average_rating = 4;
  let onSale = true;
  let regularPrice = salePriceValue + salePriceValue * (salePercentage / 100);

  const stars = () => {
    let starsRet = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= average_rating)
        starsRet.push(
          // <Text style={{ fontSize: 30, color: 'rgb(220,160,0)' }}>*</Text>,
          <Icon
            // style={{ color: '#FDA014' }}
            name="star"
            size={10}
            color="#FDA014"
          />,
        );
      else
        starsRet.push(
          // <Text style={{ fontSize: 30, color: 'rgb(190,190,190)' }}>*</Text>,
          <Icon name="staro" size={10} color="rgb(190,190,190)" />,
        );
    }
    // starsRet.push(
    //   <View>
    //     <Text style={styles.ratingText}>{average_rating}</Text>
    //   </View>,
    // );
    return starsRet;
  };

  // console.log('productCard logs', useProductDetail(props));

  return (
    <View style={styles.Block}>
      <View style={styles.flexDirectionRow}>
        <Text style={styles.title}>
          {title ? title.toUpperCase() : product.node.title.toUpperCase()}
        </Text>
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={styles.fullwidth}>
          <View style={styles.flexDirectionRow}>
            <View style={styles.detContainer}>
              {reviews_count !== undefined && reviews_count !== null ? (
                <View style={{ ...styles.reviewsBox, paddingLeft: 0 }}>
                  <Text style={styles.stars}>{stars()}</Text>
                  <View style={styles.reviewsBox}>
                    <Text style={styles.ratingText}>{average_rating}</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.reviewsBox}>
                  <Text style={styles.regText}>No reviews</Text>
                </View>
              )}
              {reviews_count !== undefined && reviews_count !== null ? (
                <View style={styles.reviewsBox}>
                  <Text
                    style={
                      styles.regText
                    }>{`${reviews_count} reviews(s)`}</Text>
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
          <View style={styles.priceContainer}>
            {onSale ? (
              <View style={styles.priceBoxMain}>
                <View style={{ ...styles.priceBox, paddingLeft: 0 }}>
                  <Text style={styles.boldText}>₹{salePriceValue}</Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.strikeText}>
                    ₹{regularPrice.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.colorText}>{`Save ₹${salePriceValue}${(
                    (salePercentage / 100) *
                    salePriceValue
                  ).toFixed(2)} (${salePercentage}%) off`}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.flexDirectionRow}>
                <Text style={styles.boldText}>{salePrice}</Text>
              </View>
            )}
            <View style={styles.buttonContainer}>
              <View style={{ ...styles.button, minWidth: 58 }}>
                <Text>+ Info</Text>
              </View>
              <View style={[styles.button, { minWidth: 25 }]}>
                <Text>
                  <Icon
                    // style={{ color: 'rgb(100,100,100)' }}
                    name="export"
                    size={15}
                    color="#343434"
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Block: {
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  flexDirectionRow: { flexDirection: 'row' },
  default: { padding: 5, flexDirection: 'row' },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingVertical: 4,
    fontFamily: 'Urbanist-Bold',
  },
  fullwidth: { width: '100%' },
  strikeText: {
    color: '#C2C2C2',
    fontSize: 13,
    textDecorationLine: 'line-through',
    fontFamily: 'Urbanist-Black',
  },
  priceContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  colorText: {
    color: '#427FD1',
    paddingHorizontal: 4,
    fontSize: 13,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    fontFamily: 'Urbanist-Bold',
  },
  stars: { textAlignVertical: 'center' },
  regText: {
    paddingVertical: 4,
    fontSize: 11,
    fontFamily: 'Urbanist-ExtraLight',
    // fontWeight: 'extraLight',
  },
  boldText: {
    paddingRight: 4,
    fontWeight: 'bold',
    fontSize: 15,
    textAlignVertical: 'bottom',
    fontFamily: 'Urbanist-ExtraBold',
  },
  button: {
    backgroundColor: 'rgb(240,240,240)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    marginHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 25,
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 11,
    textAlignVertical: 'center',
    color: 'rgb(100,100,100)',
    paddingLeft: 3,
    paddingRight: 7,
    fontFamily: 'NunitoSans-Regular',
  },
  reviewsBox: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 3,
  },
  detContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // height: 20,
    marginVertical: 4,
  },
  priceBoxMain: { flexDirection: 'row', width: '70%', overflow: 'hidden' },
  priceBox: {
    justifyContent: 'flex-end',
    paddingHorizontal: 2,
  },
});
