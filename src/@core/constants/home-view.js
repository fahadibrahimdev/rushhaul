import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Your New Delivery Partner!',
    text: 'Rushhaul offers on-demand delivery and transportation of items of all sizes and weights. The app works efficiently via a network of Rushhaul partners near you making it more efficient, and affordable than corporate delivery fees.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Track Progress',
            description: 'Use the in-app map to view the movement and progress of your delivery.',
            icon: 'steps-circle'
        },
        {
            title: 'Communicate',
            description: 'You can chat as well as call your chosen partner. ',
            icon: 'social-chat'
        },
        {
            title: 'Choose Delivery',
            description: 'It does not matter what item you want delivered. Rushhaul can deliver by car, bike, or even foot.',
            icon: 'fast-delivery'
        },
        {
            title: 'Review',
            description: 'Leave feedback on your overall experience dealing with a partner.',
            icon: 'review'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Rushhaul was designed to be a no-hassle platform where users can request the transportation of any item they require from something as small as carrying that extra grocery bag when you run out of hands, to delivering that antique piece of furniture safely in a van to your house. ',
        'In a world where transportation and delivery costs are going through the roof, the app makes use of an efficient network of people Rushhaul partners near you who can be with you in no time.'
    ],
}

export const benefitsContent = {
    heading: 'The App that Lends a Hand',
    text: 'Move over, the number of working days it takes to deliver your order or the heavy transportation costs for something tiny but important to you. There is bound to be a Rushhaul partner between you and the item you require, and they would love to lend you a hand. ',
    benefits: [
        {
            title: 'B2B',
            description: 'Businesses can put some of their delivery orders’ load on the app. Rushhaul will store the items in its warehouse and deliver orders as instructed by the business. ',
            icon: 'business-canvas'
        },
        {
            title: 'Affordable',
            description: 'Users can view estimates before placing their order. All they have to do is input the size and weight of the item on the app.',
            icon: 'place-bids'
        },
        {
            title: 'Fast',
            description: 'Unlike scheduling an order placement, Rushhaul connects you to the nearest partner from your location, thanks to geolocation technology.',
            icon: 'stopwatch-done'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Rushhaul Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Have an item that needs moving? Or a product that cannot be delivered fast enough?',
    text: 'Sign up to get early access to the Rushhaul app!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
