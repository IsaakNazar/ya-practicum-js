function validateForm(errorMsg, elementValue, isOk) {
    switch (validateStrLength(elementValue.value, 2, 30)) {
        case 0:
            errorMsg.textContent = "Это обязательное поле";
            isOk = false;
            break;
        case 1:
            errorMsg.textContent = "";
            break;
        case 2:
            errorMsg.textContent = "Должно быть от 2 до 30 символов";
            isOk = false;
            break;
    }
}

function validURL(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}

// 0 - пустая строка
// 1 - ок
// 2 - слишком длинная или короткая

function validateStrLength(str, min, max) {
    if (str.length === 0)
        return 0;
    if (str.length >= min && str.length <= max)
        return 1;
    return 2;
}
