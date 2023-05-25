const ProductDetailPage = {
  blocks: [
    {
      name: 'appmaker/shopify-product-image',
      attributes: {},
    },
    {
      name: 'appmaker/shopify-product-data',
      clientId: 'product-data',
      attributes: {},
    },
    {
      name: 'appmaker/shopify-product-variation',
      attributes: {},
    },
    {
      name: 'custom/delivery-options',
      attributes: {},
    },
    {
      name: 'my-theme/custom-related-products',
      clientId: 'related-products',
      attributes: {
        productIds: '{{blockItem.node.custom_products_list}}',
        title: 'You may also Like',
      },
    },
    {
      name: 'appmaker/shopify-product-description',
      attributes: {},
    },
  ],
  stickyFooter: {
    blocks: [
      {
        name: 'appmaker/shopify-variation-listner',
        clientId: 'de9b066c-ae0d-4f7c-a3dd-123',
        attributes: {},
      },
      {
        clientId: '143f1163-10ac-4b22-bf57-2ba78c94b540',
        name: 'appmaker/shopify-product-pbp-buttons',
      },
    ],
  },
};
export default ProductDetailPage;
