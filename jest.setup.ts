import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
    jest.setSystemTime(new Date(2022, 2, 1, 9, 30, 0, 0));
    // Default: 3/1/22 @9:30am
});

afterAll(() => {
    jest.useRealTimers();
});
