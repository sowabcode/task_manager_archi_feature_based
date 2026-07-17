export function EmptyState({ title, description }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
