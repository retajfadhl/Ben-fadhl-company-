interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageFocus?: string;
  index: number;
}

export default function ProjectCard({ title, description, image, imageFocus = '', index }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm">
      <div className="h-52 overflow-hidden">
        <img src={image} alt="" className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${imageFocus}`} />
      </div>
      <div className="p-7">
        <span className="font-heading text-xs font-bold tracking-widest text-amber-600">0{index + 1}</span>
        <h3 className="mt-3 text-xl font-extrabold text-slate-950">{title}</h3>
        <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
