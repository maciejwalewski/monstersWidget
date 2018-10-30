import { connect } from 'react-redux';

import Monster from '../components/Monster';

const mapStateToProps = state => {
	return {
		monster: state.eachMonster.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Monster);