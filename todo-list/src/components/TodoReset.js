import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoReset extends Component {
    static propTypes = {
        onReset: PropTypes.func
    }

    static defaultProps = {
        onReset: () => console.warn('onReset not defined')
    }

    handleReset = () => {
        this.props.onReset();
    }

    render() {
        const { handleReset } = this;
        
        return (
            <div>
                <button onClick={handleReset}>
                    초기화
                </button>
            </div>
        );
    }
}

export default TodoReset;