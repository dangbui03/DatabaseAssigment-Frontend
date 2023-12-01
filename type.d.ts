type movie = {
    ID: string,
    MNAME: string,
    GENRE: string,
    RELEASEDAT: number,
    AGE_RESTRIC: number,
    MLANGUAGE: string,
    DIRECTOR: string,
    PERFORMER: string,
    NATION: string,
    MTIME: string,
    M_ID: string | null,
    MDESCRIPTION: string,
}

type movieScreening = {
    ID: string,
    RNUMBER: string,
    MOVIETIME: string,
    MSSTARTIME: string
}