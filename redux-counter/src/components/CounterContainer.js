import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
  color: state.colorData.color,
  number: state.numberData.number
});

const matpDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  matpDispatchToProps
)(Counter);

export default CounterContainer;