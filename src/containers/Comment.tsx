import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectFormattedDateComments} from '../selectors/comments';
import {PostModel} from '../domain/models/comment';
import {Comment} from '../components/molecules';
import * as Comments from '../usecase/comments';

interface Props {
  slug: string;
}

const ConnectedComment: React.FC<Props> = ({slug}) => {
  const comments = useSelector(selectFormattedDateComments);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!comments[slug]) {
      dispatch(Comments.syncWithServer(slug));
    }
  }, []);

  const actions = React.useMemo(
    () => ({
      post(comment: PostModel) {
        dispatch(Comments.postAndSync(comment));
      },
      remove(id: number) {
        dispatch(Comments.removeAndSync(slug, id));
      },
    }),
    []
  );

  console.log(comments);
  return <Comment slug={slug} comments={comments[slug]} actions={actions} />;
};

export default ConnectedComment;
