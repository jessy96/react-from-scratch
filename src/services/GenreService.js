const genres = [
    {
        "id": 1,
        "name": "All"
    },
    {
        "id": 2,
        "name": "Documentary"
    },
    {
        "id": 3,
        "name": "Comedy"
    },
    {
        "id": 4,
        "name": "Horror"

    },
    {
        "id": 5,
        "name": "Crime"

    },
    {
        "id": 6,
        "name": "Drama"

    },
    {
        "id": 7,
        "name": "Action & Adventure"

    },
    {
        "id": 8,
        "name": "Biography"

    },
    {
        "id": 9,
        "name": "Music"

    },
    {
        "id": 10,
        "name": "Oscar winning Movie"

    }
];

export function getAllGenres(){
    return genres;
}

export function getFirstGenres(size){
    return genres.slice(0, size);
}