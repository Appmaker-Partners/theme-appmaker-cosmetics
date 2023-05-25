import React from 'react';
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import { useProductListItem, useProductWishList } from '@appmaker-xyz/shopify';
// import Icon from 'react-native-vector-icons/AntDesign';
import Heart from '../../../../assets/svg/VectorHeart';

const ProductGrid = (props) => {
  const {
    title,
    product,
    salePrice,
    salePriceValue,
    gridViewListing,
    hasTag,
    tags,
    imageAspectRatio,
    // salePercentage,
    // regularPrice,
    // onSale,
  } = useProductListItem(props);
  const { attributes, onPress, onAction } = props;
  const { appmakerAction } = attributes;
  const { toggleWishList, isSaved } = useProductWishList(props);

  //Fake data

  let onSale = true;
  let salePercentage = 20;
  let regularPrice = salePriceValue + salePriceValue * (salePercentage / 100);

  let onPressHandle = onPress;
  if (appmakerAction && onAction) {
    onPressHandle = () => onAction(appmakerAction);
  }
  console.log('useProductList', useProductListItem(props));
  return (
    <Pressable
      style={[styles.card, gridViewListing ? {} : { width: 180 }]}
      onPress={onPressHandle}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: product?.node?.images?.edges[0]?.node.src,
            }}
            style={[styles.prodImg, { aspectRatio: 1 / imageAspectRatio }]}
            altText={product?.node?.images?.edges[0]?.node?.altText}
          />
          {onSale && (
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{`${salePercentage}% OFF`}</Text>
            </View>
          )}
          <View style={styles.wishList}>
            <Pressable style={{ paddingVertical: 5 }} onPress={toggleWishList}>
              {/* <Text> */}
              <Heart
                width={16}
                height={15}
                fill={isSaved ? '#EF1414' : '#FFFFFF'}
                stroke={isSaved ? '#EF1414' : '#929292'}
              />
              {/* <Icon
                  name={attributes.wishList ? 'heart' : 'hearto'}
                  size={16}
                  color={attributes.wishList ? '#F54D4D' : '#3F3F3F'}
                /> */}
              {/* </Text> */}
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={{
              width: '80%',
            }}>
            <Text style={styles.title} numberOfLines={1}>
              {title.toUpperCase()}
            </Text>
            {onSale ? (
              // <View
              //   style={{
              //     flexDirection: 'row',
              //     alignItems: 'flex-end',
              //     paddingTop: 5,
              //   }}>
              //   <Text
              //     style={{
              //       color: 'black',
              //       paddingRight: 10,
              //       fontFamily: 'Helvetica-Bold',
              //     }}>
              //     {salePrice}
              //   </Text>
              //   <Text
              //     style={{
              //       textDecorationLine: 'line-through',
              //       color: 'rgb(60,100,200)',
              //       fontSize: 12,
              //       fontFamily: 'Helvetica-Bold',
              //     }}>
              //     {regularPrice}
              //   </Text>
              // </View>
              <View style={[styles.flexDirectionRow, { paddingVertical: 0 }]}>
                <View style={[styles.priceBox, { paddingLeft: 0 }]}>
                  <Text style={styles.boldText}>₹{salePriceValue}</Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.strikeText}>
                    ₹{regularPrice.toFixed(2)}
                    {/* {(salePriceValue + (salePriceValue * 20) / 100).toFixed(2)} */}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.priceContainer}>
                <Text style={[styles.boldText, { paddingLeft: 0 }]}>
                  ₹{salePriceValue}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 252,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#F7F8FC',
  },
  prodImg: {
    width: '100%',
  },
  regPrice: {
    color: 'green',
  },
  flexDirectionRow: { flexDirection: 'row' },
  priceBox: {
    justifyContent: 'flex-end',
    paddingHorizontal: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 5,
  },
  colorText: {
    color: 'blue',
    paddingHorizontal: 4,
    fontSize: 9,
    textAlignVertical: 'bottom',
  },
  regText: { paddingVertical: 4, fontSize: 10 },
  boldText: {
    paddingRight: 4,
    // fontWeight: 'bold',
    fontSize: 11,
    textAlignVertical: 'bottom',
  },
  strikeText: {
    color: '#427FD1',
    fontSize: 9,
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  wishList: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '15%',
  },
  card: {
    width: '50%',
    paddingVertical: 0,
    paddingHorizontal: 5,
    height: 325,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  title: {
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    paddingRight: 5,
    fontFamily: 'Urbanist-BoldItalica',
    fontSize: 11,
    paddingVertical: 5,
    // fontWeight: 'bold',
  },
  tagText: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: 'white',
    fontSize: 9,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 2,
    width: '100%',
  },
  tagContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 5,
    left: 10,
    backgroundColor: 'rgba(100,150,220,0.9)',
    borderRadius: 2,
    maxWidth: 120,
    width: '35%',
    height: '7%',
    alignItems: 'center',
  },
  colorSwatchContainer: {
    marginBottom: 5,
    height: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  colorSwatch: {
    backgroundColor: '#5A8EBD',
    marginHorizontal: 3,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  colorSwatchText: { fontSize: 11, fontWeight: 'bold' },
});

export default ProductGrid;
