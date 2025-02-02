import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Block } from './styles/CoinListTab.styles';

import CoinListHeader from './CoinListHeader';
import CoinListContainer from './CoinListContainer';
import useExchange from '../../hooks/useExchange';

const CoinListTab = observer(() => {
  const exchangeStore = useExchange();

  const clickTabOption = useCallback((option) => {
    if (option === 'KRW' || option === 'BTC' || option === 'USDT') {
      exchangeStore.setMarketID(option);
    }
    exchangeStore.setMarketOption(option);
  }, []);

  return (
    <Block>
      <ul>
        <li>
          <a
            className={exchangeStore.marketOption === 'KRW' ? 'on' : ''}
            href="#"
            onClick={() => clickTabOption('KRW')}
          >
            원화
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.marketOption === 'BTC' ? 'on' : ''}
            href="#"
            onClick={() => clickTabOption('BTC')}
          >
            BTC
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.marketOption === 'USDT' ? 'on' : ''}
            href="#"
            onClick={() => clickTabOption('USDT')}
          >
            USDT
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.marketOption === '보유' ? 'on' : ''}
            href="#"
            onClick={() => clickTabOption('보유')}
          >
            보유
          </a>
        </li>
        <li>
          <a
            className={exchangeStore.marketOption === '관심' ? 'on' : ''}
            href="#"
            onClick={() => clickTabOption('관심')}
          >
            관심
          </a>
        </li>
      </ul>
      <CoinListHeader />
      <CoinListContainer />
    </Block>
  );
});

export default CoinListTab;
