const input = +prompt('Введите число');

if (!isNaN(parseInt(input))) {
    alert('Вы ввели число');
} else {
    alert('Введено некорректное значение ');
}
