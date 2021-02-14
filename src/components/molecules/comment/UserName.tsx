/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {rhythm} from '../../../lib/typography';

interface Props {
  userName: string;
  onChange(_: React.ChangeEvent<HTMLInputElement>): void;
  disabled?: boolean;
}

const UserName: React.FC<Props> = ({userName, onChange, disabled = false}) => {
  const className = 'input is-small';

  return (
    <Container>
      <div>@</div>
      <div className={'control'}>
        <input
          value={userName}
          className={className}
          type={'text'}
          placeholder={'user name'}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  margin: `${rhythm(1 / 2)} 0`,
  maxWidth: rhythm(10),
  '& > div': {
    marginRight: rhythm(1 / 2),
  },
});

export default UserName;
