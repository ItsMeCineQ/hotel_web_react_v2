import hotel from '../img/hotel.jpg'
import hotel2 from '../img/about_us_img-1.jpeg'
import hotel3 from '../img/about_us_img-2.jpg'
import hotel4 from '../img/slider_hotel5.jpeg'

export const hotels = {
    OldTown : {
        name: 'Old Town Hotel',
        address: {
            city: 'Kraków',
            street: 'Świętego Tomasza',
            number: 21,
            localization: [50.0636644, 19.9367054],
        },
        rooms: {
            standard: [1, 2, 3, 4],
            premium: [5, 6, 7, 8],
            deluxe: [9, 10, 11, 12],
        },
        price: {
            standard: 250,
            premium: 300,
            deluxe: 400,
        },

        reviews: {
            reviews_users: [
                'John',
                'Sarah',
                'Tom',
                'Betty',
                'Max'
            ],
            reviews_rates: [5, 4.5, 5, 4, 5],
            reviews_text: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?'
            ],
        },
        image: hotel,
        availableDates: [],
    },
    
    Cracow : {
        name: 'Cracow Hotel',
        address: {
            city: 'Kraków',
            street: 'Józefa Starego',
            number: 59,
            localization: [50.0569229, 19.9410478],
        },
        rooms: {
            standard: [101, 102, 103],
            premium: [201, 202, 203],
            superior: [301, 302, 303],
            deluxe: [401, 402, 403],
        },
        price: {
            standard: 300,
            premium: 370,
            superior: 450,
            deluxe: 500,
        },
        reviews: {
            reviews_users: [
                'Bartosz',
                'Maciej',
                'Karolina',
                'Anna',
                'Aleksandra'
            ],
            reviews_rates: [5, 4, 4, 4, 4.5],
            reviews_text: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?'
            ],
        },
        image: hotel2,
        availableDates: [],
    },
    
    Wawel : {
        name: 'Wawel Hotel',
        address: {
            city: 'Kraków',
            street: 'Podzamcze',
            number: 33,
            localization: [50.0557622, 19.9333749],
        },
        rooms: {
            premium: [1.1, 1.2, 1.3],
            superior: [2.1, 2.2, 2.3],
            deluxe: [3.1, 3.2, 3.3],
        },
        price: {
            premium: 350,
            superior: 400,
            deluxe: 460,
        },
        reviews: {
            reviews_users: [
                'Ted',
                'Kate',
                'Marcin',
                'Kasia',
                'James'
            ],
            reviews_rates: [5, 5, 4, 4, 4.5],
            reviews_text: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?'
            ],
        },
        image: hotel3,
        availableDates: [],
    },
    
    Station : {
        name: 'Main Station Hotel',
        address: {
            city: 'Kraków',
            street: 'Lubicz',
            number: 64,
            localization: [50.0647482, 19.9471013],
        },
        rooms: {
            standard: [1, 2, 3, 4, 5, 6],
            premium: [7, 8, 9, 10, 11, 12],
        },
        price: {
            standard: 250,
            premium: 300,
        },
        reviews: {
            reviews_users: [
                'Tony',
                'Jessica',
                'Martyna',
                'Mat',
                'Grzesiek'
            ],
            reviews_rates: [5, 5, 5, 4, 5],
            reviews_text: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?'
            ],
        },
        image: hotel4,
        availableDates: [],
    },
}
