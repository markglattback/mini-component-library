import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
	  	<SelectWrapper>
			<DisplayValue>{displayedValue}</DisplayValue>
			<SelectInput value={value} onChange={onChange}>
				{children}
			</SelectInput>
			<IconWrapper>
				<Icon id="chevron-down" strokeWidth={2} />
			</IconWrapper>
		</SelectWrapper>
  );
};

const SelectWrapper = styled.div`
	background: ${COLORS.transparentGray15};
	border-radius: 8px;
	color: ${COLORS.gray700};
	display: flex;
	align-items: center;
	position: relative;
	width: fit-content;

	&:hover {
		color: ${COLORS.black};
	}
`;

const DisplayValue = styled.div`
	color: inherit;
	padding: 12px 52px 12px 12px;
	width: fit-content;
`;

const SelectInput = styled.select`
	appearance: none;
	background: transparent;
	border: none;
	border-radius: 8px;
	color: transparent;
	position: absolute;
	height: 100%;
	width: 100%;
`;

const IconWrapper = styled.div`
	position: absolute;
	right: 8px;
`;

export default Select;
