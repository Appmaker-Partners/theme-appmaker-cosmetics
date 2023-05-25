import customCollapsible from './components/PDP/customCollapsible';
import CustomRelatedProducts from './components/PDP/customRelatedProducts';
import Description from './components/PDP/Description';
import Variants from './components/PDP/Variants';
import ProductCards from './components/PDP/ProductCard';
import RelatedCards from './components/PDP/RelatedCard';
import ProductImage from './components/PDP/ProductImage';
import DeliveryOption from './components/PDP/DeliveryOPtions';
import addToCart from './components/PDP/addToCart';

const blocks = [
  {
    name: 'appmaker/shopify-product-description',
    View: Description,
  },
  {
    name: 'appmaker/shopify-product-variation',
    View: Variants,
  },
  {
    name: 'my-theme/custom-related-products',
    View: CustomRelatedProducts,
  },
  {
    name: 'customCollapsible',
    View: customCollapsible,
  },
  {
    name: 'appmaker/shopify-product-data',
    View: ProductCards,
  },
  {
    name: 'appmaker/shopify-product-image',
    View: ProductImage,
  },
  {
    name: 'custom/related-products-card',
    View: RelatedCards,
  },
  {
    name: 'custom/delivery-options',
    View: DeliveryOption,
  },
  {
    name: 'appmaker/shopify-product-pbp-buttons',
    View: addToCart,
  },
];
export { blocks };
