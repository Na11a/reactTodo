import React, { useState } from "react";
import "./Form.css";

const useForm = (...fields) => ({
  reset: () => fields.forEach(f => f.reset()),
  getValue: () => buildObject(...fields)
})

const useFormField = (init,name) => {
    const [value,setValue] = useState(init);
    return {
        value:value,
        name:name,
        reset: (value = init) => setValue(value),
        onChange: (e)=>setValue(e.target.value)
    }
};
function buildObject(...fields){
    const object = []
    for (let field of fields){
        object[field.name] = field.value
    }
    return object
}
export default function NewTaskForm(props) {
    const title = useFormField('','title')
    const desc = useFormField('','desc')
    const dueDate = useFormField('','dueDate')

    const taskForm = useForm(title, desc, dueDate)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let task = taskForm.getValue();
    props.onSubmit(task)
    taskForm.reset()
    console.log()
  }

  return (
    <div className="taskForm">
      <form id="taskForm" onSubmit={onSubmitHandler} autoComplete="off">
        <input type="text" {...title} required/>
        <input type="text" {...desc} />
        <input type="date" {...dueDate} />
        <input type="submit" />
      </form>
    </div>
  );
}
