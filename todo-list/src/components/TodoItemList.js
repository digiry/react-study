import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoItemList = ({ items, onToggle, onRemove }) => {
    const itemList = items.map(
        (item, index) => (
            <TodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                finished={item.finished}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        )
    )

    return (
        <ul>
            {itemList}
        </ul>
    );
}

TodoItemList.propTypes = {
    items: PropTypes.array,
    onToggle: PropTypes.func,
    onRemove: PropTypes.func
}

TodoItemList.defaultProps = {
    items: [],
    onToggle: () => console.warn('onToggle not defined'),
    onRemove: () => console.warn('onRemove not defined')
}

export default TodoItemList;