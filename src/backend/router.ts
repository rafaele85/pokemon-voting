import * as trpc from '@trpc/server';
import {z} from "zod";

const resource = 'hello'

const inputSchema = z.object({
    text: z.string().nullish(),
})
type InputDefType = typeof inputSchema

type ParamType = { input: z.infer<InputDefType> }

const resolve = (params: ParamType) => {
    return {
        greeting: `hello ${params.input?.text ?? 'world'}`
    }
}

const params = {
    input: inputSchema,
    resolve
}

export const appRouter = trpc.router().query(resource, params)
export type AppRouter = typeof appRouter

