import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../hooks/useLogin";
import { loginSchema } from "../schemas/loginSchema";
import { Input } from "../../../design-system/Input/Input";
import { Button } from "../../../design-system/Button/Button";

export function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="Adresse email"
        placeholder="Votre adresse email"
        error={errors.email?.message}
        className="mb-4"
        {...register("email")}
      />

      <Input
        type="password"
        label="Mot de passe"
        placeholder="Votre mot de passe"
        error={errors.password?.message}
        className="mb-4"
        {...register("password")}
      />

      <Button type="submit" isLoading={isPending} className="w-full">
        Se connecter
      </Button>
    </form>
  );
}
