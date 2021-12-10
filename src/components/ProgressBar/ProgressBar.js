/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'--borderRadius': '4px',
		'--height': '8px',
		'--padding': '0px'
	},
	medium: {
		'--borderRadius': '4px',
		'--height': '12px',
		'--padding': '0px'
	},
	large: {
		'--borderRadius': '8px',
		'--height': '24px',
		'--padding': '4px'
	}
}

const ProgressBar = ({ value, size }) => {
	const min = 0;
	const max = 100;

  return (
		<ProgressBarContainer style={SIZES[size]} role="progressbar" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}>
			<ProgressBarFill value={value} min={min} max={max} />
			<VisuallyHidden>{value / max * 100}%</VisuallyHidden>
		</ProgressBarContainer>
	);
};

const ProgressBarContainer = styled.div`
	background: ${COLORS.transparentGray15};
	border-radius: var(--borderRadius);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	padding: var(--padding);
	height: var(--height);
	width: 400px;
`;

const ProgressBarFill = styled.div`
	background: ${COLORS.primary};
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	border-top-right-radius: ${({ value, max }) => value >= 99 ? 4 - (max - value) * 4 + 'px' : '0px' };
	border-bottom-right-radius: ${({ value, max }) => value >= 99 ? 4 - (max - value) * 4 + 'px' : '0px' };
	height: 100%;
	width: ${({ value, max }) => value / max * 100 + '%' }
`;

export default ProgressBar;
