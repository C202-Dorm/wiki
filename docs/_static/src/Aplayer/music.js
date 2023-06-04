const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all', // all, one, none
    order: 'list', // list, random
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        // {
        //     name: 'name',
        //     artist: 'artist',
        //     url: 'url.mp3',
        //     cover: 'cover.jpg',
        //     lrc: 'lrc.lrc',
        //     theme: 'theme',
        // },
        {
            name: 'Bones',
            artist: 'Imagine Dragons',
            url: '/_static/music/Bones.flac',
            cover: '/_static/music/cover/Bones.jpg',
            lrc: '/_static/music/lrc/Bones.lrc',
        },
        {
            name: '山丘',
            artist: '李宗盛',
            url: '/_static/music/山丘.flac',
            cover: '/_static/music/cover/山丘.jpg',
            lrc: '/_static/music/lrc/山丘.lrc',
        },
        {
            name: '雾里',
            artist: '姚六一',
            url: '/_static/music/雾里.flac',
            cover: '/_static/music/cover/雾里.jpg',
            lrc: '/_static/music/lrc/雾里.lrc',
        },
        {
            name: '只因你太美',
            artist: 'SWIN-S',
            url: '/_static/music/只因你太美.mp3',
            cover: '/_static/music/cover/只因你太美.jpg',
            lrc: '/_static/music/lrc/只因你太美.lrc',
        },
        {
            name: 'Never Gonna Give You Up',
            artist: 'Rick Astley',
            url: '/_static/music/Never Gonna Give You Up.flac',
            cover: '/_static/music/cover/Never Gonna Give You Up.jpg',
            lrc: '/_static/music/lrc/Never Gonna Give You Up.lrc',
        },
        {
            name: '孤勇者',
            artist: '陈奕迅',
            url: '/_static/music/孤勇者.flac',
            cover: '/_static/music/cover/孤勇者.jpg',
            lrc: '/_static/music/lrc/孤勇者.lrc',
        }
    ]
});