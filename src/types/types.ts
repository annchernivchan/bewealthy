export type CurrencyFromAPI = {
  currencyCodeA: number;
  currencyCodeB: number;
  rateBuy: number;
};

export type Currency = 'USD' | 'EUR' | 'UAH';

export type CurrencyRate = {
  fromCurrency: Currency;
  toCurrency: Currency;
  rate: number;
};
