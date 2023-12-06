import { Button } from '@/components/ui/button'
import successSVG from '../../public/success.svg'

export function Success() {
  return (
    <div className="w-screen h-screen p-12 flex items-center justify-evenly">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold leading-10">Projeto Re-Tech</h1>
        <span className="text-xl leading-10">
          &quot;A educação é a arma mais poderosa que você pode usar para mudar
          o mundo.&quot;
          <br />
          <span className="mt-1 font-bold">- Nelson Mandela</span>
        </span>

        <Button>Voltar :D</Button>
      </div>

      <img className="w-96" src={successSVG} alt="Menina segurando um balão" />
    </div>
  )
}
