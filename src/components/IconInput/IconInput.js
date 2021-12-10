import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'--borderWidth': '1px',
		'--fontSize': `${ 14 / 16 }rem`,
		'--lineHeight': `${ 16 / 16 }rem`,
		'--padding': '4px 8px 4px 24px',
	},
	large: {
		'--borderWidth': '2px',
		'--fontSize': `${ 18 / 16 }rem`,
		'--lineHeight': `${ 21 / 16 }rem`,
		'--padding': '8px 16px 7px 36px',
	},
}

const ICON_SIZES = {
	small: {
		'strokeWidth': 1,
		'size': 16
	},
	large: {
		'strokeWidth': 2,
		'size': 24
	}
}

const IconInput = ({
	label,
	icon,
	width = 250,
	size = 'small',
	placeholder,
}) => {
	const input = useRef(null);
	
	const name = label.replace(' ', '').toLowerCase();

	function focusInput() {
		if (input.current) {
			input.current.focus();
		}
	}

	return (
		<>
			<VisuallyHidden as="label" htmlFor={name}>{label}</VisuallyHidden>
			<IconInputWrapper width={width}>
				<IconWrapper onClick={focusInput}>
					<Icon id={icon} strokeWidth={ICON_SIZES[size]['strokeWidth']} size={ICON_SIZES[size]['size']} />
				</IconWrapper>
				<Input ref={input} name={name} style={SIZES[size]} placeholder={placeholder} />
			</IconInputWrapper>
		</>
	)
};

const IconInputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	color: ${COLORS.gray700};
	width: ${({ width }) => width + 'px' };

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	cursor: pointer;
`;

const Input = styled.input`
	border-width: 0;
	border-bottom-width: var(--borderWidth);
	border-color: ${COLORS.black};
	color: inherit;
	font-size: var(--fontSize);
	font-weight: 700;
	line-height: var(--lineHeight);
	padding: var(--padding);
	width: 100%;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:focus {
		outline-offset: 2px;
	}
`;

export default IconInput;
