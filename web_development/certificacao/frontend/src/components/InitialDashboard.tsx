import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import api from "@/lib/axios"
import { cn } from "@/lib/utils"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"


export function InitialDashboard() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleIndex = () => {
        setIsLoading(true)
        api.get("movies").then((response: AxiosResponse) => {
            setMovies(response.data.data)

            setTimeout(() => {
                setIsLoading(false)
            }, 1)
        })

    }

    useEffect(() => {
        handleIndex()
    }, [])

    return (
        <div className="flex items-center justify-center w-full h-full">
            {!isLoading && <Card className={cn("min-w-[800px]")}>
                <CardContent>
                    {movies.length > 0 ? <Carousel
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent>
                            {movies.map((movie: any, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className={cn("min-w-[100px] mt-6")}>
                                            <CardHeader>

                                                <h3 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
                                                    {movie.name}
                                                </h3>

                                            </CardHeader>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 flex-col gap-2">
                                                <img
                                                    src={movie.banner}
                                                    height={150}
                                                    width={150}
                                                >
                                                </img>

                                                <Button variant="link" onClick={() => window.open(movie.url)}>
                                                    Veja o trailer!
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> : <h2 className="text-center my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                        Nenhum filme publicado!
                    </h2>
                    }
                </CardContent>
            </Card>}
        </div>
    )
}