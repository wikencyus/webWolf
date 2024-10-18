const checkWaktu = () => {
    const sekarang = moment.tz("Asia/Jakarta");
    const jam = sekarang.hour();

    if (jam >= 5 && jam < 12) {
        greeting = "Selamat pagi";
    } else if (jam >= 12 && jam < 15) {
        greeting = "Selamat siang";
    } else if (jam >= 15 && jam < 18) {
        greeting = "Selamat sore";
    } else {
        greeting = "Selamat malam";
    }

    document.getElementById('greeting').innerText = "Hallo, " + greeting;
}
checkWaktu();

document.getElementById('burger').onclick = function() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};

document.getElementById('followMe').addEventListener('click', function() {
    alert('Kamu sudah memfollow saya')
})

document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
})

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
})

document.getElementById('instagram').addEventListener('click',  function() {
    window.open('https://www.instagram.com/', '_blank');
})

document.getElementById('linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/', '_blank');
})