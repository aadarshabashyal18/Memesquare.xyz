export interface Template {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  category: string;
  tags: string[];
}

export type LayerType = 'text' | 'emoji';

export interface MemeLayer {
  id: string;
  type: LayerType;
  content: string; // Acts as text content or emoji character
  x: number;
  y: number;
  fontSize: number;
  color: string;
  strokeColor: string;
  isDragging: boolean;
  rotation: number;
  isSelected: boolean;
}

export interface SavedMeme {
  id: string;
  dataUrl: string;
  date: string;
  templateName?: string;
}

export type Theme = 'light' | 'dark';

export interface Category {
  id: string;
  label: string;
}