const EMPTY_STRING = "";
const MAX_LENGTH = 25;
const ADD_TASK_LABEL = "Add Task";
const UPDATE_TASK_LABEL = "Update";

export const AddTask = ({ task, setTask, taskList, setTaskList }) => {
  const updateTaskList = (value, timestamp) => {
    const updatedTaskList = taskList.map((item) =>
      item.id === task.id
        ? {
            ...item,
            name: value,
            time: timestamp,
          }
        : item
    );
    setTaskList(updatedTaskList);
  };

  const addTask = (taskList, id, value, timestamp) => {
    if (value) {
      const newTask = {
        id: id,
        name: value,
        time: timestamp,
      };
      setTaskList([...taskList, newTask]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const value = event.target.task.value;
    const timestamp = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    const newId = date.getTime();
    task.id? updateTaskList(value, timestamp): addTask(taskList, newId, value, timestamp);
    setTask({});
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || EMPTY_STRING}
          autoComplete="off"
          placeholder="add task"
          maxLength={MAX_LENGTH}
          onChange={(event) => setTask({ ...task, name: event.target.value })}
        />
        <button type="submit">{!task.id? ADD_TASK_LABEL: UPDATE_TASK_LABEL}</button>
      </form>
    </section>
  );
};
