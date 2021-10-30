import { ActivityCommonProps } from "../ActivityUtilsInterfaces";
import { UserInterface } from "../User";

export interface Teacher {
  name: string;
}

export interface PostLikesItemInterface {
  _id: string;
  user: UserInterface;
}
export interface Member extends UserInterface {}
export interface Post {
  _id: string;
  content: string;
  author: UserInterface;
  allowComments: boolean;
  activities: Array<ActivityCommonProps<unknown>>;
  postLikes: Array<PostLikesItemInterface>;
}

export interface ClassRoomInterface {
  _id: string;
  teacher: Teacher;
  name: string;
  description?: string;
  members: Member[];
  code: string;
  color: string;
  tags: Array<string>;
  textColor?: string;
  posts: Array<Post>;
}