import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

const validationFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().toLowerCase(),
  tel: z.string(),
  component: z.string(),
  amount: z.coerce.number(),
  description: z.string(),
  address: z.string().optional(),
})

type FormData = z.infer<typeof validationFormSchema>

export function FormBox() {
  const [isActive, setIsActive] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const form = useForm<FormData>({
    resolver: zodResolver(validationFormSchema),
  })

  const handleFormSubmit = async (values: FormData) => {
    setIsSubmitting(true)
    console.log(values)
    if (!values.address) {
      values.address = 'Vai entregar no instituto'
    }

    const id = uuid()

    await axios.post(import.meta.env.VITE_SHEET_API_URL, {
      ID: id,
      Nome: values.name,
      Email: values.email,
      Telefone: values.tel,
      Componente: values.component,
      Quantidade: values.amount,
      Descrição: values.description,
      Endereço: values.address,
      Criado_em: new Date(),
    })

    setIsSubmitting(false)
    navigate(`/success/${id}`)
  }

  return (
    <Form {...form}>
      <form
        className="p-10 border-2 rounded-md flex flex-col gap-5 max-sm:gap-3"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Ex: Nelson Mandela"
            autoComplete="name"
            {...form.register('name')}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Ex: madiba@example.com"
            autoComplete="on"
            {...form.register('email')}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tel">Telefone</Label>
          <Input
            id="tel"
            type="text"
            placeholder="Ex: (99) 9 9999-9999"
            autoComplete="on"
            {...form.register('tel')}
          />
        </div>

        <div className="flex gap-3 max-sm:flex-col">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="component">Componente</Label>
            <Input
              id="component"
              type="text"
              placeholder="Ex: Placa mãe, Memoria ram"
              autoComplete="on"
              {...form.register('component')}
            />
          </div>

          <div className="w-32 grid items-center gap-1.5 max-sm:w-full">
            <Label htmlFor="amount">Quantidade</Label>
            <Input
              id="amount"
              type="number"
              min={1}
              placeholder="Ex: 5"
              {...form.register('amount')}
            />
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            className="resize-none"
            id="description"
            placeholder="Ex: Placa Mãe da marca Asus, modelo B550 semi-novo com 1 ano de uso"
            {...form.register('description')}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="address">Endereço</Label>
          <span className="text-xs">
            Deseja que buscamos o componente? Se sim informar o endereço :D
          </span>
          <div className="flex items-center gap-3 mt-1">
            <Input
              id="address"
              disabled={isActive}
              placeholder="Ex: Rua São Miguel, N123 Bairro Chafariz"
              autoComplete="on"
              {...form.register('address')}
            />
            <Switch
              checked={!isActive}
              onCheckedChange={() => setIsActive(!isActive)}
            />
          </div>
        </div>

        <Button disabled={isSubmitting} type="submit" className="mt-3">
          Enviar
        </Button>
      </form>
    </Form>
  )
}
