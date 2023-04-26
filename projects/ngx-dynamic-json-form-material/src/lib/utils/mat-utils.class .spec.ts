import { MatUtils } from './mat-utils.class';

describe('MatUtils', () => {
  describe('filterEntries$', () => {
    it('returns correct filtered data to a given search string', (done) => {
      const spy1 = spyOn(MatUtils, 'filterGroup').and.callThrough();
      const spy2 = spyOn(MatUtils, 'filterEntry').and.callThrough();

      MatUtils.filterEntries$('blue', [
        { label: 'green', value: '1' },
        { label: 'red', value: '2', disabled: true },
        { label: 'orange', value: '3' },
        { label: 'blue', value: '4' },
        { label: 'white', value: '5' },
        {
          label: 'light variants',
          group: [
            { label: 'light-green', value: '11' },
            { label: 'light-red', value: '12', disabled: true },
            { label: 'light-orange', value: '13' },
            { label: 'light-blue', value: '14' },
            { label: 'light-white', value: '15' },
          ],
        },
      ]).subscribe((result) => {
        // Check Calls
        expect(spy1).toHaveBeenCalledWith(
          [
            { disabled: false, label: 'light-green', value: '11' },
            { disabled: true, label: 'light-red', value: '12' },
            { disabled: false, label: 'light-orange', value: '13' },
            { disabled: false, label: 'light-blue', value: '14' },
            { disabled: false, label: 'light-white', value: '15' },
          ],
          'blue'
        );

        // prettier-ignore
        {
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'green', value: '1' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: true, label: 'red', value: '2' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'orange', value: '3' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'blue', value: '4' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'white', value: '5' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'light-green', value: '11' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: true, label: 'light-red', value: '12' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'light-orange', value: '13' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'light-blue', value: '14' }, 'blue');
          expect(spy2).toHaveBeenCalledWith({ disabled: false, label: 'light-white', value: '15' }, 'blue');
        }

        // Check length
        expect(result.length).toBe(2);
        expect(result[1].group?.length).toBe(1);

        // Check values
        expect({
          label: result[0].label,
          value: result[0].value,
        }).toEqual({ label: 'blue', value: '4' });
        expect({
          label: result[1].group?.[0].label,
          value: result[1].group?.[0].value,
        }).toEqual({ label: 'light-blue', value: '14' });

        done();
      });
    });

    it('returns correct filtered data to no given search string', (done) => {
      MatUtils.filterEntries$('', [
        { label: 'green', value: '1' },
        { label: 'red', value: '2', disabled: true },
        { label: 'orange', value: '3' },
        { label: 'blue', value: '4' },
        { label: 'white', value: '5' },
        {
          label: 'light variants',
          group: [
            { label: 'light-green', value: '11' },
            { label: 'light-red', value: '12', disabled: true },
            { label: 'light-orange', value: '13' },
            { label: 'light-blue', value: '14' },
            { label: 'light-white', value: '15' },
          ],
        },
      ]).subscribe((result) => {
        expect(result).toEqual([
          { label: 'green', value: '1' },
          { label: 'red', value: '2', disabled: true },
          { label: 'orange', value: '3' },
          { label: 'blue', value: '4' },
          { label: 'white', value: '5' },
          {
            label: 'light variants',
            group: [
              { label: 'light-green', value: '11' },
              { label: 'light-red', value: '12', disabled: true },
              { label: 'light-orange', value: '13' },
              { label: 'light-blue', value: '14' },
              { label: 'light-white', value: '15' },
            ],
          },
        ]);

        done();
      });
    });
  });

  describe('toNormalizedEntry', () => {
    [
      {
        data: { label: 'red', value: '2', disabled: true },
        result: { label: 'red', value: '2', disabled: true },
      },
      {
        data: { label: 'red', value: '2' },
        result: { label: 'red', value: '2', disabled: false },
      },
      {
        data: { value: '2' },
        result: { label: undefined, value: '2', disabled: false },
      },
      {
        data: { label: 'red', value: '2', group: [] },
        result: { label: 'red', value: '2', disabled: false },
      },
    ].forEach((test, index) => {
      it(`returns correct normalized Option. Variant: "${index + 1}"`, () => {
        expect(MatUtils.toNormalizedEntry(test.data as any)).toEqual(test.result as any);
      });
    });
  });

  describe('filterGroup', () => {
    it('makes expected calls', () => {
      const spy = spyOn(MatUtils, 'filterEntry').and.callThrough();

      expect(
        MatUtils.filterGroup(
          [
            { label: 'light-orange', value: '13' },
            { label: 'light-blue', value: '14' },
          ],
          'blue'
        )
      ).toEqual([{ label: 'light-blue', value: '14' }]);

      expect(spy).toHaveBeenCalledWith({ label: 'light-orange', value: '13' }, 'blue');
      expect(spy).toHaveBeenCalledWith({ label: 'light-blue', value: '14' }, 'blue');
    });
  });

  describe('filterEntry', () => {
    [
      {
        data: { label: 'red', value: '2' },
        result: false,
      },
      {
        data: { value: '2' },
        result: false,
      },
      {
        data: { value: '' },
        result: false,
      },
      {
        data: { value: null },
        result: false,
      },
      {
        data: { label: 'blue', value: '2' },
        result: true,
      },
    ].forEach((test, index) => {
      it(`returns the correct value to a given string and option. Variant: "${index + 1}"`, () => {
        expect(MatUtils.filterEntry(test.data as any, 'blue')).toBe(test.result);
      });
    });
  });
});
