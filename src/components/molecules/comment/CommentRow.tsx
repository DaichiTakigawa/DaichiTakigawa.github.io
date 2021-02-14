/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {Ellipsis} from '../../atoms';
import {Comment} from '../../../domain/models';
import {rhythm, scale} from '../../../lib/typography';

export interface RemoveAction {
  (id: number): void;
}

interface Props {
  comment: Comment.Model;
  remove: RemoveAction;
}

const CommentRow: React.FC<Props> = ({comment, remove}) => {
  return (
    <Container>
      <Header>
        <UserName>{`@ ${comment.userName}`}</UserName>
        <FlexRowDiv>
          <UpdatedAt>{comment.createdAt}</UpdatedAt>
          <Ellipsis
            menuLabels={['コメントを削除']}
            onSelectMenu={() => {
              remove(comment.id);
            }}
          />
        </FlexRowDiv>
      </Header>
      <p>{comment.text}</p>
    </Container>
  );
};

const Container = styled.div({
  margin: `0 ${rhythm(1 / 2)}`,
  '& > p': {
    fontWeight: 'lighter',
    margin: rhythm(1 / 2),
    lineHeight: scale(0).lineHeight,
    fontSize: scale(0).fontSize,
  },
});

const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const UserName = styled.div({
  lineHeight: scale(0).lineHeight,
  fontSize: scale(0).fontSize,
});

const UpdatedAt = styled.div({
  lineHeight: scale(0).lineHeight,
  fontSize: scale(0).fontSize,
});

const FlexRowDiv = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

export default CommentRow;
