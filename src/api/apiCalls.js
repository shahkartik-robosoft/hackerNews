import apiUrls, { request } from './constant';

export const fetchTopStories = () => {
    return request({
        url: `${apiUrls.TOP_STORIES}`,
        method: "get",
    });

}

export const fetchItems = (item) => {
    return request({
        url: `${apiUrls.ITEMS}/${item}.json`,
        method: "get",
        params: {
            print: 'pretty'
        }
    });

}

export default {
    fetchTopStories,
    fetchItems
}