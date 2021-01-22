import React from 'react';
import { Route } from 'react-router-dom';

import { firestore } from '../../firebase/firebase';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/actions/shopActions';

import './Shop.scss';
import { withSpinner } from '../../components/common';
import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../Collection';
import { convertCollectionsSnapshop } from '../../firebase/utils';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;
	state = { isLoading: true };

	componentDidMount() {
		const { updateCollections } = this.props;
		const CollectionRef = firestore.collection('collections');
		CollectionRef.onSnapshot(async snapshot => {
			const collections = convertCollectionsSnapshop(snapshot);
			updateCollections(collections);
			this.setState({ isLoading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className='shop'>
				<Route
					path={`${match.path}/:collectionID`}
					render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
				/>
				<Route
					exact
					path={`${match.path}`}
					render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({ updateCollections: collections => dispatch(updateCollections(collections)) });

export default connect(null, mapDispatchToProps)(withSpinner(ShopPage));
