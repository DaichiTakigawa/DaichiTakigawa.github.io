import * as React from 'react';

const Info: React.FC = () => {
  return (
    <>
      <p>競技プログラミングやっています。 </p>
      <div>
        <ul>
          <li>
            Atcoder :{' '}
            <a
              href="https://atcoder.jp/users/Bobyama"
              target="_blank"
              rel="noopener noreferrer">
              https://atcoder.jp/users/Bobyama{' '}
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li>
            TopCoder :{' '}
            <a
              href="https://www.topcoder.com/members/Bobyama"
              target="_blank"
              rel="noopener noreferrer">
              https://www.topcoder.com/members/Bobyama{' '}
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info;
