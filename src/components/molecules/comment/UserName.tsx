/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {rhythm} from '../../../lib/typography';

interface Props {
  userName: string;
  onChange(_: React.ChangeEvent<HTMLInputElement>): void;
  disabled?: boolean;
  errorMessage?: string;
}

const UserName: React.FC<Props> = ({
  userName,
  onChange,
  disabled = false,
  errorMessage,
}) => {
  let inputClassName = 'input is-small';

  if (errorMessage) {
    inputClassName = inputClassName + ' is-danger';
  }

  return (
    <Container className={'field'}>
      <div>@</div>
      <div className={'control'}>
        <input
          value={userName}
          className={inputClassName}
          type={'text'}
          placeholder={'user name'}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
      {errorMessage ? <p className={'help is-danger'}>{errorMessage}</p> : null}
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
