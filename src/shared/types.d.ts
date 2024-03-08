export interface ShopCardsProps {
  tagTitle?: string;
  imageLink: string;
  imageAltDesc?: string;
  shopName?: string;
  location: string;
  link: string;
  ratingNum: number;
  rating?: number;
  phoneNumber?: string;
}

export interface FeatureCardProps {
  id: number;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface HomePageCTAProps {
  title: string;
  desc: string;
  btnUrl: string;
  bgUrl: string;
}

export interface TestimonialsTypes {
  id: number;
  imgUrl?: string;
  stars?: number;
  author?: string;
  company?: string;
  content: string;
}

export interface faq {
  id: number;
  question: string;
  answer: string;
}

export interface Marker {
  Remarks: string;
  address: string;
  contacted: string;
  date: string;
  desc: string;
  email: string;
  gstNum: string;
  id: string;
  isValid: string;
  lat: string;
  lng: string;
  message: string;
  name: string;
  phone: string;
  rowIndex: number;
  shop: string;
  shopLocation: string;
}
