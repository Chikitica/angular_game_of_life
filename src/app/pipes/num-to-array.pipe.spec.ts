import { NumToArrayPipe } from './num-to-array.pipe';

describe('NumToArrayPipe', () => {
  const pipe = new NumToArrayPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform number 2 to array of [0,1]', () => {
    expect(pipe.transform(2)).toEqual([0,1]);
  });
});
