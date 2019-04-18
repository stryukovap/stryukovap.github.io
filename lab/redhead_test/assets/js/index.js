function postForm(promoCode) {
    // alert(promoCode);
    axios.post('http://sw.ants.co.ua/demo/', {
        couponcode: '0087-0220302018',
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function validateForm(form) {
    const errBlock = document.getElementById('errBlock');
    errBlock.style.display = 'none';
    if (form.email.value.indexOf('@') === -1) {
        errBlock.style.display = 'block';
        errBlock.innerText = 'В поле Email отсутствует символ @, ' +
            'проверьте корректность ввода и попробуйте еще раз';
    }
    if (form.tel.value.length > 10 || form.tel.value.length < 10) {
        errBlock.style.display = 'block';
        errBlock.innerText = 'В поле телефон введено больше или меньше 10 символов, ' +
            'проверьте корректность ввода и попробуйте еще раз';
    }
    if (errBlock.style.display !== 'block') {
        postForm(form.promoCode.value);
    }
}
