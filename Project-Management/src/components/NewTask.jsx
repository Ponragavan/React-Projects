import { useState } from "react";

const NewTask = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };
  const handleClick = () => {
    if(enteredTask.trim()===''){
        return
    }
    props.onAddTask(enteredTask)
    setEnteredTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
};
export default NewTask;
