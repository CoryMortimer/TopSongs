import { Piano } from './piano.interface';
import { TimeSignature } from './time-signature.interface';

export interface SongMetaData {
  beatCount: number;
  microSecondsPerBeat: number;
  piano: Piano;
  secondsPerBeat: number;
  secondsPerTick: number;
  ticksPerBeat: number;
  timePerBar: number;
  timeSignature: TimeSignature;
  totalTime: number;
}
