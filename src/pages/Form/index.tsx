import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FormBox } from './Form'

export function Form() {
  const navigate = useNavigate()

  console.log(import.meta.env.VITE_SHEET_API_URL)

  return (
    <div className="max-w-screen w-full p-5 gap-10 flex flex-col items-center justify-start">
      <Button
        onClick={() => navigate('/')}
        className="absolute top-12 left-5 text-md max-sm:text-sm max-sm:font-bold max-sm:top-6"
      >
        <ChevronLeft />
        Voltar
      </Button>

      <h1 className="text-3xl mt-16 max-sm:text-2xl">
        Preencha o formulario abaixo
      </h1>

      <FormBox />
    </div>
  )
}
