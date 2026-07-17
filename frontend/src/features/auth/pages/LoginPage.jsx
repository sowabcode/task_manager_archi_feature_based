import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="w-112.5 bg-white border border-slate-200 shadow-2xl rounded-lg px-6 py-6">
        <h1 className="text-4xl text-center font-semibold mb-8">Connexion</h1>
        <LoginForm />
      </div>
    </main>
  );
}
