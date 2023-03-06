export const utilsTitleButton = id => {
  switch (id) {
    case 'count':
      return { title: 'Кол-во', unit: 'шт' };
    case 'price':
      return { title: 'Цена', unit: 'грн' };
    default:
      return null;
  }
};
