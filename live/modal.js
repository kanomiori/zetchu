document.addEventListener('DOMContentLoaded', () => {
    const liveItems = document.querySelectorAll('.live-item');

    liveItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const date = item.getAttribute('data-date');
            const location = item.getAttribute('data-location');
            const time = item.getAttribute('data-time');
            const turn = item.getAttribute('data-turn');
            const price = item.getAttribute('data-price');
            const type = item.getAttribute('data-type');
            const reserveVenueUrl = item.getAttribute('data-venue-url');
            const reserveStreamUrl = item.getAttribute('data-stream-url');

            showModal(title, date, location, time, turn, price, type, reserveVenueUrl, reserveStreamUrl);
        });
    });
});


function showModal(title, date, location, time, turn, price, type, reserveVenueUrl, reserveStreamUrl) {
    // 改行を反映しつつ "\n" を除去
    document.getElementById('modal-title').innerHTML = title.replace(/\\n/g, '<br>');
    document.getElementById('modal-date').innerHTML = `日付: ${date}`.replace(/\\n/g, '<br>');
    document.getElementById('modal-location').innerHTML = `場所: ${location}`.replace(/\\n/g, '<br>');
    document.getElementById('modal-time').innerHTML = `時間: ${time}`.replace(/\\n/g, '<br>');
    document.getElementById('modal-turn').innerHTML = `出番: ${turn}`.replace(/\\n/g, '<br>');
    document.getElementById('modal-price').innerHTML = `料金: ${price}`.replace(/\\n/g, '<br>');

    // ボタン要素を取得
    const reserveBtnVenue = document.getElementById('reserve-btn-venue');
    const reserveBtnStream = document.getElementById('reserve-btn-stream');

    // ボタンを一度非表示にする
    reserveBtnVenue.style.display = "none";
    reserveBtnStream.style.display = "none";

    // タイプが「会場」を含む場合、会場予約ボタンを表示
    if (type.includes("会場") && reserveVenueUrl) {
        reserveBtnVenue.href = reserveVenueUrl;
        reserveBtnVenue.textContent = "会場参加予約";
        reserveBtnVenue.style.display = "block";
    }

    // タイプが「配信」を含む場合、配信予約ボタンを表示
    if (type.includes("配信") && reserveStreamUrl) {
        reserveBtnStream.href = reserveStreamUrl;
        reserveBtnStream.textContent = "配信予約";
        reserveBtnStream.style.display = "block";
    }

    // モーダルを表示
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    // アニメーションのリセット
    const content = modal.querySelector('.modal-content');
    content.style.animation = 'none';
    setTimeout(() => {
        content.style.animation = 'zoomIn 0.5s ease forwards';
    }, 0);
}

function closeModal() {
    // モーダルを非表示
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
