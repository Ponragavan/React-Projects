import NewTask from "./NewTask";

const Task = (props) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={props.onAddTask} />
      {props.tasks.length === 0 && <p className="text-stone-800 my-4">This project don't have any tasks.</p>}
      {props.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {props.tasks.map((task) => (
            <li key={task.id} className="flex my-4 justify-between">
              <span>{task.text}</span>
              <button onClick={()=>props.onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Task;
