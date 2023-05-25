import React from 'react';
import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import {
  useProductDetail,
  useProductImages,
  useProductWishList,
} from '@appmaker-xyz/shopify';
import Icon from 'react-native-vector-icons/AntDesign';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const ProductImage = (props) => {
  const { attributes } = props;
  const {
    product,
    // onSale
    // salePercentage
  } = useProductDetail(props);

  const { imageList, imageRatio, swiperRef, openImage } =
    useProductImages(props);
  const { toggleWishList, isSaved } = useProductWishList(props);

  const { width } = useWindowDimensions();

  let onSale = true;
  let salePercentage = 20;

  console.log('props', props);
  console.log('useProductDetail', product.node.images.edges[0].node);

  return (
    <View style={styles.card}>
      <View style={[styles.imgContainer, { aspectRatio: 1 / imageRatio }]}>
        <SwiperFlatList
          ref={swiperRef}
          showPagination
          data={imageList}
          renderItem={({ item }) => (
            <Pressable onPress={openImage} style={{ width }}>
              <Image
                source={{
                  uri: typeof item === 'string' ? item : item.thumbnail,
                }}
                style={[styles.image, { aspectRatio: 1 / imageRatio }]}
              />
            </Pressable>
          )}
          paginationStyleItemActive={styles.paginationActive}
          paginationStyleItemInactive={styles.paginationInctive}
          paginationStyle={styles.paginationStyle}
        />
        {onSale && (
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{`${salePercentage}% OFF`}</Text>
          </View>
        )}
        <View style={styles.wishList}>
          <Pressable style={styles.vertPadding} onPress={toggleWishList}>
            <Text>
              <Icon
                name={isSaved ? 'heart' : 'hearto'}
                size={17.49}
                color={isSaved ? '#F54D4D' : '#3F3F3F'}
              />
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.empty}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 492,
    width: '100%',
    // overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: 'rgba(200,200,200,0.5)',
  },
  image: {
    width: '100%',
    // height: '100%',
  },
  vertPadding: { paddingVertical: 5 },
  tagContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: '#668DC1',
    borderRadius: 2,
    maxWidth: 120,
    width: 79,
    height: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Urbanist-Black',
  },
  wishList: {
    position: 'absolute',
    bottom: 15,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 34,
    maxWidth: 120,
    width: 34,
    height: 34,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 51,
    elevation: 7,
  },
  paginationActive: {
    width: 17,
    backgroundColor: '#668DC1',
    height: 8,
  },
  paginationInctive: {
    width: 8,
    backgroundColor: '#E0E0E0',
    height: 8,
  },
  paginationStyle: {
    bottom: -35,
  },
  empty: { height: 20 },
});

export default ProductImage;
