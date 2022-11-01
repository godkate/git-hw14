console.log('start');
let store = {
    name: `Кафе "Залий Рило"`,
    address: {
        country: `Україна`,
        city: `Конотоп`,
        street: `вулиця Сусідня`,
        houseNumber: 13
    }
};
store.clients = {};
store.clients["Богдан Онацький"] = {
    quantity: 10,
    bonuses: 100
};
store.clients["Катерина Богодаєва"] = {
    quantity: 8,
    bonuses: 75
};
store.clients["Павло Федоренко"] = {
    quantity: 11,
    bonuses: 98
};
store.clients["Максим Ощип"] = {
    quantity: 4,
    bonuses: 15
};
store.clients["В'ячеслав Конєв"] = {
    quantity: 6,
    bonuses: 37
};

console.log(store);
console.log('end');
