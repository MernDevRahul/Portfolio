import { IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon?: IconType;
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass hover:bg-white/10 transition-colors border border-white/5 shadow-lg">
      {Icon && <Icon className="text-blue-400" size={20} />}
      <span className="font-medium text-gray-200">{name}</span>
    </div>
  );
}
