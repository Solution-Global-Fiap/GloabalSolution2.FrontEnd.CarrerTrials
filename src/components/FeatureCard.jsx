export default function FeatureCard({ icon, color, title, description }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <div className="bg-(--bg-card) shadow-lg rounded-2xl p-10 border border-border transition-all">
      <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>

      <h3 className="font-semibold text-xl mt-6 text-(--text)">{title}</h3>
      <p className="text-(--text-secondary) mt-3">{description}</p>
    </div>
  );
}
