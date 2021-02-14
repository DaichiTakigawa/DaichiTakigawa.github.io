import * as React from 'react';
import styled from '@emotion/styled';

import {Button} from '../../atoms';
import {rhythm} from '../../../lib/typography';

interface Props {
  logout(): void;
  submit(): void;
}

const PostButtons: React.FC<Props> = ({logout, submit}) => {
  return (
    <Contaienr className="field">
      <div className="control">
        <Button
          label={'ログアウト'}
          onClick={logout}
          color={'link'}
          isInverted
        />
      </div>
      <div className="control">
        <Button label={'投稿する'} onClick={submit} color={'link'} />
      </div>
    </Contaienr>
  );
};

const Contaienr = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  marginTop: rhythm(1 / 2),
  '& > div:not(:last-child)': {
    marginRight: rhythm(1 / 2),
  },
});

export default PostButtons;
