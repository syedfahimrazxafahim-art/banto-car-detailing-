import { BusinessInfo, GalleryItem, PackageItem, SampleReview, ServiceItem, ValuePoint } from '../types';

export const ASSETS = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816249/719598015_122111858325319616_7909341571791964852_n.jpg',
  heroBg: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816247/car_detailing.jpg',
  aboutImg: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816219/U4v3fY5L6JcQVgVWOZ644xgtB7Pk6rIYAhJ7JOMS.webp',
  serviceImg: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816222/images.jpg',
  whyChooseUsBg: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816231/images_4.jpg',
  ctaBg: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816226/images_5.jpg',
};

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Banto Auto Detailing',
  location: 'Los Angeles, California',
  phone: '213-956-2029',
  phoneRaw: '2139562029',
  email: 'bantoautodetailing@gmail.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61589588500487',
  instagramUrl: 'https://www.instagram.com/bantoadetailing',
  primaryService: 'Car Washing',
  logoUrl: ASSETS.logo,
  stats: [
    {
      value: '10+',
      label: 'Years Experience',
    },
    {
      value: '500+',
      label: 'Vehicles Detailed',
    },
    {
      value: '100%',
      label: 'Customer Satisfaction',
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'car-washing',
    title: 'Car Washing',
    subtitle: 'Primary Signature Service',
    description:
      'Our primary specialized offering delivering an immaculate exterior and surface finish tailored to preserve your vehicle’s clear coat, rims, and deep luster in the Los Angeles climate.',
    isPrimary: true,
    features: [
      'Precision multi-stage hand wash technique',
      'Gentle paint-safe microfiber care',
      'Rim, wheel well, and tire sidewall cleaning',
      'Streak-free spot-free rinse and dry',
      'Glass and mirror crystal clarity finish',
    ],
    imageUrl: ASSETS.serviceImg,
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'basic-detail',
    name: 'Basic Detail',
    description:
      'Essential car washing care focused on thorough exterior cleaning and surface refreshment.',
    isPopular: false,
    actionText: 'Book Now',
    note: 'Custom estimate based on vehicle size & condition',
    highlights: [
      'Comprehensive exterior wash',
      'Wheel & tire surface clean',
      'Spot-free glass treatment',
      'Clean vehicle delivery',
    ],
  },
  {
    id: 'premium-detail',
    name: 'Premium Detail',
    description:
      'Our most requested detailing package, providing elevated care and precision finish for daily and luxury vehicles.',
    isPopular: true,
    actionText: 'Book Now',
    note: 'Custom estimate based on vehicle size & condition',
    highlights: [
      'Detailed multi-stage wash',
      'Deep wheel face and barrel attention',
      'Exterior trim and surface dressing',
      'Enhanced gloss and clarity finish',
    ],
  },
  {
    id: 'full-detail',
    name: 'Full Detail',
    description:
      'Extensive vehicle treatment designed to rejuvenate both visual presence and exterior touchpoints.',
    isPopular: false,
    actionText: 'Request Details',
    note: 'Custom estimate based on vehicle size & condition',
    highlights: [
      'Full exterior hand treatment',
      'Delicate surface decontamination wash',
      'Protective gloss sealant application',
      'Tire conditioning & glass shine',
    ],
  },
  {
    id: 'ultimate-detail',
    name: 'Ultimate Detail',
    description:
      'The pinnacle of vehicle pampering, delivering maximum aesthetic perfection and meticulous craftsmanship.',
    isPopular: false,
    actionText: 'Request Details',
    note: 'Custom estimate based on vehicle size & condition',
    highlights: [
      'Exhaustive bespoke vehicle treatment',
      'Ultra-refined rim and paint cleansing',
      'Deep gloss enhancement',
      'White-glove inspection finish',
    ],
  },
];

export const VALUE_POINTS: ValuePoint[] = [
  {
    title: 'Premium Quality',
    description: 'Attention to every detail.',
  },
  {
    title: 'Professional Service',
    description: 'Experienced detailing specialists.',
  },
  {
    title: 'Attention to Detail',
    description: 'Every surface treated carefully.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your vehicle, our priority.',
  },
];

export const SAMPLE_REVIEWS: SampleReview[] = [
  {
    id: 'sample-1',
    author: 'Sample Client A.',
    rating: 5,
    text: 'Outstanding attention to detail on my black sedan. The car wash left zero streaks, and the paint finish was mirror-like. Truly top-tier automotive care in Los Angeles.',
    serviceMentioned: 'Car Washing / Premium Detail',
    date: 'Sample Review',
  },
  {
    id: 'sample-2',
    author: 'Sample Client B.',
    rating: 5,
    text: 'Prompt, professional, and courteous. They handled my vehicle with immense respect. It looked brand new when I drove off. Highly recommend their services.',
    serviceMentioned: 'Car Washing',
    date: 'Sample Review',
  },
  {
    id: 'sample-3',
    author: 'Sample Client C.',
    rating: 5,
    text: 'The best car wash experience in LA. From the rims to the hood reflections, every inch received meticulous care. Will be returning regularly.',
    serviceMentioned: 'Full Detail',
    date: 'Sample Review',
  },
  {
    id: 'sample-4',
    author: 'Sample Client D.',
    rating: 5,
    text: 'A truly luxury finish. The paint reflections and wheel detailing were flawless. Extremely satisfied with their dedicated standard of work.',
    serviceMentioned: 'Ultimate Detail',
    date: 'Sample Review',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Signature Hand Wash & Detail',
    category: 'Exterior Finish',
    description: 'Precision multi-stage vehicle detailing lifting road grime and restoring deep glossy reflections.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816247/car_detailing.jpg',
  },
  {
    id: 'g-2',
    title: 'Mirror Gloss Reflection',
    category: 'Surface Clarity',
    description: 'Pristine paint depth and optical mirror reflection achieved through delicate paint-safe hand washing.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816242/images_1.jpg',
  },
  {
    id: 'g-3',
    title: 'Wheel, Rim & Tire Detailing',
    category: 'Exterior Focus',
    description: 'Deep brake dust removal and metallic rim shine with pH-balanced specialized wash and dressing.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816239/images_2.jpg',
  },
  {
    id: 'g-4',
    title: 'Pre-Wash Snow Foam Treatment',
    category: 'Technique Showcase',
    description: 'High-density snow foam lifting road film safely without scratching delicate clear coat.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816235/images_3.jpg',
  },
  {
    id: 'g-5',
    title: 'Deep Shadow & Clear Finish',
    category: 'Finish Reflection',
    description: 'Rich dark paint showing zero streakiness under direct studio and California sunlight conditions.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816231/images_4.jpg',
  },
  {
    id: 'g-6',
    title: 'Complete Vehicle Exterior Care',
    category: 'Full Treatment',
    description: 'Exacting standards applied across all contours, body panels, and exterior vehicle touchpoints.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816219/U4v3fY5L6JcQVgVWOZ644xgtB7Pk6rIYAhJ7JOMS.webp',
  },
  {
    id: 'g-7',
    title: 'Precision Surface Cleanse',
    category: 'Car Washing',
    description: 'Gentle paint-safe microfiber hand care ensuring streak-free spot-free vehicle delivery.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816222/images.jpg',
  },
  {
    id: 'g-8',
    title: 'Glass & Trim Crystal Clarity',
    category: 'Detailing Care',
    description: 'Spot-free glass treatment and rich exterior trim conditioning for a complete showroom presence.',
    imageUrl: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788816226/images_5.jpg',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];
