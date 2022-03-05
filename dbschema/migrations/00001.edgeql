CREATE MIGRATION m1bsvdahbzso53sl5halwankbxpstjqwgla3ebsypjw6mr4ybmgotq
    ONTO initial
{
  CREATE TYPE default::Movie {
      CREATE REQUIRED PROPERTY title -> std::str;
  };
  CREATE TYPE default::User {
      CREATE MULTI LINK likes -> default::Movie;
      CREATE REQUIRED PROPERTY name -> std::str;
  };
};
