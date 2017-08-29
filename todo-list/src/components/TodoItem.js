import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        finished: PropTypes.bool,
        onToggle: PropTypes.func,
        onRemove: PropTypes.func
    }

    static defaultProps = {
        name: '기본 항목',
        id: '',
        finished: false,
        onToggle: () => console.warn('onToggle not defined'),
        onRemove: () => console.warn('onRemove not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.finished !== this.props.finished;
    }
    

    render() {
        const { 
            id,
            name,
            finished,
            onToggle,
            onRemove
        } = this.props;

        const style = {
            cursor: 'pointer',
            textDecoration: finished ? 'line-through' : 'none'
        };

        console.log('rendering', name);
        return (
            <li
                style={style}
                onClick={() => onToggle(id)}
                onDoubleClick={() => onRemove(id)}
                className="TodoItem" >
                {name}
            </li>
        );
    }
}

export default TodoItem;