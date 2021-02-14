/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {TextArea} from '../../atoms';
import Login from './Login';
import UserName from './UserName';
import PostButtons from './PostButtons';
import {UserContext} from '../../../contexts';
import {Comment} from '../../../domain/models';
import {rhythm} from '../../../lib/typography';

export interface PostAction {
  (comment: Comment.PostModel): void;
}

interface Props {
  slug: string;
  post: PostAction;
}

const Post: React.FC<Props> = ({slug, post}) => {
  const {user} = React.useContext(UserContext.Context);
  const [userName, setUserName] = React.useState('');
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  const submit = React.useCallback(() => {
    if (userName && text) {
      post({
        slug: slug,
        userName: userName,
        text: text,
      });
    }
  }, [userName, text]);

  const onTextChange = React.useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const onUserNameChange = React.useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [setUserName]
  );

  return (
    <PostContainer>
      <UserName
        userName={userName}
        onChange={onUserNameChange}
        disabled={!user}
      />
      <TextArea
        text={text}
        onChange={onTextChange}
        rows={6}
        placeholder={'コメントを投稿する'}
        size={'small'}
        disabled={!user}
      />
      {user ? <PostButtons submit={submit} /> : <Login slug={slug} />}
    </PostContainer>
  );
};

const PostContainer = styled.div({
  margin: rhythm(1 / 2),
});

export default Post;
