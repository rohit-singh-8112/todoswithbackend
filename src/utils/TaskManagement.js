// Task Management Utilities for Todo App
// This file shows how to use the UPDATE_TODO action with the reducer

/**
 * Dispatch UPDATE_TODO action to modify a task
 * @param {function} dispatch - The dispatch function from useReducer
 * @param {number} id - Task ID to update
 * @param {string} newText - New task name (optional)
 * @param {string} newDate - New task date (optional)
 */
export const updateTask = (dispatch, id, newText = null, newDate = null) => {
    dispatch({
        type: 'UPDATE_TODO',
        payload: {
            id,
            newText,
            newDate
        }
    });
};

/**
 * Update only the task name
 * @param {function} dispatch - The dispatch function from useReducer
 * @param {number} id - Task ID to update
 * @param {string} newText - New task name
 */
export const updateTaskName = (dispatch, id, newText) => {
    updateTask(dispatch, id, newText, null);
};

/**
 * Update only the task date
 * @param {function} dispatch - The dispatch function from useReducer
 * @param {number} id - Task ID to update
 * @param {string} newDate - New task date
 */
export const updateTaskDate = (dispatch, id, newDate) => {
    updateTask(dispatch, id, null, newDate);
};

/**
 * Update both task name and date
 * @param {function} dispatch - The dispatch function from useReducer
 * @param {number} id - Task ID to update
 * @param {string} newText - New task name
 * @param {string} newDate - New task date
 */
export const updateTaskNameAndDate = (dispatch, id, newText, newDate) => {
    updateTask(dispatch, id, newText, newDate);
};

/**
 * Format date for display (optional utility)
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

// Usage Examples in a React Component:
/*
import { updateTaskName, updateTaskDate, updateTaskNameAndDate } from './utils/TaskManagement';

// Inside your component with useReducer:
const [todos, dispatch] = useReducer(todoreducer, initialTodos);

// Update only name
const handleUpdateName = (taskId) => {
    updateTaskName(dispatch, taskId, 'New Task Name');
};

// Update only date
const handleUpdateDate = (taskId) => {
    updateTaskDate(dispatch, taskId, '06/25/2026 05:00 PM');
};

// Update both
const handleUpdateBoth = (taskId) => {
    updateTaskNameAndDate(dispatch, taskId, 'Updated Task', '06/30/2026 06:00 PM');
};
*/
