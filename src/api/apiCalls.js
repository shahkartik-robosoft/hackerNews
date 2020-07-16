import apiUrls, { request } from './constant';

export const fetchTopStories = () => {
    return request.get(`${apiUrls.TOP_STORIES}`);
}

export const fetchNewestStories = () => {
    return request.get(`${apiUrls.NEWEST_STORIES}`);
}

export const fetchAskStories = () => {
    return request.get(`${apiUrls.ASK_STORIES}`);
}

export const fetchJobStories = () => {
    return request.get(`${apiUrls.JOBS_STORIES}`);
}

export const fetchShowStories = () => {
    return request.get(`${apiUrls.SHOW_STORIES}`);
}

export const fetchItems = (item) => {
    return request.get(`${apiUrls.ITEMS}/${item}.json`,
        {
            params: {
            print: 'pretty'
        }
    });
}

export default {
    fetchTopStories,
    fetchNewestStories,
    fetchAskStories,
    fetchJobStories,
    fetchShowStories,
    fetchItems
}