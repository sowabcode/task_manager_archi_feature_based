import { useTaskStore } from "../store/taskStore";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { Button } from "../../../design-system/Button/Button";

export function TaskCard({ task }) {
  const { mutate, isPending } = useDeleteTask();

  const setEditingTask = useTaskStore((state) => state.setEditingTask);

  return (
    <article className="flex items-center justify-between border border-slate-200 rounded-lg p-4 mb-3">
      <div>
        <h3>{task.title}</h3>
        <p className="text-slate-500">{task.description}</p>
        <strong>{task.completed ? "✅ Done" : "⏳ Todo"}</strong>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={() => setEditingTask(task)}>Modifier</Button>

        <Button
          disabled={isPending}
          variant="danger"
          onClick={() => mutate(task._id)}
        >
          Supprimer
        </Button>
      </div>
    </article>
  );
}
