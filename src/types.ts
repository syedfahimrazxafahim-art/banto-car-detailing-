export interface BusinessInfo {
  name: string;
  location: string;
  phone: string;
  phoneRaw: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
  primaryService: string;
  logoUrl: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isPrimary?: boolean;
  features: string[];
  imageUrl: string;
}

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  isPopular?: boolean;
  actionText: string;
  note: string;
  highlights: string[];
}

export interface ValuePoint {
  title: string;
  description: string;
}

export interface SampleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  serviceMentioned: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  message: string;
}
