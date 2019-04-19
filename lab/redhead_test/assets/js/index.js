function postForm(promoCode) {
    const popupAJAX = document.getElementById('blockForAJAX');
    axios.post('http://sw.ants.co.ua/demo/', {
        headers: {'Access-Control-Allow-Origin': '*'},
        couponcode: promoCode,
        command: 'checkCouponCode'
    })
        .then(function (response) {
            console.log(response);
            if (response.data.exist === 1) {
                axios.post('http://sw.ants.co.ua/demo/', {
                    headers: {'Access-Control-Allow-Origin': '*'},
                    couponcode: promoCode,
                    command: 'activate'
                })
                    .then(function (response) {
                        console.log(response);
                        popupAJAX.innerHTML = 'Регистрации промокода успешна';
                        popupAJAX.style.display = 'flex';
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            } else {
                popupAJAX.innerHTML = 'Ошибка регистрации промокода';
                popupAJAX.style.display = 'flex';
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function validateForm(form) {
    const errBlock = document.getElementById('errBlockForForm');
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
function closePopup() {
    const popupAJAX = document.getElementById('blockForAJAX');
    popupAJAX.style.display = 'none'
}
