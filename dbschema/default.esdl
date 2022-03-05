module default {
  type User {
    required property name -> str;
    multi link likes -> Movie;
  }
  type Movie {
    required property title -> str;
  }
}
