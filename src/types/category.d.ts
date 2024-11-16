interface TCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
  children: TCategory[];
  parent?: TCategory;
}
