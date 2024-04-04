
import {
    MoreHorizontal,
    PlusCircle,
} from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import api from "@/lib/axios"
import { handleInput } from "@/helpers"
import { AxiosResponse } from "axios"

const RESET = {
    _id: undefined,
    name: undefined,
    synopsys: undefined,
    year: undefined,
    banner: undefined,
    url: undefined,
}


export function Dashboard() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(RESET)
    const [movies, setMovies] = useState([])
    const [editing, setEditing] = useState(false)

    const handleIndex = () => {
        api.get("movies").then((response: AxiosResponse) => {
            setMovies(response.data.data)
        })
    }

    useEffect(() => {
        handleIndex()
    }, [])

    const create = () => {
        setEditing(false)
        setForm(RESET)
        setOpen(true)
    }

    const edit = (obj: any) => {
        setForm(obj)
        setOpen(true)
        setEditing(true)
    }

    const deleteF = (obj: any) => {
        let url = "movies/delete"
        let message = "Livro deletado com sucesso!"
        let method: Methods = 'delete'

        api[method](url, { _id: obj._id }).then(() => {
            toast(message)
            handleIndex()
        }).catch(() => {
            toast("Falha ao deletar!!")
        })
    }

    const submit = () => {
        if (!form.name) {
            toast.error("Campo nome é obrigatório!")
            return
        }

        let url = "movies/create"
        let message = "Livro salvo com sucesso!"
        let method: Methods = 'post'

        if (editing) {
            url = "movies/update"
            message = "Livro atualizado com sucesso!"
            method = 'put'
        }

        api[method](url, form).then(() => {
            toast(message)
            setOpen(false)
            handleIndex()
        }).catch(() => {
            toast("Dados inválidos!")
        })
    }

    return (
        <>
            <div className="flex min-h-screen w-[80%] mx-auto flex-col">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="flex items-center">
                            <div className="ml-auto flex items-center gap-2">
                                <Button size="sm" className="h-7 gap-1" onClick={create}>
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Adicionar Filmes
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Filmes</CardTitle>
                                <CardDescription>
                                    Gerencie Filmes Lorem Impsum
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nome</TableHead>
                                            <TableHead>Sinopse</TableHead>
                                            <TableHead>Ano</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {movies.length > 0 && movies.map((movie: any) => <TableRow>
                                            <TableCell className="font-medium">
                                                {movie.name}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {movie.synopsys}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {movie.year}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            aria-haspopup="true"
                                                            size="icon"
                                                            variant="ghost"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                                        <DropdownMenuItem
                                                            onClick={() => edit(movie)}
                                                        >Editar</DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => deleteF(movie)}
                                                        >Deletar</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>)}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </main>
                </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div>
                            <Label htmlFor="name" className="text-right">
                                Nome
                            </Label>
                            <Input required onChange={(e) => handleInput(e, setForm)} id="name" value={form.name} className="mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="synopsys" className="text-right">
                                Sinopse
                            </Label>
                            <Textarea onChange={(e) => handleInput(e, setForm)} id="synopsys" value={form.synopsys} className="mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="year" className="text-right">
                                Ano
                            </Label>
                            <Input type="number" onChange={(e) => handleInput(e, setForm)} id="year" value={form.year} className="mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="banner" className="text-right">
                                Banner
                            </Label>
                            <Input placeholder="https://" type="url" onChange={(e) => handleInput(e, setForm)} id="banner" value={form.banner} className="mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="url" className="text-right">
                                URL
                            </Label>
                            <Input placeholder="https://" onChange={(e) => handleInput(e, setForm)} id="url" value={form.url} className="mt-2" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={submit}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
