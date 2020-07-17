export const MAX_ITEM_IN_A_PAGE = 30;

export enum PAGES {
    NEWS= 'news',
    NEWEST= 'newest',
    COMMENTS= 'comments',
    ASK= 'ask',
    SHOW= 'show',
    JOBS= 'jobs',
    GUIDELINE= 'Guideline',
    FAQ= 'faq',
}

export const MAP_URL: any = {
    news: 'newest',
    comments: 'newcomments',
    ask: 'ask',
    show: 'show',
    jobs: 'jobs',
    Guideline: 'guideline',
    FAQ: 'faq',
}

export const hidePages: Array<PAGES> = [ PAGES.NEWS, PAGES.NEWEST, PAGES.COMMENTS ];
export const pastPages = [ PAGES.NEWEST, PAGES.COMMENTS ];
export const discussPages = [ PAGES.NEWEST ];
export const showCommentsPages = [ PAGES.NEWS, PAGES.ASK, PAGES.SHOW, PAGES.COMMENTS ];
export const detailsPages = [ PAGES.NEWEST, PAGES.NEWS, PAGES.ASK, PAGES.SHOW, PAGES.COMMENTS ];
export const favouritePages = [ PAGES.COMMENTS ];