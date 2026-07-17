import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { taskSchema } from "../schemas/taskSchema";
import { useTaskStore } from "../store/taskStore";
import { useCreateTask } from "../hooks/useCreateTask";
import { useUpdateTask } from "../hooks/useUpdateTask";
import { Input } from "../../../design-system/Input/Input";
import { Button } from "../../../design-system/Button/Button";
import { Textarea } from "../../../design-system/Textarea/Textarea";

export function TaskForm() {
  const editingTask = useTaskStore((state) => state.editingTask);
  const clearEditingTask = useTaskStore((state) => state.clearEditingTask);

  const createTask = useCreateTask();
  const updateTask = useUpdateTask();
  // const { mutate, isPending } = useCreateTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (editingTask) {
      reset({
        title: editingTask.title,
        description: editingTask.description,
      });
    } else {
      reset({
        title: "",
        description: "",
      });
    }
  }, [editingTask, reset]);

  const onSubmit = (values) => {
    if (editingTask) {
      updateTask.mutate(
        {
          id: editingTask._id,
          payload: values,
        },
        {
          onSuccess: () => {
            clearEditingTask();
            reset({
              title: "",
              description: "",
            });
          },
        },
      );

      return;
    }

    createTask.mutate(values, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Titre"
        error={errors.title?.message}
        className="mb-4"
        {...register("title")}
      />
      <Textarea
        placeholder="Description"
        error={errors.description?.message}
        className="mb-4"
        {...register("description")}
      />

      {editingTask && (
        <Button
          type="button"
          className="bg-slate-400 mr-4"
          onClick={() => {
            clearEditingTask();
            reset();
          }}
        >
          Annuler
        </Button>
      )}
      <Button type="submit" className="mb-6 px-10">
        {editingTask ? "Modifier" : "Créer"}
      </Button>
    </form>
  );
}
