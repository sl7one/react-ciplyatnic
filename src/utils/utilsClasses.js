export const utilsClasses = (id, className) => {
  switch (id) {
    case 'orders':
      return `${className} orders`;
    case 'purchases':
      return `${className} purchases`;
    case 'salles':
      return `${className} salles`;
    default:
      return '';
  }
};
