import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles';

export const withSpinner = WrappedComponent => ({ isLoading, ...rest }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...rest} />
	);
};

export default withSpinner;
