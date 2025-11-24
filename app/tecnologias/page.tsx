import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from '@/app/data/tecnologias.json'

export default function Page() {
  return (
    <>
      <h2>Tecnologias Exploradas</h2>
      <p>
        Neste componente irá apresentar as tecnologias que aprendeu nesta disciplina: 
        HTML, CSS, Tailwind CSS, JavaScript, Typescript, JSON, API RESTful, Swagger, 
        GitHub Pages, React.js, Next.js, Vercel.
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {tecnologias.map((tech, i) => (
          <TecnologiaCard 
            key={i}
          
            title={tech.title}
            image={tech.image}
          />
        ))}
      </div>
    </>
  )
}