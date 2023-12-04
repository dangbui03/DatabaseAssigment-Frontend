type movie = {
    ID: number,
    MNAME: string,
    GENRE: string,
    RELEASEDAT: number,
    AGE_RESTRIC: number,
    MLANGUAGE: string,
    DIRECTOR: string,
    PERFORMER: string,
    NATION: string,
    DURATION: string,
    M_ID: string | null,
    MDESCRIPTION: string,
}

type movieScreening = {
    ID: number,
    RNUMBER: string,
    MOVIETIME: string,
}

type ticket = {
    TID: string,
    ID: number,
    RNUMBER: string,
    MOVIETIME: string,
    T_PRICE: number,
    S_RNUMBER: string,
    ROWNUM: string,
    COLUMNNUM: string,
}

type room = {
    RNUMBER: string,
    SEATNUM: number,
}

type customer = {
    CID: string,
    C_NAME: string,
    DATE_BIRTH: string,
    PHONENUM: string,
    HOMENUM: string,
    STREETNANE: string,
    DISTRICT: string,
    CITY: string,
}

type review = {
    CID: string,
    ID: number,
    T_TID: string,
    T_ID: number,
    T_RNUMBER: string,
    T_MOVIETIME: string,
    E_POINT: number,
}

type buy_ticket = {
    TID: string,
    ID: number,
    RNUMBER: string,
    MOVIETIME: string,
    CID: string,
}