const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weigth = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weigth / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';
    document.getElementById('infos').classList.remove('hidden');


    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso';
    } else if (bmi > 18.5 && bmi <= 25) {
        description = 'Peso ideal!';
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Peso ideal!';
    } else {
        description = 'Cuidado, obesidade morbida!';
    }
    value.textContent = bmi;
    document.getElementById('descricption').textContent = description;
});
