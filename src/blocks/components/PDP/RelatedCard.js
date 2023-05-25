import React from 'react';
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import { useProductListItem } from '@appmaker-xyz/shopify';
import Icon from 'react-native-vector-icons/Feather';
import Star from '../../../../assets/svg/Vectorstar';
const RelatedCard = (props) => {
  const {
    title,
    product,
    hasTag,
    tags,
    thumbnail_meta,
    count,
    addToCart,
    onAddToCart,
    onQuantityChange,
    firstAvailableVariant,
    salePrice,
    salePriceValue,
    regularPriceValue,
    imageAspectRatio,
    // salePercentage,
    // regularPrice,
    //  onSale,
    // average_rating,
    // reviews_count,
    // hasReviews,
  } = useProductListItem(props);
  const { attributes, onPress, onAction } = props;
  const { appmakerAction } = attributes;

  let hasReviews = true;
  let average_rating = 3.4;
  let reviews_count = 3324;
  let salePercentage = 20;
  let onSale = true;
  let regularPrice = salePriceValue + (salePriceValue * salePercentage) / 100;

  let onPressHandle = onPress;
  if (appmakerAction && onAction) {
    onPressHandle = () => onAction(appmakerAction);
  }

  // console.log('this is prodGrid props', useProductListItem(props));

  return (
    <Pressable style={{ ...styles.block, marginHorizontal: 5 }}>
      <View style={styles.card}>
        <Pressable onPress={onPressHandle}>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: thumbnail_meta?.src,
              }}
              style={[styles.prodImg, { aspectRatio: 1 / imageAspectRatio }]}
              altText={thumbnail_meta?.altText}
            />
          </View>
        </Pressable>
        <View style={styles.reviewBox}>
          <View style={styles.reviewContainer}>
            {hasReviews && (
              <View style={styles.reviewBox2}>
                {onSale && (
                  <View style={styles.tagContainer}>
                    <Text
                      style={styles.tagText}>{`${salePercentage}% OFF`}</Text>
                  </View>
                )}
                <View style={styles.reviewBoxStars}>
                  <View style={styles.rightPadding}>
                    <Text style={styles.reviewText}>{average_rating}</Text>
                  </View>
                  <Text>
                    <Star width={9.97} height={8.98} />
                  </Text>
                </View>
                <View style={styles.reviewBoxCount}>
                  <Text style={styles.reviewCount}>
                    {`(${reviews_count} reviews)`}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>

          <View style={styles.priceContainer}>
            {onSale ? (
              <View style={styles.priceTextbox}>
                <View>
                  <Text style={styles.priceText}>{salePrice}</Text>
                </View>
                <View>
                  <Text style={styles.strikedText}>
                    {regularPrice.toFixed(2)}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.priceTextbox}>
                <Text style={styles.priceText}>{salePrice}20</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {count === 0 ? (
            <View
              style={{
                ...styles.button,
                justifyContent: 'center',
                backgroundColor: '#1E232C',
              }}>
              <Pressable
                onPress={() => {
                  // addToCart();
                  onAddToCart();
                  console.log('Adding');
                }}>
                <Text style={styles.buttonText}>ADD TO CART</Text>
              </Pressable>
            </View>
          ) : (
            <View
              style={{
                ...styles.button,
                justifyContent: 'space-between',
              }}>
              <Pressable
                onPress={() => {
                  onQuantityChange(-1, firstAvailableVariant);
                }}>
                <Text style={styles.buttonAltText}>-</Text>
              </Pressable>
              <Text style={styles.buttonAltText}>{count}</Text>
              <Pressable
                onPress={() => {
                  onQuantityChange(2, firstAvailableVariant);
                }}>
                <Text style={styles.buttonAltText}>+</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  prodImg: {
    width: 118,
    // height: 200,
  },
  imgContainer: {
    height: 161,
    width: 119,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regPrice: {
    color: 'green',
  },
  default: {
    paddingVertical: 3,
    alignItems: 'center',
  },
  regText: {
    paddingHorizontal: 3,
  },
  buttonContainer: {
    paddingVertical: 3,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 0,
  },
  button: {
    width: 118.68,
    flexDirection: 'row',
    backgroundColor: '#1E232C',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 1,
    borderWidth: 1,
    height: 27.93,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 8.98,
    color: 'white',
  },
  buttonAltText: {
    color: 'white',
    paddingHorizontal: 10,
  },
  block: {
    width: 131,
    height: 272.78,
    // height: 600,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  card: {
    width: 130.97,
    height: 272.78,
    // height: 600,
    borderWidth: 0.25,
    borderColor: 'rgba(100,100,100,0.5)',
    // padding: 5.5,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  strikedText: {
    textDecorationLine: 'line-through',
    color: '#427FD1',
    fontSize: 8.97,
    fontFamily: 'Urbanist-Light',
  },
  title: {
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingLeft: 0,
    fontSize: 11.97,
    maxWidth: '100%',
    fontFamily: 'Urbanist-Black',
  },
  priceContainer: {
    flexDirection: 'row',
    paddingVertical: 0,
    paddingTop: 0,
    alignItems: 'center',
  },
  priceTextbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 0,
  },
  priceText: {
    color: 'black',
    paddingRight: 10,
    fontSize: 11.97,
    fontFamily: 'Urbanist-Bold',
  },
  reviewText: {
    fontSize: 8.98,
    textAlignVertical: 'center',
    color: 'rgb(100,100,100)',
    fontFamily: 'Urbanist-Light',
  },
  reviewCount: {
    fontSize: 8.98,
    // color: 'rgba(30,150,40,0.6)',
    color: 'black',
    paddingLeft: 5,
    fontFamily: 'Urbanist-Light',
  },
  reviewBox: {
    paddingHorizontal: 0,
    paddingTop: 0,
    width: 118.68,
  },
  reviewContainer: { minHeight: 12 },
  reviewBox2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagContainer: {
    // position: 'absolute',
    // bottom: 15,
    // left: 15,
    backgroundColor: '#668DC1',
    borderRadius: 2,
    maxWidth: 120,
    width: 35,
    height: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    color: 'white',
    fontSize: 7,
    fontFamily: 'Urbanist-Black',
  },
  reviewBoxStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewBoxCount: {
    height: 16,
    justifyContent: 'center',
  },
  rightPadding: { paddingRight: 2 },
  titleBox: { maxWidth: '100%', height: 31.91, paddingVertical: 3 },
});

export default RelatedCard;
