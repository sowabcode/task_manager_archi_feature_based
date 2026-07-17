import { useTasks } from "../hooks/useTasks";

import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { EmptyState } from "../components/EmptyState";
import { TaskSkeleton } from "../components/TaskSkeleton";

export default function TasksPage() {
  const { data: tasks = [], isPending, isError } = useTasks();

  if (isPending) {
    return <TaskSkeleton />;
  }

  if (isError) {
    return <p>Une erreur est survenue.</p>;
  }

  if (!tasks.length) {
    return <EmptyState />;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-200 border border-slate-200 rounded-lg bg-white p-4">
        <TaskForm />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
