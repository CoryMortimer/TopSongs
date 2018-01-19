import { SecondsToDurationPipe } from './seconds-to-duration.pipe';

describe('SecondsToDurationPipe', () => {
  let pipe: SecondsToDurationPipe;

  beforeEach(() => {
    pipe = new SecondsToDurationPipe();
  });

  it('should return the string version of a false value', () => {
    expect(pipe.transform(null)).toBe('');;
  });

  it('should return 0:00 for 0', () => {
    expect(pipe.transform(0)).toBe('0:00');
  });

  it('should return 22:25 for 1345.454', () => {
    expect(pipe.transform(1345.454)).toBe('22:25');
  });
});
