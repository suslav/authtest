export interface UsersDo {
    Ids: number;
    userName: string;
    email: string;
    passwords: string;
    usertypes: [UserTypeDb];
}

export interface UserTypeDb {
    userTypeId: number;
}
