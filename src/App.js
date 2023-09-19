import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';
import Convert from './components/Convert/Convert';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const currencyList = useSelector((store) => store.currency.currencyList);
  const [fromCurrency, setFromCurrency] = useState('UA');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const onChangeFromPrice = (value) => {
    let res;

    currencyList.filter((item) => {
      if (item.cc === toCurrency) {
        res = value / item.rate;
      }

      if (toCurrency === 'UA') {
        res = value;
      }

      setToPrice(res);
      setFromPrice(value);
    });
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency]);

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  return (
    <div>
      <Container>
        <Info />
        <div className='convert'>
          <Convert
            value={fromPrice}
            onChangeValue={onChangeFromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
          />
          <Convert
            value={toPrice}
            onChangeValue={onChangeToPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
