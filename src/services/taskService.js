import httpRequestHelper from "@/utils/httpRequestHelper";

const URL = "http://localhost:9000/api/task";

export default {
    getTask,
    addTask,
    updateTask,
    deleteTask
};

function getTask(taskId) {
    const requestOptions = {
        url: URL,
        params: {
            taskId: taskId
        }
    };
    return httpRequestHelper.get(requestOptions);
}

function addTask(todoListId) {
    const requestOptions = {
        url: URL,
        params: {
            todoListId: todoListId
        }
    };
    return httpRequestHelper.get(requestOptions);
}

function updateTask(task) {
    const requestOptions = {
        url: URL,
        params: {
            task: task
        }
    };
    return httpRequestHelper.get(requestOptions);
}

function deleteTask(taskId) {
    const requestOptions = {
        url: URL,
        params: {
            taskId: taskId
        }
    };
    return httpRequestHelper.del(requestOptions);
}