import { useState, useEffect} from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import "./App.css";
const TASK_LIST_LABEL = "tasklist";
function App() {
  const storedTaskList = JSON.parse(localStorage.getItem(TASK_LIST_LABEL));
  const [taskList, setTaskList] = useState(storedTaskList || []);
  const [task, setTask] = useState({});
  
  useEffect(() => {
    localStorage.setItem(TASK_LIST_LABEL, JSON.stringify(taskList));
  }, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
