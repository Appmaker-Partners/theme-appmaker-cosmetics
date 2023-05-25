import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { runDataSource } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';

export default function CustomRelatedProducts({
  attributes,
  BlockItem,
  BlocksView,
  innerBlocks,
  onAction,
  currentAction,
}) {
  // const productIds = attributes?.productIds?.value
  //   ? JSON.parse(attributes.productIds.value)
  //   : null;

  const productIds = attributes?.productIds?.value
    ? JSON.parse(attributes.productIds.value)
    : [
        'gid://shopify/Product/8280937431323',
        'gid://shopify/Product/8280937431323',
        'gid://shopify/Product/8280937431323',
        'gid://shopify/Product/8280937431323',
        'gid://shopify/Product/8280937431323',
      ];

  // console.log('productIds', attributes.productIds.value);

  const finalAttributes = appmaker.applyFilters(
    'shopify-product-scroller-attributes',
    {
      horizontal: true,
      dataSource: {
        source: 'shopify',
        attributes: {
          mapping: {
            items: 'data.data.products.edges',
          },

          methodName: 'products',
          params: {
            ids: productIds,
            productsLimit: 10,
          },
        },
        repeatable: 'Yes',
        repeatItem: 'DataSource',
      },
      appmakerAction: {
        params: {
          action: 'OPEN_PRODUCT_DETAIL',
          params: {
            pageData: '{{blockItem}}',
          },
        },
      },
    },
  );

  if (!productIds) return null;

  //   console.log(
  //     'FinalAttributes are',
  //     finalAttributes.dataSource.attributes.params,
  //   );

  return (
    <View style={styles.block}>
      <View style={styles.paddingVert}>
        <Text style={styles.title}>{attributes.title}</Text>
      </View>
      <View>
        <BlockItem
          BlockItem={BlockItem}
          BlocksView={BlocksView}
          currentAction={currentAction}
          onAction={onAction}
          block={{
            name: 'custom/related-products-card',
            innerBlocks,
            clientId: 'product-list',
            isValid: true,
            attributes: finalAttributes,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingVertical: 10,
    backgroundColor: '#F7F8FC',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Urbanist-Black',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  paddingVert: { paddingVertical: 0 },
});
