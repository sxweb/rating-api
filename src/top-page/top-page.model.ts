export enum TopLevelCategory{
    Courses,
    Services,
    Books,
    Products
}

export class TopPageModel {
    firstLevelCategory: TopLevelCategory;
    secondCategory:string;
    title:string;
    category:string;
    hh?:{
        count:number;
        juniorSalary:number;
        middleSalary:number;
        seniorSalary:number;
    };
    advantages:{
        title:string;
        description:string;
    }[];
    tagsTitle:string;
    seoText:string;
    tags:string[];
}
