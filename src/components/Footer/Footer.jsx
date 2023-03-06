import './footer.scss';
import { Link } from 'react-router-dom';
import { utilsClasses } from '../../utils/utilsClasses';
import { utilsWord } from '../../utils/utilsFooterWord';

export const Footer = ({ id, items }) => {
  const count = items.length;
  const total = items.reduce((acc, { order }) => (acc += order.total), 0);

  return (
    <footer className={utilsClasses(id, 'footer')}>
      <div className="container">
        <p>
          Всего {utilsWord(id)} <span>{count}</span>шт на сумму <span>{total}</span>грн
        </p>
        <Link to="/statistic">Статистика</Link>
      </div>
    </footer>
  );
};
