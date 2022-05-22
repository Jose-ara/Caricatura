export class GeneralInfo {
    info: InfoModel;
    results: UsersModel;
}

export class UsersModel{
    id: number;
    created: Date;
    gender: string;
    episode?: string;
    image: string;
    location: LocationModel;
    name: string;
    origin: OriginModel;
    species: string;
    status: string;
    type?: string;
    url: string;
}

export class LocationModel {
    name: string;
    url: string;
}

export class OriginModel{
    name: string;
    url: string
}

export class InfoModel {
    info: DetailsModel
}

export class DetailsModel {
     count : number;
     pages : number;
     next : string;
     prev? : string;
}