const songs = [
        { image: 'image/1.jpg', song: 'music/I-TaeYeon.mp3', title: 'I Love You Immensely' },
        { image: 'image/2.jpg', song: 'music/Perfect.mp3', title: 'Together, We Flourish', startTime: 5 },
        { image: 'image/3.jpg', song: 'music/Fine-TaeYeon.mp3', title: 'I Always Want You to Shine' },
        { image: 'image/4.jpg', song: 'music/Never Say Never.mp3', title: 'Never Say Never', startTime: 5 },
        { image: 'image/5.jpg', song: 'music/What Do You Mean.mp3', title: 'What Do You Mean?', startTime: 40 },
        { image: 'image/6.jpg', song: 'music/Baby.mp3', title: 'Baby' },
        { image: 'image/7.jpg', song: 'music/Love Yourself.mp3', title: 'Love Yourself', startTime: 10 },
        { image: 'image/8.jpg', song: 'music/You-are-the-reason.mp3', title: 'You Inspire Me Every Day' },
        { image: 'image/9.jpg', song: 'music/Always-Remember-Us-This-Way.mp3', title: 'Always Remember Us' },
        { image: 'image/10.jpg', song: 'music/All-of-Me.mp3', title: 'Every Part of Me Loves Every Part of You' }
    // { image: 'image/11.jpg', song: 'music/Shape-Of-You.mp3', title: 'The club isn\'t the best place to find a lover' },
    // { image: 'image/12.jpg', song: 'music/See-You-Again.mp3', title: 'It\'s been a long day without you, my friend' },
    // { image: 'image/13.jpg', song: 'music/Someone-You-Loved.mp3', title: 'Now the day bleeds into nightfall' },
    // { image: 'image/14.jpg', song: 'music/Perfect.mp3', title: 'I found a love for me' },
    // { image: 'image/15.jpg', song: 'music/Photograph.mp3', title: 'Loving can hurt' },
    // { image: 'image/16.jpg', song: 'music/Thinking-Out-Loud.mp3', title: 'When your legs don\'t work like they used to before' },
    // { image: 'image/17.jpg', song: 'music/Counting-Stars.mp3', title: 'Lately, I\'ve been, I\'ve been losing sleep' }
];

let currentIndex = 0;
const imageElement = document.getElementById('image');
const audioElement = document.getElementById('audio');
const playPauseIcon = document.getElementById('playPauseIcon');
const songTitleElement = document.getElementById('songTitle'); // ✅ Đảm bảo phần tử này tồn tại trong HTML

function updateSong() {
    const song = songs[currentIndex]; // Lấy bài hát hiện tại
    imageElement.src = song.image;
    audioElement.src = song.song;
    songTitleElement.textContent = song.title || "Không có tiêu đề";

    // Gỡ bỏ tất cả sự kiện cũ trước khi đặt lại `onloadedmetadata`
    audioElement.onloadedmetadata = null;

    // Khi dữ liệu bài hát tải xong, đặt startTime
    audioElement.onloadedmetadata = function () {
        audioElement.currentTime = song.startTime || 0;
        audioElement.play().catch(error => console.error("Lỗi phát nhạc:", error));
        playPauseIcon.src = "icon/pause.png";
    };

    // Tải lại bài hát để đảm bảo cập nhật
    audioElement.load();
}

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseIcon.src = "icon/pause.png";
    } else {
        audioElement.pause();
        playPauseIcon.src = "icon/play.png";
    }
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    updateSong();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updateSong();
}

function changeVolume(value) {
    audioElement.volume = value;
}
