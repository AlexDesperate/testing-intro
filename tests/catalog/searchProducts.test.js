const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("запрос 'Наушники' возвращает товары с ID [1]", () => {
    const result = searchProducts(products, 'Наушники');
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test("запрос 'Чистый код' возвращает товары с ID [6]", () => {
    const result = searchProducts(products, 'Чистый код');
    expect(result.map(p => p.id)).toEqual([6]);
  });

  test("запрос 'Настольная лампа' возвращает товары с ID [4]", () => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result.map(p => p.id)).toEqual([4]);
  });

  test("запрос 'javascript' возвращает товары с ID [3]", () => {
    const result = searchProducts(products, 'javascript');
    expect(result.map(p => p.id)).toEqual([3]);
  });

  test("запрос 'ЧЕХОЛ' возвращает товары с ID [5]", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result.map(p => p.id)).toEqual([5]);
  });

  test("запрос 'наушники' возвращает товары с ID [1]", () => {
    const result = searchProducts(products, 'наушники');
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test("запрос '' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("запрос '   ' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '   ');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("запрос '\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, '\t\n');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});