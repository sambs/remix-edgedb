import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export type $MovieλShape = $.typeutil.flatten<_std.$Object_4d45d5f0950a11ecba09dfe7f1d24c40λShape & {
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true, false>;
  "<likes[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false, false>;
  "<likes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false, false>;
}>;
type $Movie = $.ObjectType<"default::Movie", $MovieλShape, null>;
const $Movie = $.makeType<$Movie>(_.spec, "d6145616-9c64-11ec-80bf-ddb790274b3f", _.syntax.literal);

const Movie: $.$expr_PathNode<$.TypeSet<$Movie, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Movie, $.Cardinality.Many), null, true);

export type $UserλShape = $.typeutil.flatten<_std.$Object_4d45d5f0950a11ecba09dfe7f1d24c40λShape & {
  "likes": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, true, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null>;
const $User = $.makeType<$User>(_.spec, "d6166794-9c64-11ec-a195-797533277309", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);



export { $Movie, Movie, $User, User };

type __defaultExports = {
  "Movie": typeof Movie;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Movie": Movie,
  "User": User
};
export default __defaultExports;
