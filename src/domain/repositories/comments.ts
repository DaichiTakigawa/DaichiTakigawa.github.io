import {AxiosResponse} from 'axios';
import api from '../../lib/api';
import {Comment} from '../models';
import {Model as CommentModel} from '../models/comment';

interface GetCommentsBody {
  comments: CommentModel[];
}

type GetCommentsResponse = AxiosResponse<GetCommentsBody>;

interface PostCommentBody {
  comment: CommentModel;
}

type PostCommentResponse = AxiosResponse<PostCommentBody>;

type DeleteCommentResponse = AxiosResponse<null>;

export async function getAll(slug: string) {
  const response: GetCommentsResponse = await api.get(`/comment?slug=${slug}`);
  if (200 <= response.status && response.status < 300) {
    return response.data;
  }
}

export async function post(comment: Comment.PostModel) {
  const response: PostCommentResponse = await api.post(`/comment`, {
    comment: comment,
  });
  if (200 <= response.status && response.status < 300) {
    return response.data;
  }
}

export async function remove(id: number) {
  const response: DeleteCommentResponse = await api.delete(`/comment?id=${id}`);
  if (200 <= response.status && response.status < 300) {
    return true;
  } else {
    return false;
  }
}
