import httpRequestHelper from "@/utils/httpRequestHelper";

const URL = "http://localhost:9000/api/todolist";

export default {
    getTodoList
};

function getTodoList(todoListId) {
    const requestOptions = {
        url: URL,
        params: {
            todoListId: todoListId
        }
    };
    return httpRequestHelper.get(requestOptions);
}