import { registerTheme } from '@appmaker-xyz/core';
import { appmaker } from '@appmaker-xyz/core';
import { blocks } from './blocks';

export function activate(params) {   
  console.log('cosmetic-theme activated');
}
const CosmeticTheme = {
  id: 'cosmetic-theme',
  activate,
  blocks,
};
registerTheme(CosmeticTheme);
export default CosmeticTheme;
