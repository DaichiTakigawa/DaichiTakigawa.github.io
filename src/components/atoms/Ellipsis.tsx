/* eslint-disable no-unused-vars */
import * as React from 'react';
import styled from '@emotion/styled';

import {rhythm, scale} from '../../lib/typography';

interface Props {
  menuLabels: string[];
  onSelectMenu: (idx: number) => void;
}

const Ellipsis: React.FC<Props> = ({menuLabels, onSelectMenu}) => {
  const [shouldShowPopup, setShouldShowPopup] = React.useState(false);
  const popupRef = React.useRef(null);
  const documentClickHandlerRef = React.useRef(null);

  const showPopup = React.useCallback(() => {
    setShouldShowPopup(true);
    if (documentClickHandlerRef.current) {
      document.addEventListener('click', documentClickHandlerRef.current);
    }
  }, [documentClickHandlerRef.current]);

  React.useEffect(() => {
    documentClickHandlerRef.current = (e: MouseEvent) => {
      if (popupRef.current.contains(e.target)) return;
      setShouldShowPopup(false);
      document.removeEventListener('click', documentClickHandlerRef.current);
    };
    return () => {
      document.removeEventListener('click', documentClickHandlerRef.current);
    };
  }, []);

  const menu = React.useMemo(() => {
    return menuLabels.map((value, index) => {
      const onClick = () => {
        onSelectMenu(index);
        setShouldShowPopup(false);
        document.removeEventListener('click', documentClickHandlerRef.current);
      };
      return (
        <MenuRow key={index} onClick={onClick}>
          {value}
        </MenuRow>
      );
    });
  }, [menuLabels, onSelectMenu]);

  return (
    <Container>
      <Icon onClick={showPopup}>
        <i className={'fas fa-ellipsis-v'}></i>
      </Icon>
      <Popup shouldShow={shouldShowPopup} ref={popupRef}>
        {menu}
      </Popup>
    </Container>
  );
};

const Container = styled.div({
  position: 'relative',
});

const Icon = styled.div({
  cursor: 'pointer',
  '&::before': {
    content: `""`,
    paddingLeft: '0.5rem',
  },
  '&::after': {
    content: `""`,
    paddingRight: '0.5rem',
  },
});

interface PopupProps {
  shouldShow: boolean;
}

const Popup = styled.div(({shouldShow}: PopupProps) => ({
  display: shouldShow ? 'block' : 'none',
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 1000,
  width: rhythm(6),
  top: rhythm(3 / 2),
  right: '0px',
  backgroundColor: 'white',
  border: '1px solid rgb(221, 221, 221)',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 4px',
  borderRadius: '3px',
  padding: '8px 0px',
}));

const MenuRow = styled.div({
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: scale(0).fontSize,
  lineHeight: rhythm(3 / 2),
  '&:hover': {
    backgroundColor: 'whitesmoke',
  },
});

export default Ellipsis;
