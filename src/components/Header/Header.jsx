import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { ModalClient } from '../ModalClient/ModalClient';
import './header.scss';
import { useState } from 'react';
import icons from '../../icons-sprite/icons-sprite.svg';

export const Header = ({ title, id }) => {
  const [isOpenClient, setIsOpenClient] = useState(false);

  const onClick = () => {
    setIsOpenClient(true);
  };

  const classes = () => {
    switch (id) {
      case 'orders':
        return 'header orders';
      case 'purchases':
        return 'header purchases';
      case 'salles':
        return 'header salles';
      default:
        return 'header';
    }
  };

  return (
    <header className={classes()}>
      <div className="container">
        <h1 className="title">
          <Link className="title__back" to="/">
            <svg width={25} height={25}>
              <use href={icons + `#back`}></use>
            </svg>
          </Link>
          {title}
          <button className="title__button" type="click" onClick={onClick}>
            <svg width={25} height={25}>
              <use href={icons + `#add`}></use>
            </svg>
          </button>
        </h1>
      </div>
      {isOpenClient &&
        createPortal(
          <ModalClient setIsOpenClient={setIsOpenClient} id={id} />,
          document.querySelector('#modal')
        )}
    </header>
  );
};
