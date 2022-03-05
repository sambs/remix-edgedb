import * as edgedb from "edgedb";
export { default as e } from "../dbschema/edgeql-js";
export type { $infer } from "../dbschema/edgeql-js";

export const client = edgedb.createClient();
