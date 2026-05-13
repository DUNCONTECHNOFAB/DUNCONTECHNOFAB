export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string;
  applications: string[];
  specifications: Record<string, string>;
  image: string;
  badge?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  discount?: string;
  badge: string;
  bannerImage?: string;
}

export interface Dealer {
  id: string;
  name: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  type: string;
  photo?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  hrContacts: { name: string; phone: string }[];
  founded: string;
  employees: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
}
