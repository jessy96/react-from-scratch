const movies = [
    {
        "id": 1,
        "name": "Pulp Fiction",
        "icon": "pulp-fiction.png",
        "year": 2004,
        "genres": [{
            "id": 7,
            "name": "Action & Adventure"
    
        }]
    },
    {
        "id": 2,
        "name": "Bohemian Rhapsody",
        "icon": "bohemian_rhapsody.png",
        "year": 2003,
        "genres": [
            {
                "id": 6,
                "name": "Drama"
            },
            {
                "id": 8,
                "name": "Biography"
        
            },
            {
                "id": 9,
                "name": "Music"
        
            }  
        ]
    },
    {
        "id": 3,
        "name": "Kill Bill: Vol 2",
        "icon": "kill_bill_vol2.png",
        "year": 1994,
        "genres": [
            {
                "id": 10,
                "name": "Oscar winning Movie"
            }
        ]
    },
    {
        "id": 4,
        "name": "Avangers: War of Infinity",
        "icon": "avengers.png",
        "year": 2004,
        "genres": [
            {
                "id": 7,
                "name": "Action & Adventure"
        
            }
        ]
    },
    {
        "id": 5,
        "name": "Inception",
        "icon": "inception.png",
        "year": 2003,
        "genres": [
            {
                "id": 7,
                "name": "Action & Adventure"
        
            }
        ]
    },
    {
        "id": 6,
        "name": "Reservoir dogs",
        "icon": "reservoir_dogs.png",
        "year": 1994,
        "genres": [
            {
                "id": 10,
                "name": "Oscar winning Movie"
            }
        ]
    },
];

export function getAllMovies(){
    return movies;
}

export function getFirstMovies(size){
    return movies.slice(0, size);
}