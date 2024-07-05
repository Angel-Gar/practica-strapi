export interface Book {
    id: number;
    attributes: Attributes2;
  }
  
  interface Attributes2 {
    title: string;
    description: string;
    slug: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
  }
  
  interface Image {
    data: Data;
  }
  
  interface Data {
    id: number;
    attributes: Attributes;
  }
  
  interface Attributes {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  }
  
  interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
  }
  
  interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
  }
  