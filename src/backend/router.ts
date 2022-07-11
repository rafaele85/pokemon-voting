import * as trpc from '@trpc/server';
import {z} from "zod";
import {PokemonClient} from "pokenode-ts";

const resource = 'get-pokemon-by-id'

const inputSchema = z.object({
    id: z.number(),
})
type InputDefType = typeof inputSchema

type ParamType = { input: z.infer<InputDefType> }

const resolve = async (params: ParamType) => {
    const api = new PokemonClient()

    const pokemon = await api.getPokemonById(params.input.id)

    return {nickname: pokemon.name, sprites: pokemon.sprites}
}

const params = {
    input: inputSchema,
    resolve
}


export const appRouter = trpc.router().query(resource, params)
export type AppRouter = typeof appRouter

