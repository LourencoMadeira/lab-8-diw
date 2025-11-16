import Image from 'next/image'
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
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <Image 
              src={`/tecnologias/${tech.image}`}
              alt={`Logotipo do ${tech.title}`}
              width={200}
              height={200}
            />
            <h3 className="font-bold mt-2">{tech.title}</h3>
            <p className="text-sm">{tech.description}</p>
            <p className="text-yellow-500">{'⭐'.repeat(tech.rating)}</p>
          </div>
        ))}
      </div>
    </>
  )
}