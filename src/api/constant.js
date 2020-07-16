import Axios from 'axios-observable';

export const baseURL = process.env.NODE_ENV === 'development' ? 'https://hacker-news.firebaseio.com/v0' : '';

export const request = Axios.create({
    baseURL,
    timeout: 60000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

const TOP_STORIES= 'topstories.json?print=pretty';
const NEWEST_STORIES= 'newstories.json?print=pretty';
const ASK_STORIES= 'askstories.json?print=pretty';
const JOBS_STORIES= 'jobstories.json?print=pretty';
const SHOW_STORIES= 'showstories.json?print=pretty';
const ITEMS= 'item';

export default {
    TOP_STORIES,
    NEWEST_STORIES,
    ASK_STORIES,
    JOBS_STORIES,
    SHOW_STORIES,
    ITEMS
};
