export function utilsButtonsPicker(id, setIsOpenModals) {
  switch (id) {
    case 'product':
      setIsOpenModals({ type: true, count: false, price: false });
      break;
    case 'count':
      setIsOpenModals({ type: false, count: true, price: false });
      break;
    case 'price':
      setIsOpenModals({ type: false, count: false, price: true });
      break;
    default:
      setIsOpenModals({ type: false, count: false, price: false });
      break;
  }
}
