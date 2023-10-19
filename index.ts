// Задание 1
// Создайте функцию, которая принимает массив строк 
// и возвращает элемент массива под индексом 1

function getElement (arr: string[]):string {
    return arr[1];
}

// Задание 2
// Создайте стрелочную функцию, которая принимает условный код погоды 
// (всего три вида: "sun", "strm", "fog" ) 
// и возвращает расшифровку: 
// sun - "sunny" 
// strm - "storm" 
// fog - "foggy weather"

const GetWeather = (code: "sun" |"strm" | "fog"): string => {
switch (code) {
    case "sun": return "sunny";
    case "strm": return "storm";
    case "fog": return "foggy weather";
}
}

// Задание 3
// В отдельном файле ts создайте interface Airplane - самолет с полями:
// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.

interface Airplane {
    numberOfEngines: number;
    isJet: boolean; 
    maxHeight: number; 
    capacity: number; 
}
 const airbusA310: Airplane = {
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 41000,
    capacity:220
 }

 const airbusB300: Airplane = {
    numberOfEngines: 3,
    isJet: false,
    maxHeight: 42000,
    capacity: 200
 }
