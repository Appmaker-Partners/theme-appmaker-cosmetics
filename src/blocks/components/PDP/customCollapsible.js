import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { useProductDetail } from '@appmaker-xyz/shopify';
import Icon from 'react-native-vector-icons/AntDesign';

const customCollapsible = (props) => {
  const { attributes, onAction, onPress } = props;
  const { appmakerActions } = attributes;

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [open, setOpen] = useState(false);

  const toggleItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  let onPressHandle = onPress;
  if (appmakerActions) {
    onPressHandle = () => onAction(appmakerActions);
  }

  //   attributes.isLinked && console.log('Appmaker actions is ', props);

  return (
    <View style={styles.expandable}>
      <Pressable
        style={styles.trigger}
        onPress={() => {
          // setSizeChartOpen(!sizeChartOpen);
          toggleItem();
        }}>
        <Text style={styles.expandableTitle}>{attributes.title}</Text>
        <View
          style={[
            styles.caret,
            { transform: [{ rotateZ: open ? '90deg' : '0deg' }] },
          ]}>
          <Text>
            <Icon name="right" size={17} color="rgb(10,10,10)" />
          </Text>
        </View>
      </Pressable>

      {open && (
        <View>
          <Text style={styles.descText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          {attributes.isLinked && (
            <Pressable onPress={onPressHandle}>
              <Text style={styles.descText}>More details</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  expandable: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E4E4ED',
    backgroundColor: 'white',
  },
  expandableTitle: {
    fontSize: 17,
    paddingHorizontal: 5,
    fontFamily: 'Urbanist-Black',
  },
  descText: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    fontFamily: 'Raleway ',
    fontSize: 12,
    fontFamily: 'Urbanist-ExtraLight',
  },
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  caret: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default customCollapsible;

// const attributes = {
//   __appmakerCustomStyles: {},
//   appmakerActions: {
//     action: 'OPEN_URL',
//     params: { url: 'https://en.wikipedia.org/wiki/Snowboard' },
//   },
//   blockItem: undefined,
//   isLinked: true,
//   title: 'Specifications',
// };

// const props = {
//   Block: { View: [Function(customCollapsible)] },
//   BlockItem: [Function(BlockItem)],
//   BlockItemRender: [Function(BlockItem)],
//   BlocksView: [Function(BlocksView)],
//   attributes: {
//     __appmakerCustomStyles: {},
//     appmakerActions: { action: 'OPEN_URL', params: [Object] },
//     blockItem: undefined,
//     isLinked: true,
//     title: 'Specifications',
//   },
//   blockData: undefined,
//   clientId: undefined,
//   coreDispatch: [Function(anonymous)],
//   currentAction: {
//     action: 'OPEN_INAPP_PAGE',
//     pageId: 'productDetail',
//     params: { pageData: [Object] },
//   },
//   innerBlocks: undefined,
//   onAction: [Function(_callee2)],
//   pageDispatch: [Function(anonymous)],
// };

// const props = {
//   Block: { View: [Function(customCollapsible)] },
//   BlockItem: [Function(BlockItem)],
//   BlockItemRender: [Function(BlockItem)],
//   BlocksView: [Function(BlocksView)],
//   attributes: {
//     __appmakerCustomStyles: {},
//     appmakerActions: { action: 'OPEN_URL', params: [Object] },
//     blockItem: undefined,
//     isLinked: true,
//     title: 'Specifications',
//   },
//   blockData: undefined,
//   clientId: undefined,
//   coreDispatch: [Function(anonymous)],
//   currentAction: {
//     action: 'OPEN_INAPP_PAGE',
//     pageId: 'productDetail',
//     params: { pageData: [Object] },
//   },
//   innerBlocks: undefined,
//   onAction: [Function(_callee2)],
//   pageDispatch: [Function(anonymous)],
// };
