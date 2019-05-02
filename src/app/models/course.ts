import {VIDEO} from './video';

export class Course {
    name: string;
    id: string;
    thumbnailImgUrl: string;
    teacher: string;
    ratingStar: number;
    ratingVotes: number;
    price: number;
    priceDiscount: number;
    description: string;
    arrVideo: VIDEO[];
}
