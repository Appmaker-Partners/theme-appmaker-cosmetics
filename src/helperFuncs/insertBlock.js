import { appmaker } from '@appmaker-xyz/core';
import { shopifyIdHelper } from '@appmaker-xyz/shopify';

const activateBlocks = () => {
  appmaker.addFilter(
    'shopify-custom-collection-response',
    `appmaker/shopify-product-list`,
    (response, params, dependencies) => {
      //   console.log('inside insertBlock function', response);

      return response;
    },
  );
};

export default activateBlocks;
