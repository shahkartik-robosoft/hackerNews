import {IHackerNewItem} from "./components/organisms/HackerNewItem/HackerNewItem";

export const formatTime = (ms: number) => {
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let min = Math.floor((ms / (1000 * 60)) % 60);
    let sec = Math.floor((ms / 1000) % 60);

    if (hours < 24) {
        return hours + " hrs ago";
    } else if (min < 60) {
        return min + " min ago";
    } else if (sec < 60) {
        return sec + " sec ago";
    }
};

export const formatData = (data :any) => {
    const formatedData: IHackerNewItem = {
        itemLabel: data.title,
        source: data.url ? data.url.split("/")[2] : '',
        noOfPoints: data.score,
        pointsBy: data.by,
        time: formatTime(data.time),
        noOfComments: data.descendants
    }
    return formatedData;
}