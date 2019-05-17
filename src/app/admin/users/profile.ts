export class UserProfile{
    userId:string;
    userName:string ;
    profile: string;
    postProfile:string;
    timelinePost:string;
    caption:string;
    tag:string;
    timeline:string;
    friends:Friends[];
    city:string;
    state:string;
    published:Date;
}

export class Friends{
    name:string;
    dp:string;
}
