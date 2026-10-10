const kotak1 = document.querySelector('.kotak-1');
const kotak2 = document.querySelector('.kotak-2');
const kotak3 = document.querySelector('.kotak-3');
const kotak4 = document.querySelector('.kotak-4');
const kotak5 = document.querySelector('.kotak-5');
const kotak6 = document.querySelector('.kotak-6');
const kotak7 = document.querySelector('.kotak-7');
const kotak8 = document.querySelector('.kotak-8');
const kotak9 = document.querySelector('.kotak-9');
const kotak10 = document.querySelector('.kotak-10');

const audio1 = new Audio('sounds-en/one.mp3');
const audio2 = new Audio('sounds-en/two.mp3');
const audio3 = new Audio('sounds-en/three.mp3');
const audio4 = new Audio('sounds-en/four.mp3');
const audio5 = new Audio('sounds-en/five.mp3');
const audio6 = new Audio('sounds-en/six.mp3');
const audio7 = new Audio('sounds-en/seven.mp3');
const audio8 = new Audio('sounds-en/eight.mp3');
const audio9 = new Audio('sounds-en/nine.mp3');
const audio10 = new Audio('sounds-en/ten.mp3');

//tulisan judul 
const judul = document.getElementById('judul');

//alert box website
const alert_box = document.getElementById("alertBox");

function tutupAlert() {
    alert_box.style.display = "none";
}

//kotak functions addEventListener
kotak1.addEventListener('click', () => {
    audio1.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '1';
});
kotak2.addEventListener('click', () => {
    audio2.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '2';
});
kotak3.addEventListener('click', () => {
    audio3.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '3';
});
kotak4.addEventListener('click', () => {
    audio4.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '4';
});
kotak5.addEventListener('click', () => {
    audio5.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '5';
});
kotak6.addEventListener('click', () => {
    audio6.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '6';
});
kotak7.addEventListener('click', () => {
    audio7.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '7';
});
kotak8.addEventListener('click', () => {
    audio8.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '8';
});
kotak9.addEventListener('click', () => {
    audio9.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '9';
});
kotak10.addEventListener('click', () => {
    audio10.play().then(() => {
        console.log('audio telah berputar');
    }).catch(error => {
        console.error('Audio gagal berputar', error);
    }); 
    alert_box.style.display = "block";
    judul.textContent = '10';
});
window.addEventListener('keydown', (e) => {
    if (e.key === "a") window.location.href = "file:///D:/Folder%20Kerja%20VS%20Code/Folder%20Code%200/index.html";
});