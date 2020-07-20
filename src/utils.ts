import {IHackerNewItem} from "./components/organisms/HackerNewItem/HackerNewItem";

export const formatTime = (unixTime: number) => {
    const currentTime = Math.round((new Date()).getTime() / 1000);
    const timeDifference = currentTime - unixTime;
    const differenceDate = new Date(timeDifference * 1000);
    const diffHours = differenceDate.getUTCHours();
    const diffMinutes = differenceDate.getUTCMinutes();
    const diffSeconds = differenceDate.getUTCSeconds();

    if (diffHours < 24) {
        if (diffHours === 0) {
            return `${diffMinutes} minute`;
        }
        return `${diffHours} hours`;
    } else if (diffHours > 24) {
        return `${Math.floor( diffHours/ 24) } days`;
    }
};

export const formatData = (data :any) => {
    const formattedData: IHackerNewItem = {
        itemLabel: data.title,
        source: data.url ? data.url.split("/")[2] : '',
        noOfPoints: data.score,
        pointsBy: data.by,
        time: formatTime(data.time),
        html: data.text && data.text,
        kids: data.kids && data.kids,
        noOfComments: data.descendants
    }
    return formattedData;
}

export const getPageNo = ( urlSearch: string, query: string): number => {
    const queryValue = Number(new URLSearchParams(urlSearch).get(query));
    return queryValue ? queryValue : 1;
};
