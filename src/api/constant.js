import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? 'https://hacker-news.firebaseio.com/v0' : '';

export const request = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
        "content-type": "application/json",
    },
});

const TOP_STORIES= 'topstories.json?print=pretty';
const ITEMS= 'item';

export default {
    TOP_STORIES,
    ITEMS
};
