import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
} from 'react-native';
import { useProductDetail } from '@appmaker-xyz/shopify';
import { appmaker } from '@appmaker-xyz/core';
import LinearGradient from 'react-native-linear-gradient';

const Description = (props) => {
  const {
    attributes,
    BlockItem,
    BlocksView,
    innerBlocks,
    onAction,
    currentAction,
  } = props;

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const { salePrice, salePriceValue, salePercentage, product } =
    useProductDetail(props);

  const [readMore, setReadMore] = useState(false);
  const animationValue = useRef(new Animated.Value(readMore ? 0 : 2)).current;

  const toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (readMore) {
      setReadMore(false);
      // setNumber(2);
    } else {
      setReadMore(true);
      // setNumber(0);
    }

    // Animated.timing(animationValue, {
    //   toValue: readMore ? 6000 : 60,
    //   duration: 700,
    //   useNativeDriver: false,
    // }).start();
    // setReadMore(!readMore);
  };

  // const textStyles = {
  //   maxHeight: animationValue.interpolate({
  //     inputRange: [0, 2],
  //     outputRange: [6000, 60],
  //   }),
  // };

  // console.log('Inside description.js ', props.onPress);

  return (
    <View style={styles.block}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>What it is</Text>

        <Animated.View
          style={[
            styles.collapse,
            {
              maxHeight: readMore ? 6000 : 70,
              overflow: readMore ? 'visible' : 'hidden',
            },
          ]}>
          <Animated.Text
            style={[
              styles.descText,
              {
                maxHeight: readMore ? 6000 : 70,
                overflow: readMore ? 'visible' : 'hidden',
              },
            ]}
            numberOfLines={readMore ? 0 : 3}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. */}
            {product.node.description}
          </Animated.Text>
          <LinearGradient
            colors={
              readMore
                ? ['rgba(256,256,256,0)', 'rgba(256,256,256,0)']
                : ['rgba(256,256,256,0)', 'rgba(256,256,256,1)']
            }
            style={styles.linearGradient}></LinearGradient>
        </Animated.View>

        <Pressable
          style={styles.topPadding}
          onPress={() => {
            // setReadMore(!readMore);
            toggleItem();
          }}>
          <Text style={styles.linkText}>READ MORE</Text>
        </Pressable>
      </View>

      <BlockItem
        BlockItem={BlockItem}
        BlocksView={BlocksView}
        currentAction={currentAction}
        onAction={onAction}
        block={{
          innerBlocks,
          name: 'customCollapsible',
          attributes: {
            title: 'Specifications',
          },
        }}
      />
      <BlockItem
        BlockItem={BlockItem}
        BlocksView={BlocksView}
        currentAction={currentAction}
        onAction={onAction}
        block={{
          name: 'customCollapsible',
          attributes: {
            title: 'Return Policy',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { paddingHorizontal: 0, backgroundColor: 'white' },
  collapse: {
    // flexGrow: readMore ? 0 : 2,
  },
  descText: {
    paddingVertical: 6,
    fontSize: 14,

    // overflow: 'hidden',
    color: 'black',
    fontFamily: 'Urbanist-ExtraLight',
  },
  titleBox: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  title: { fontSize: 17, color: 'black', fontFamily: 'Urbanist-Black' },
  linkText: {
    color: 'rgb(100,150,220)',
    fontSize: 11,
    fontFamily: 'Urbanist-Black',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    bottom: 0,
  },
  topPadding: { paddingTop: 13 },
});

export default Description;
