import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

/*
* Tricks from this course
* 1. Overlapping NativeSelect with opacity of 0 value on top of PresentationBit.
*    So when the user clicks the presentationBit, he actually touches NativeSelect.
* 2. Setting width of Wrapper as max-content 
 */

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  
  /* max-content : it doesn't cause any line breaks 
    * So the longer the content is, the wider the element will get
  */
  width: max-content;
  
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0;    
`;

const PresentationBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  /* newly learned */
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.gray300};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  margin: auto;
  height: max-content;
  
  /* newly learned */
  pointer-events: none;
`;


export default Select;
