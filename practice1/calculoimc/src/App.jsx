import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

function App() {
  const [result, setResult] = useState({
    value: null,
    class: null
  })

  function handleClass(value) {
    if (value < 18.6) {
      return "Abaixo do Peso"
    } else if (value < 24.9) {
      return "Normal"
    } else if (value < 29.9) {
      return "Sobrepeso"
    } else if (value < 34.9) {
      return "Obesidade Grau 1"
    } else if (value < 39.9) {
      return "Obesidade Grau 2"
    } else {
      return "Obesidade Grau 3"
    }
  }

  function calculate(state) {
    console.log('asd')

    const value = (state.peso / (state.altura * state.altura)).toFixed(1);

    console.log()

    const classValue = handleClass(value);

    setResult({
      value,
      class: classValue
    })
  }

  const formSchema = z.object({
    peso: z.coerce.number().min(1, {
      message: "Username must be at least 1 characters.",
    }),
    altura: z.coerce.number().min(1, {
      message: "Username must be at least 1 characters.",
    }),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      peso: 0,
      altura: 0
    },
  })

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Resultado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {result.value}
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Você está adequado em: {result.class}.
          </p>
        </CardContent>
      </Card>

      <Card
        className="w-[750px]"
      >
        <CardHeader>
          <div className="">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(calculate)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="peso"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Peso" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="altura"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Altura</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Altura" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                >
                  Calcular
                </Button>
              </form>
            </Form>
          </div>
        </CardHeader>
      </Card>
      <Card
        className="w-[750px]"
      >
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Classificação</TableHead>
                <TableHead>IMC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Abaixo do Peso</TableCell>
                <TableCell>Abaixo de 18.5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Normal</TableCell>
                <TableCell>Entre 18.5 e 24.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sobrepeso</TableCell>
                <TableCell>Entre 25 e 29.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Obesidade Grau 1</TableCell>
                <TableCell>Entre 30 e 34.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Obesidade Grau 2</TableCell>
                <TableCell>Entre 35 e 39.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Obesidade Grau 3</TableCell>
                <TableCell>Acima de 40</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}

export default App
