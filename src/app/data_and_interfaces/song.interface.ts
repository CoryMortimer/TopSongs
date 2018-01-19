import { SongArtist } from './song-artist.interface';
import { SongMetaData } from './song-meta-data.interface';
import { SmallThumb } from './small-thumb.interface';

export interface Song {
  active: number;
  artist: SongArtist;
  createdAt: string;
  difficulty: string;
  difficultyId: number;
  metaData?: SongMetaData;
  smallThumb: SmallThumb;
  title: string;
  updatedAt: string;
  objectId: string;
}
