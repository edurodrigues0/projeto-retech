import { ModeToogle } from '@/components/ModeToogle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Form() {
  const [isActive, setIsActive] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="max-w-screen w-full p-12 gap-10 flex flex-col items-center justify-start">
      <ModeToogle />
      <Button
        onClick={() => navigate('/')}
        className="absolute top-12 left-12 text-md max-sm:text-sm max-sm:font-bold"
      >
        <ChevronLeft />
        Voltar
      </Button>

      <h1 className="text-3xl mt-16 max-sm:text-2xl">
        Preencha o formulario abaixo
      </h1>

      <form className="p-10 border-2 rounded-md flex flex-col gap-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Ex: Nelson Mandela" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="text" placeholder="Ex: madiba@example.com" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tel">Telefone</Label>
          <Input
            id="tel"
            maxLength={16}
            type="text"
            placeholder="Ex: (99) 9 9999-9999"
          />
        </div>

        <div className="flex gap-3 max-sm:flex-col">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="component">Componente</Label>
            <Input id="component" type="text" placeholder="Ex: Placa mãe" />
          </div>

          <div className="w-32 grid items-center gap-1.5 max-sm:w-full">
            <Label htmlFor="amount">Quantidade</Label>
            <Input id="amount" type="number" placeholder="Ex: 5" />
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            className="resize-none"
            id="description"
            placeholder="Ex: Placa Mãe da marca Asus, modelo B550 semi-novo com 1 ano de uso"
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="address">Endereço</Label>
          <span className="text-xs">
            Deseja que buscamos o componente? Se sim informar o endereço :D
          </span>
          <div className="flex items-center gap-3 mt-1">
            <Input
              disabled={isActive}
              placeholder="Ex: Rua São Miguel, N123 Bairro Chafariz"
            />
            <Switch
              checked={!isActive}
              onCheckedChange={() => setIsActive(!isActive)}
            />
          </div>
        </div>

        <Button className="mt-3">Enviar</Button>
      </form>
    </div>
  )
}
