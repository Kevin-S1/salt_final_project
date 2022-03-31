import {UrlWithStringQuery} from "url";
import {SpawnSyncOptionsWithStringEncoding} from "child_process";

export type userDetails = {
    city : string,
    country: string,
    phoneNumber: string
}

export type toy = {
    name : string,
    description : string,
    userId : number
}

export type toyDetails = {
    id: number,
    name: string,
    description: string,
    userId: number,
    userName: string,
    imgUrl: string,
    userEmail: string,
    phoneNumber: string
}

export type rating = {
    ratingValue : number,
    userId : string
}


export type InitialUserDetails = {
    city : string,
    country : string,
    email: string,
    id: number,
    name: string,
    phoneNumber:string,
    picture:string,
    userName:string,
    toys:Array<toy>,
    ratings:Array<rating>,
    sub:string
}