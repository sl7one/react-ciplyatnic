import { foodList, optionsList, poultryList } from './fakeList';

export function utilsTypeList(id, setTypeList) {
  switch (id) {
    case 'poultry':
      setTypeList({
        type: 'poultry',
        list: poultryList,
      });
      break;
    case 'food':
      setTypeList({
        type: 'food',
        list: foodList,
      });
      break;
    case 'options':
      setTypeList({
        type: 'options',
        list: optionsList,
      });
      break;
    default:
      setTypeList({
        type: '',
        list: [],
      });
      break;
  }
}
