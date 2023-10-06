import { Fila } from "./fila";
export class FilaDoSupermercado {
    main(params: Array<string>) {
        let [funcionarios, clientes] = params[0].split(" ");
        let tempo = params[1].split(" ").reverse();
        let fila = new Fila(params[2].split(" ").map((i) => parseInt(i)));

        let resultadoTempo = 0;
        let numeroClientes: number = parseInt(clientes);

        while (numeroClientes !== 0) {
            let arrIteracaoTempo: Array<number> = [];
            for (let i = parseInt(funcionarios) - 1; i !== -1; i--) {
                let val = fila.next() * parseInt(tempo[i]);
                arrIteracaoTempo.push(val);
                numeroClientes--;
                if (numeroClientes === 0) break;
            }

            resultadoTempo += Math.max(...arrIteracaoTempo);
        }

        return resultadoTempo;
    }
}