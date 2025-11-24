import TecnologiaDetailsCard from "@/components/TecnologiaCard/TecnologiaDetailsCard";
import tecnologias from '@/app/data/tecnologias.json';
import Link from 'next/link';

interface TecnologiaPageProps {
  params: {
    id: string;
  };
}

export default function TecnologiaPage({ params }: TecnologiaPageProps) {
  const { id } = params;
  
  // Encontrar a tecnologia pelo índice
  const tecnologia = tecnologias[parseInt(id)];
  
  if (!tecnologia) {
    return (
      <div>
        <h2>Tecnologia não encontrada</h2>
        <Link href="/tecnologias" className="text-blue-500 underline">
          Voltar para tecnologias
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <Link 
        href="/tecnologias" 
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Voltar
      </Link>
      
      <TecnologiaDetailsCard 
        title={tecnologia.title}
        image={tecnologia.image}
        description={tecnologia.description}
        rating={tecnologia.rating}
      />
    </div>
  );
}