const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    volume: 0.4,
    audio: [{
            name: 'For you',
            artist: 'Androp',
            url: 'foryou-androp.mp3',
            cover: 'http://www.littleoslo.com/lyj/home/wp-content/uploads/2018/11/koi-450x450.jpg'
        }]
});