import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Monster from '../components/Monster';

const mapStateToProps = state => {
	return {
		monster: state.eachMonster.data,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Monster);