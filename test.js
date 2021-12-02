import {AttandanceList} from './AttandanceList'
import {GenderGuesser} from './GenderGuesser'

describe('tests for the AttandanceList class', () => {
	describe('test for the constructor', () => {
		let attandanceList;
		beforeEach(() => {
			attandanceList = new AttandanceList();
		});
		
		test('constructor should work', () => {
			expect(attandanceList).toBeInstanceOf(AttandanceList);
			//expect(attandanceList.getList()).toEqual([]);
		});
	});

    describe('test for the getList method', () => {
        let attandanceList;
		beforeEach(() => {
			attandanceList = new AttandanceList();
		});

        test('should return an empty array', () => {
            expect(attandanceList.getList()).toEqual([]);
        });
    });

    describe('test for the add method', () => {
		let attandanceList;
		beforeEach(() => {
			attandanceList = new AttandanceList();
		});
		
		test('should return an array with one element, "István"', () => {
			attandanceList.add("István");
            expect(attandanceList.getList()).toEqual(["István"]);
		});
	});

    //TODO: not implemented

    describe('test for the has method', () => {
		let attandanceList;
		beforeEach(() => {
			attandanceList = new AttandanceList();
            attandanceList.add("István");
            attandanceList.add("József");
		});
		
		test('should return 0', () => {
            expect(attandanceList.has("István")).toEqual(0);
		});

        test('should return 1', () => {
            expect(attandanceList.has("József")).toEqual(1);
		});

        test('should return false', () => {
            expect(attandanceList.has("Jenő")).toEqual(false);
		});
	});
});

describe('tests for the GenderGuesser class', () => {
    describe('test for the getGuess method', () => {
        let genderGuesser;
		beforeEach(() => {
			genderGuesser = new GenderGuesser();
		});

        test('should resolve', () => {
            genderGuesser.getGuess('István').then((result) => {
                expect(result).resolves;
            });
        });

        test('should return something', () => {
            genderGuesser.getGuess('István').then((result) => {
                expect(result).not.toBe(null);
            });
        });

        test('should return male', () => {
            genderGuesser.getGuess('István').then((result) => {
                expect.arrayContaining("male");
            });
        });

        test('should return female', () => {
            genderGuesser.getGuess('Viktória').then((result) => {
                expect.arrayContaining("female");
            });
        });
    });
});