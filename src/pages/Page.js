import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { Helmet } from 'react-helmet';
import _find from 'lodash/find';

// Deps
import { PageIntro, Main } from '../components/General';
import { requestApi } from '../redux/actions/api';
import { getPage, updatePages } from '../redux/actions/pages';
import { getMetaTags } from '../utilities/wordpress/wpPost';

class Page extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			const { match: { params: { slug } }, getPage } = this.props;
			window.scrollTo(0, 0);
			return getPage(slug);
		}
	}

	shouldComponentUpdate(nextProps) {
		return (nextProps.selectedPage !== this.props.selectedPage);
	}

	render() {
		const { selectedPage, location: { pathname } } = this.props;
		const { title: { rendered: pageTitle } = {} } = selectedPage || {};
		const tags = selectedPage && getMetaTags(selectedPage, pathname);
		return (
			<Fragment>
				<Helmet {...tags} />
				<div id="content" className="content content--page content--single">
					<PageIntro title={pageTitle} />
					<div className="container">
						<Main posts={[selectedPage]} className="py-3 py-md-5" isSingle={true} loading={!selectedPage} />
					</div>
				</div>
			</Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
	const { pages } = store;
	const { match: { params: { slug } } } = props;
	const selectedPage = _find(pages, { slug });

	return ({ selectedPage });
};

// mapDispatchToProps -> getPage
const mapDispatchToProps = dispatch => bindActionCreators({ getPage, updatePages }, dispatch);

// Server Side Stuff
const frontload = async ({ match: { params: { slug } }, updatePages }) => {
	return await requestApi({ url: `wp/v2/pages`, params: { slug } }).then(r => updatePages(r.data));
};

// Connect to Frontload SSR
const PageConnect = frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page);

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(PageConnect);
