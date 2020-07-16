import apiUrls, { request } from './constant';

export const fetchTopStories = () => request.get(`${apiUrls.TOP_STORIES}`);

export const fetchNewestStories = () => request.get(`${apiUrls.NEWEST_STORIES}`);

export const fetchAskStories = () => request.get(`${apiUrls.ASK_STORIES}`);

export const fetchJobStories = () => request.get(`${apiUrls.JOBS_STORIES}`);

export const fetchShowStories = () => request.get(`${apiUrls.SHOW_STORIES}`);

export const fetchItems = (item) => {
    return request.get(`${apiUrls.ITEMS}/${item}.json`,
        {
            params: {
            print: 'pretty'
        }
    });
}

export const getPageContent = (url) => request.get(url);

export default {
    fetchTopStories,
    fetchNewestStories,
    fetchAskStories,
    fetchJobStories,
    fetchShowStories,
    fetchItems,
    getPageContent,
}