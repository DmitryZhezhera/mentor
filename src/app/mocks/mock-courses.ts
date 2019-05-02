import {Course} from '../models/course';

export const COURSES: Course[] = [
    {
        id: '1',
        thumbnailImgUrl: 'url1',
        name: 'course1',
        teacher: 'teacher1',
        ratingStar: 5,
        ratingVotes: 125,
        price: 200,
        priceDiscount: 0,
        description: 'my awesome course 1',
        arrVideo: []
    },
    {
        id: '2',
        thumbnailImgUrl: 'url2',
        name: 'course2',
        teacher: 'teacher1',
        ratingStar: 4,
        ratingVotes: 150,
        price: 199,
        priceDiscount: 180,
        description: 'my awesome course 2',
        arrVideo: []
    },
    {
        id: '3',
        thumbnailImgUrl: 'url3',
        name: 'course3',
        teacher: 'teacher3',
        ratingStar: 4.5,
        ratingVotes: 151,
        price: 200,
        priceDiscount: 190,
        description: 'my awesome course 3',
        arrVideo: []
    },
];
