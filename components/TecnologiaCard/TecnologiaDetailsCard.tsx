import Image from 'next/image';

interface TecnologiaDetailsCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({ 
  title, 
  image, 
  description, 
  rating 
}: TecnologiaDetailsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
      <div className="flex flex-col items-center">
        <Image 
          src={`/tecnologias/${image}`}
          alt={`Logotipo do ${title}`}
          width={300}
          height={300}
          className="w-64 h-auto mb-4"
        />
        
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        
        <p className="text-gray-700 text-lg mb-4 text-center">
          {description}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-2xl">
            {'⭐'.repeat(rating)}
          </span>
          <span className="text-gray-600">
            ({rating}/5)
          </span>
        </div>
      </div>
    </div>
  );
}