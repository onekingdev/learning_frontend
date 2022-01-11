import { IStudent } from './student';

export interface IStudentCollectible {
    id: string;
    identifier: string;
    isActive: boolean;
    randomSlug: string;
    collectible: ICollectible;
    student: IStudent;
}

export interface ICollectiblePurchaseTransaction{
    id: string;
    identifier: string;
    randomSlug: string;
    date: Date;
    comment: string;
    amount: number;
    collectible: ICollectible;
    side: string;
}

export interface ICollectible {
    id: string;
    identifier: string;
    isActive: boolean;
    randomSlug: string;
    image: string;
    price: number;
    name: string;
    category: ICollectibleCategory;
    collectiblepurchasetransactionSet: ICollectiblePurchaseTransaction[];
    studentcollectibleSet: IStudentCollectible[];
    description: string;
    owned: boolean;
}

export interface ICollectibleCategory {
    id: string;
    identifier: string;
    isActive: boolean;
    randomSlug: string;
    image: string;
    lft: number;
    rght: number;
    treeId: number;
    level: number;
    subCategories: ICollectibleCategory[];
    parent: ICollectibleCategory;
    collectibleSet: ICollectible[];
    name: string;
}
