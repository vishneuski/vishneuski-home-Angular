/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {

  const pipe = new ReversePipe();

  it('should reverse the inputs', () => {
    expect(pipe.transform('value')).toBe('eulav');
    expect(pipe.transform('Big deal!')).toBe('!laed giB');
  });
});
