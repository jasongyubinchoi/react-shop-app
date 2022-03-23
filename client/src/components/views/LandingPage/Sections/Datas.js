const lengths = [
    {"id": 1,
    "name": "Short"
    },
    {"id":2,
    "name":"Medium"},
    {"id": 3,
    "name": "Long"
    },
    {"id":4,
    "name":"Extra Long"}
]
const locations = [
    {
        "id" : 1,
        "name": "Within 5 miles",
        "array" : [0,5]

    },
    {
        "id" : 2,
        "name": "Within 5 to 10 miles",
        "array" : [5,10]

    },
    {
        "id" : 3,
        "name": "Within 10 to 25 miles",
        "array" : [10,25]

    }
] 
const environments = [
    {"id": 1,
    "name": "Salon"
    },
    {"id":2,
    "name":"Mobile"},
    {"id": 3,
    "name": "Salon Suite"
    },
    {"id":4,
    "name":"Home-based"}
]
const ratings = [
    {"id": 1,
    "name": "⭐"
    },
    {"id":2,
    "name":"⭐⭐"},
    {"id": 3,
    "name": "⭐⭐⭐"
    },
    {"id":4,
    "name":"⭐⭐⭐⭐"},
    {"id":5,
    "name":"⭐⭐⭐⭐⭐"}
]
const shapes = [
    {"id": 1,
    "name": "Coffin"
    },
    {"id":2,
    "name":"Almond"},
    {"id": 3,
    "name": "Square"
    },
    {"id":4,
    "name":"Stiletto"},
    {
        "id":5,
        "name":"Ballerina"
    }
]

const types = [
    {"id": 1,
    "name": "Hard Gel"
    },
    {"id":2,
    "name":"Acrylic"},
    {"id": 3,
    "name": "Polygel"
    },
    {"id":4,
    "name":"Soft Gel"},
    {
    "id":5,
    "name":"Dip Powder"
    },
    {
    "id":5,
    "name":"Gel-X"
        }
]
const enhancementExtensions = [
    {"id": 1,
    "name": "Sculpting Forms"
    },
    {"id":2,
    "name":"Tips"},
    {"id": 3,
    "name": "Cruved Tips"
    },
    {"id":4,
    "name":"Dual"}
]
const services = [
    {"id": 1,
    "name": "Natural Nail Care"
    },
    {"id":2,
    "name":"Pedicure"},
    {"id": 3,
    "name": "Artificial Nail Enhancements"
    }
]
const nailArts = [
    {"id": 1,
    "name": "Gel Polish"
    },
    {"id":2,
    "name":"Regular Polish"}
]

export {
    locations,lengths, services, environments, ratings, shapes, types,
    enhancementExtensions, nailArts
}