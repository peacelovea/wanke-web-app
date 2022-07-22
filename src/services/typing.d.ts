declare namespace API {
  type Resource = {
    id: number;
    method: string;
    name: string;
    parentId: number;
    type: number;
    url: string;
  };

  type ListItemType = {
    name: string;
    desc: string;
  };
}
