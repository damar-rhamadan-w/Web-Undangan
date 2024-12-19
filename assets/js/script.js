function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Nomor rekening telah disalin!');
}


function kirimViaWhatsapp() {
    const nomorRekening = document.getElementById('nomor-rekening');
    if (nomorRekening) {
        const rekeningText = nomorRekening.textContent.trim();
        const link = `https://wa.me/?text=Halo%2C%20saya%20ingin%20mengirim%20hadiah%20ke%20rekening%20${encodeURIComponent(rekeningText)}`;
        window.open(link, '_blank');
    } else {
        alert('Nomor rekening tidak ditemukan!');
    }
}

const musik = document.querySelector('#kotak-musik');
if (musik) {
    musik.style.display = 'block';

    const lagu = document.querySelector('#lagu');
    if (lagu) {
        lagu.play();
    }
}

function putarLagu() {
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if (lagu && tombol) {
        if (lagu.paused) {
            lagu.play();
            tombol.src = 'assets/img/on.png';
        } else {
            lagu.pause();
            tombol.src = 'assets/img/off.png';
        }
    } else {
        console.error('Element lagu atau tombol kontrol tidak ditemukan.');
    }
}
