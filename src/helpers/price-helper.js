const priceHelper = (price) => `${new Intl.NumberFormat('ru-RU').format(price)} ₽`;
export default priceHelper;