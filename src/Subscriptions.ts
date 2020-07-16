import {PAGES} from "./constants";
import apis from "./api/apiCalls";

export const getSubscription = (page: string) => {
    switch (page) {
        case PAGES.NEWS:
            return apis.fetchTopStories();
        case PAGES.NEWEST:
            return apis.fetchNewestStories();
        case PAGES.JOBS:
            return apis.fetchJobStories();
        case PAGES.SHOW:
            return apis.fetchShowStories();
        case PAGES.ASK:
            return apis.fetchAskStories();
        default:
            return apis.fetchTopStories();
    }
}