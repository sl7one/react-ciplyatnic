import { format, parseISO } from 'date-fns';
import { utilsClasses } from '../../utils/utilsClasses';

export const ListSummary = ({ id, name, date, phone, location }) => {
  return (
    <summary className={utilsClasses(id, 'poultry__header')}>
      <p className="poultry__header-row">
        <span>{name}</span>
        <span>{format(parseISO(date), 'MM/dd/yy')}</span>
      </p>
      <p className="poultry__header-row">
        <span>{phone}</span>
        <span>{location}</span>
      </p>
    </summary>
  );
};
