if (navigator.userAgent.match(/Android TV/)) {
    // Определено, что клиент использует Android TV
    // Показываем кнопку "Скачать"
    document.querySelector('.islamApp').style.display = 'block';
} else if (navigator.userAgent.match(/Android/))  {
    window.location.href = "https://play.google.com/store/apps/details?id=slam.islamapp&hl=ru&gl=US";
} else if (navigator.userAgent.match(/iOS/)) {
    window.location.href = "https://apps.apple.com/ru/app/islamapp-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7%D0%B0-%D0%BA%D0%B8%D0%B1%D0%BB%D0%B0/id1452368807";
} else if (navigator.userAgent.match(/Macintosh/)) {
    window.location.href = "https://apps.apple.com/ru/app/islamapp-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7%D0%B0-%D0%BA%D0%B8%D0%B1%D0%BB%D0%B0/id1452368807"; 
}