export interface Model {
  readonly id: number;
  readonly slug: string;
  readonly userId: string;
  readonly userName: string;
  readonly text: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface PostModel {
  slug: string;
  userName: string;
  text: string;
}
