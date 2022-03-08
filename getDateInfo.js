



function getDateInfo(parameter) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let mouth = ["Янвваря", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентабря", "Октября", "Ноября", "Декабрня"];
    let index = parameter.split('.').reverse().join('.');
    let data = new Date(index);

    let monthStart = new Date(index);
    monthStart.setDate(0);
    let offset = (monthStart.getDay() + 1) % 7 - 1; 
    let currentWeek = Math.ceil((new Date(index).getDate() + offset) / 7);;

    return days[data.getDay()] + ', ' + currentWeek + ' неделя ' + mouth[data.getMonth()] + ' ' + 
    data.getFullYear() + ' года';

}


console.log(getDateInfo('12.04.2022'));