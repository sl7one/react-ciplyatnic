export const utilsWord = id => {
  switch (id) {
    case 'orders':
      return 'заказов';
    case 'purchases':
      return 'закупок';
    case 'salles':
      return 'продаж';
    default:
      return '';
  }
};
