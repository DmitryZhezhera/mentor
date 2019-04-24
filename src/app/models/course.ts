import {VIDEO} from './video';

export class Course {
    name: string;
    id: string;
    thumbnailImgUrl: string;
    thumbnailImgFile: any;
    teacher: string;
    ratingStar: number;
    ratingVotes: number;
    price: number;
    priceDiscount: number;
    description: string;
    arrVideoLinks: VIDEO[];
}
