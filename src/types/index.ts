export interface HeroBlock {
  type: 'hero';
  imageURI: string;
}

export interface ImageTextBlock {
  type: 'image-text';
  imageURI: string;
  text: string;
  title?: string;
  leftToRight?: boolean;
}

export interface DataBlock {
  type: 'data';
  url: string;
}
