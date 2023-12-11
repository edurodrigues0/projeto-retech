import { MadeBy } from '@/components/MadeBy'
import heroSVG from '../../public/hero.svg'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen p-5 gap-36 flex items-center justify-evenly relative max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-16">
      <div className="flex flex-col gap-10 max-sm:items-center">
        <h1 className="text-5xl font-bold max-sm:text-3xl leading-10">
          Projeto Re-Tech 💻🚀
        </h1>
        <p className="text-xl max-sm:text-lg max-sm:w-72 leading-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          eligendi aperiam sed nesciunt officiis vero animi optio. Deleniti
          consequatur fuga provident voluptates obcaecati sunt dolores
          blanditiis voluptas, error quidem autem!
        </p>

        <div className="flex gap-5">
          <Button
            onClick={() => navigate('/form')}
            className="w-28 max-sm:w-20"
          >
            Doar
          </Button>
          <Button className="w-28 max-sm:w-20">Instituto</Button>
        </div>
      </div>

      <img className="w-96 max-sm:w-56" src={heroSVG} alt="computador" />

      <MadeBy />
    </div>
  )
}
