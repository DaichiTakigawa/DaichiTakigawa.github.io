/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {TextArea} from '../../atoms';
import LoginButtons from './LoginButtons';
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
  const {user, setUser} = React.useContext(UserContext.Context);
  const [text, setText] = React.useState('');

  const submit = React.useCallback(() => {
    console.log(user);
    console.log(user && user.name);
    console.log(text);
    if (user && user.name && text) {
      console.log('post');
      post({
        slug: slug,
        userId: 'hogehoge@example.com',
        userName: user.name,
        text: text,
      });
    }
  }, [user, text]);

  const logout = React.useCallback(() => {
    console.log('logout');
    setUser(null);
    setText('');
  }, []);

  const onTextChange = React.useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const onUserNameChange = React.useCallback(
    (e) => {
      setUser({...user, name: e.target.value});
    },
    [setUser]
  );

  console.log(!user);
  return (
    <PostContainer>
      <UserName
        userName={(user && user.name) || ''}
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
      {user ? (
        <PostButtons logout={logout} submit={submit} />
      ) : (
        <LoginButtons />
      )}
    </PostContainer>
  );
};

const PostContainer = styled.div({
  margin: rhythm(1 / 2),
});

export default Post;
