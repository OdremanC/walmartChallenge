import {
  currencyFormatter,
  checkPalindrom,
  addDiscounts,
} from './serializer';

describe('Serializers', () => {
  it('currencyFormatter', () => {
    const value = 2300;
    const valueFormated = currencyFormatter(value);
    expect(valueFormated).toEqual('2,300');
  });

  it('checkPalindrom', () => {
    const value = 'isaac no ronca asi';
    const valueFormated = checkPalindrom(value);
    expect(valueFormated).toEqual(true);
  });

  it('addDiscounts', () => {
    const search = 'ooo';
    const data = [{
      "id": 1,
      "brand": "ooo eqrceli",
      "description": "rlñlw brhrka",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 498724
    }];

    const dataWithDiscount = addDiscounts(search, data);
    expect(dataWithDiscount).toEqual([{
      "id": 1,
      "brand": "ooo eqrceli",
      "description": "rlñlw brhrka",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 498724,
      "newPrice": 249362,
      "discount": "50%"
    }])
  });
});

