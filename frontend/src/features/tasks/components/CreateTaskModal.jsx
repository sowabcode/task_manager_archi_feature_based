import { TaskForm } from "./TaskForm";
import { useCreateTask } from "../hooks/useCreateTask";

export function CreateTaskModal() {
  const { mutate, isPending } = useCreateTask();

  return (
    <section>
      <h2>Nouvelle tâche</h2>

      <TaskForm
        isPending={isPending}
        defaultValues={{
          title: "",
          description: "",
        }}
        submitLabel="Créer"
        onSubmit={(values) => mutate(values)}
      />
    </section>
  );
}
