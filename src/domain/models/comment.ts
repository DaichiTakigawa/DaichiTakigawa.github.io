export interface Model {
  readonly id: number;
  readonly slug: string;
  readonly userName: string;
  readonly text: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface PostModel {
  slug: string;
  userId: string;
  userName: string;
  text: string;
}
