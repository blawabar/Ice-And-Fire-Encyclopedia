export type Character = {
  url: string; //	The hypermedia URL of this resource
  name: string; // The name of this character
  gender: string; // The gender of this character.
  culture: string; // The culture that this character belongs to.
  born: string; // Textual representation of when and where this character was born.
  died: string; // Textual representation of when and where this character died.
  titles: Array<string>; // The titles that this character holds.
  aliases: Array<string>; // The aliases that this character goes by.
  father: string; // The character resource URL of this character's father.
  mother: string; // The character resource URL of this character's mother.
  spouse: string; // Character resource URLs that has had a POV-chapter in this book.
  allegiances: Array<string>; // An array of House resource URLs that this character is loyal to.
  books: Array<string>; // An array of Book resource URLs that this character has been in.
  povBooks: Array<string>; //	An array of Book resource URLs that this character has had a POV-chapter in.
  tvSeries: Array<string>; //	An array of names of the seasons of Game of Thrones that this character has been in.
  playedBy: Array<string>; //	An array of actor names that has played this character in the TV show Game Of Thrones.
};

export type CharactersRequestData = {
  page: number;
  pageSize: number;
  gender: string;
  culture: string;
};

export type CharactersFilterData = {
  gender: string;
  culture: string;
};

export type CharactersPaginationData = {
  page: number;
  pageSize: number;
};

export type CharactersData = Array<Character>;

export type CharactersResponse = {
  data: CharactersData;
  lastPage: number;
};

export type CharactersState = {
  data: CharactersData;
  isLoading: boolean;
  error: string | null;
  requestData: CharactersRequestData;
  currentPage: number;
  lastPage: number;
};

export type CharactersSuccessPayload = {
  data: CharactersData;
  requestData: CharactersRequestData;
  lastPage: number;
};
