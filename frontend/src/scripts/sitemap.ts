export const BASE_URL = '';

export const staticRoutes = [
    '/',
    '/About',
    '/Achievements',
    '/Projects',
    '/Blogs',
    '/Chatbot',
];

export const dynamicRoutes = async () =>{
    return [
        '/Projects/:repo'
    ]
}