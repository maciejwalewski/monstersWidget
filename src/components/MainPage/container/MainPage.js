import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as fetchMonsters from '../actions';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
	return {
		monsters: state.monsters.data,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({
	...fetchMonsters,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);