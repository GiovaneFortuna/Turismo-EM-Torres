export default function SectionHeader({ icon, title, subtitle, color }: { icon: React.ReactNode; title: string; subtitle: string; color: string }) {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 pb-4 border-b-2 ${color}`}>
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
      </div>
      <p className="text-gray-500 italic text-lg sm:ml-2">{subtitle}</p>
    </div>
  );
}