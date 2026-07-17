import { TaskForm } from "./TaskForm";
import { useUpdateTask } from "../hooks/useUpdateTask";

export function EditTaskModal({ task }) {
  const { mutate, isPending } = useUpdateTask();

  return (
    <TaskForm
      defaultValues={{
        title: task.title,
        description: task.description,
      }}
      isPending={isPending}
      submitLabel="Modifier"
      onSubmit={(values) =>
        mutate({
          id: task._id,
          payload: values,
        })
      }
    />
  );
}
