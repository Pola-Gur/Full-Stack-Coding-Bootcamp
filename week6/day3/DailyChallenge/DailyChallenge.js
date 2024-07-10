class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
}


const video1 = new Video('aaa', 'aaa aaa', 10);
console.log(video1.watch())

const video2 = new Video('bbb', 'bbb bbb', 20);
console.log(video2.watch());

// for bonus or array of arrys or array of object

let arr = [
    {title:' aaa', uploader: 'AAA', time: 10},
    {title:' bbb', uploader: 'BBB', time: 20},
    {title:' ccc', uploader: 'CCC', time: 30},
    {title:' ddd', uploader: 'DDD', time: 40},
    {title:' eee', uploader: 'EEE', time: 50},
];

let videos = arr.map(item => {
    return new Video(item.title, item.uploader, item.time);
})

console.log(videos);

videos.forEach(item => {
    console.log(item);
})