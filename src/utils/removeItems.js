export function utilsRemoveItems(currentTarget, setGoods, poultry, food, options) {
  const { id, attributes } = currentTarget;
  const { identificator } = attributes;

  switch (identificator.value) {
    case 'poultry':
      setGoods(prev => ({ ...prev, poultry: poultry.filter(item => item.id !== id) }));
      break;
    case 'food':
      setGoods(prev => ({ ...prev, food: food.filter(item => item.id !== id) }));
      break;
    case 'options':
      setGoods(prev => ({ ...prev, options: options.filter(item => item.id !== id) }));
      break;
    default:
      return [];
  }
}
