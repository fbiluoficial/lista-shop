export interface Item {
  id: string;
  name: string;
  category: string;
  completed: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}