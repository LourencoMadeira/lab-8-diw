import Image from 'next/image'


interface TecnologiaCardProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Image 
        src={`/tecnologias/${image}`}
        alt={`Logotipo do ${title}`}
        width={200}
        height={200}
        className="w-full h-auto"
      />
      <h3 className="font-bold mt-2">{title}</h3>
    </div>
  )
}