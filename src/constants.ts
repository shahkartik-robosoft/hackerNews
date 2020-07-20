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
export const pastPages: Array<PAGES> = [ PAGES.NEWEST, PAGES.COMMENTS ];
export const discussPages: Array<PAGES> = [ PAGES.NEWEST ];
export const showCommentsPages: Array<PAGES> = [ PAGES.NEWS, PAGES.ASK, PAGES.SHOW, PAGES.COMMENTS ];
export const detailsPages: Array<PAGES> = [ PAGES.NEWEST, PAGES.NEWS, PAGES.ASK, PAGES.SHOW, PAGES.COMMENTS ];
export const favouritePages: Array<PAGES> = [ PAGES.COMMENTS ];