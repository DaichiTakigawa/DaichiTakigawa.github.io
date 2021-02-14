/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {Divider} from '../../atoms';
import {Comment} from '../../../domain/models';
import CommentList from './CommentList';
import {RemoveAction} from './CommentRow';
import Post, {PostAction} from './Post';

import {rhythm, scale} from '../../../lib/typography';

interface Props {
  slug: string;
  comments: Comment.Model[];
  actions: {
    post: PostAction;
    remove: RemoveAction;
  };
}

const CommentSection: React.FC<Props> = ({slug, comments, actions}) => {
  return (
    <Container>
      <H3>コメント</H3>
      <Comments data={comments} remove={actions.remove} />
      <Divider />
      <H3>投稿する</H3>
      <Post slug={slug} post={actions.post} />
    </Container>
  );
};

interface CommentsProps {
  data: Comment.Model[];
  remove: RemoveAction;
}

const Comments: React.FC<CommentsProps> = ({data, remove}) => {
  if (!data) {
    return (
      <CommentContainer>
        <p>この記事のコメントを読み込み中です</p>
      </CommentContainer>
    );
  } else if (data.length == 0) {
    return (
      <CommentContainer>
        <p>この記事にコメントはありません</p>
      </CommentContainer>
    );
  } else {
    return (
      <CommentContainer>
        <CommentList data={data} remove={remove} />
      </CommentContainer>
    );
  }
};

const H3 = styled.h3({
  fontWeight: 'bold',
  lineHeight: scale(1 / 2).lineHeight,
  fontSize: scale(1 / 2).fontSize,
});

const Container = styled.div({
  marginTop: rhythm(4),
});

const CommentContainer = styled.div({
  '& > p': {
    margin: rhythm(1 / 2),
  },
});

export default CommentSection;
