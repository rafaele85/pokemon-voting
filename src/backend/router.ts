import * as trpc from '@trpc/server';
import {z} from "zod";
import {PokemonClient} from "pokenode-ts";
import {Pokemon} from "../types/pokemon";

const resource = 'get-pokemon-by-id'

const inputSchema = z.object({
    id: z.number(),
})
type InputDefType = typeof inputSchema

type ParamType = { input: z.infer<InputDefType> }

const resolve = async (params: ParamType) => {
    const api = new PokemonClient()

    const res = await api.getPokemonById(params.input.id)

    const pokemon: Pokemon = {nickname: res.name, sprite: res.sprites?.front_default || undefined, id: res.id}
    return pokemon
}

const params = {
    input: inputSchema,
    resolve
}


export const appRouter = trpc.router().query(resource, params)
export type AppRouter = typeof appRouter

