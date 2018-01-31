export class Track {
  id: number;
  artist: string;
  title: string;
  image: string;

  equals(other: Track): boolean {
    return this.artist === other.artist && this.title === other.title;
  }
}
