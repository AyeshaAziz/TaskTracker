const TASK_LIST_LABEL = "Tasks";
const CLEAR_ALL_BUTTON = "Clear All";

export const TaskList = ({setTask, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleEdit = (id) => {
    const selectedTask = taskList.find((item) => item.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">{TASK_LIST_LABEL}</span>
          <span className="count">{taskList?.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          {CLEAR_ALL_BUTTON}
        </button>
      </div>
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            <p>
              <span className="name">{item.name}</span>
              <span className="time">{item.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(item.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(item.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
