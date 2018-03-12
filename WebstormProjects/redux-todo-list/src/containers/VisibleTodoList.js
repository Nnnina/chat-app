//Container component for TodoList
import {connect} from 'react-redux';
import {toggleTodo} from "../actions/index";
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown Filter' + filter)
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        //onTodoClick: bindActionCreators(toggleTodo, dispatch)
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapStateToDispatch,
)(TodoList);

export default VisibleTodoList;