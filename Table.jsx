import { useCallback, useState } from "react";

const dataMock = [{ marca: "Peugeot", modelo: "3008 1.6 allure", ano: 2020, preco: 162900.0 },
{ marca: "Renault", modelo: "Duster 1.6 ionic", ano: 2021, preco: 112900.0 },
{ marca: "Renault", modelo: "Captur 1.6 intense", ano: 2019, preco: 90990.0 },
{ marca: "Fiat", modelo: "Strada 1.4 freedom", ano: 2020, preco: 81000.0 },
{ marca: "Fiat", modelo: "Toro 2.0 ultra", ano: 2022, preco: 202000.0 },
{ marca: "Fiat", modelo: "Mobi 1.0 trekking", ano: 2021, preco: 64990.0 },
];

const Table = () => {
    const [marca, setMarca] = useState("")

    return <>
        <input onChange={(e) => { setMarca(e.target.value) }} placeholder="Filtrar" />
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                </tr>
            </thead>
            <tbody>
                {dataMock.map((obj) => {
                    if (marca && obj.marca !== marca) {
                        return;
                    }

                    return <tr>
                        <td>{obj.marca}</td>
                        <td>{obj.modelo}</td>
                        <td>{obj.ano}</td>
                        <td>
                            {obj.preco.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default Table