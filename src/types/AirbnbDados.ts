export interface ArbnbApi{
    accommodation: Accommodation[]
    icons: Photo[]
}

export interface Accommodation {
    number: number
    date: string
    host: string
    id: string
    title: string
    slug: string
    location: Location
    hasBadge: boolean
    price: number
    rating: number
    testimonials: Testimonial[]
    photos: Photo[]
}

export interface Location{
    description: string
    city: string
    state: string
    country: string
}
export interface Testimonial{
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number,
    createdAt: number,
    stayedAt: number
}

export interface Photo{
    id: string
    source: string
    description: string
    url: string
}


