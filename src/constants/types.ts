export interface Component {
  id: number;
  type: string;
  title: string;
  description: string;
  tag: string;
  code: string;
  props: Prop[];
}

export interface Prop {
  id: number;
  title: string;
  description: string;
}

export interface Item {
  id?: string;
  title: string;
  description: string;
}