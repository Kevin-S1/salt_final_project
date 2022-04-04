import {UrlWithStringQuery} from "url";
import {SpawnSyncOptionsWithStringEncoding} from "child_process";

export type userDetails = {
    city : string,
    country: string,
    phoneNumber: string
}

export type addToyDto = {
    name : string,
    description : string,
    userId : number,
    age : number,
    category : number
}
// toy details page
export type toyDetails = {
    id: number,
    name: string,
    description: string,
    userId: number,
    userName: string,
    image: string,
    userEmail: string,
    phoneNumber: string,
    userCity: string,
    user: user,
    userCountry: string,
    status: number,
    category: number,
    age: number
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
    toys:Array<toyDetails>,
    ratings:Array<rating>,
    sub:string
}

export type user = {
    id: string,
    userName:string,
    city:string,
    country : string,
    phoneNumber:string,
}