export const SkillCard = ({ src, name, description }: { src: string; name: string; description: string }) => (
  <div className="group flex w-1/3 flex-col items-center justify-center opacity-0 transition-all duration-300 hover:scale-110">
    <div className="relative">
      <img src={src} alt={`${name} logo`} className="w-20 transition-transform group-hover:animate-wiggle" />
      {/* Tooltip */}
      <div className="absolute -top-16 left-1/2 hidden -translate-x-1/2 rounded bg-gray-800 p-2 text-sm text-white group-hover:block">
        {description}
      </div>
    </div>
    <p className="mt-2 font-medium">{name}</p>
  </div>
)
