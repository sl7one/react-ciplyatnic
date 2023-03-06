export function utilsSetFlags(id, setFlags) {
  switch (id) {
    case 'orders':
      setFlags({ label: { name: true, phone: true, location: true } });
      break;
    case 'purchases':
      setFlags({ label: { name: true, phone: false, location: false } });
      break;
    default:
      setFlags({ label: { name: false, phone: false, location: false } });
      break;
  }
}
