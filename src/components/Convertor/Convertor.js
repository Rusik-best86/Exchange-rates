import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cl from './Convertor.module.scss';

const Convertor = ({ value, onChangeValue, currency, onChangeCurrency }) => {
  const defaultCorrency = ['UA', 'USD', 'EUR', 'PLN'];
  const currencyList = useSelector((store) => store.currency.currencyList);

  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        {defaultCorrency.map((cur, i) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? cl.itemActive : cl.itemLi}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        className={cl.input}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type='number'
      />
    </div>
  );
};

export default Convertor;
