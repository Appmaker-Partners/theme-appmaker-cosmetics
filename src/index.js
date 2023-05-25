import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';
import { addProductCollection } from './helperFuncs/functions';
import { pages } from './pages/index';

export function activate(params) {
  console.log('cosmetic-theme activated');
  addProductCollection();
}
const CosmeticTheme = {
  id: 'cosmetic-theme',
  activate,
  blocks,
  pages,
};
registerTheme(CosmeticTheme);
export default CosmeticTheme;
