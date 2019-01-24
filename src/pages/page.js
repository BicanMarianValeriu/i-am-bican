import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
// Deps
import PageIntro from "../components/sections/page-intro";
import Main from "../components/Main/index";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";

// Server Side Stuff
const frontload = async props => await props.dispatch(fetchDispatcher(
	'wp/v2/pages',
	{ slug: props.match.params.slug },
	{ success: FETCH_POSTS_FULFILLED }
));

class Page extends Component {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			return this.props.dispatch(fetchDispatcher(
				'wp/v2/pages',
				{ slug: nextProps.match.params.slug },
				{ success: FETCH_POSTS_FULFILLED }
			));
		}
	}

	shouldComponentUpdate(nextProps) {
		return (JSON.stringify(this.props) !== JSON.stringify(nextProps))
	}

	render() {
		const page = this.props.posts[0];
		var title = page && page.title.rendered;
		const { pathname } = this.props.location;
		const meta = {
			title,
			canonical: "http://www.iambican.com" + pathname
		};

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
				</Helmet>
				<div id="content" className="content content--page">
					<PageIntro pageTitle={title} />
					<Main posts={this.props.posts} isSingle={true} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const { api: { posts } } = store;
	return { posts };
};

// Export container while connected to store with frontload
export default connect(mapStateToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page)
);
