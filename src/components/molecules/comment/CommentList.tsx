import * as React from 'react';

import {Divider} from '../../atoms';
import CommentRow, {RemoveAction} from './CommentRow';
import {Comment} from '../../../domain/models';

interface Props {
  data: Comment.Model[];
  remove: RemoveAction;
}

const CommentList: React.FC<Props> = ({data, remove}) => {
  return (
    <>
      {data &&
        data.map((comment) => (
          <React.Fragment key={comment.id}>
            <Divider />
            <CommentRow comment={comment} remove={remove} />
          </React.Fragment>
        ))}
    </>
  );
};

export default CommentList;
