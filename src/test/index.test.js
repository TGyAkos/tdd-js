import { Szamologep } from '../index.js';

describe('Szamologep test', () => {
    it('should add two numbers', () => {
        const calc = new Szamologep();

        const result = calc.add(2, 3);
        expect(result).toBe(5);
    })
    it('should subtract two numbers', () => {
        const calc = new Szamologep();

        const result = calc.subtract(2, 3);
        expect(result).toBe(-1);
    })
    it('should multiply two numbers', () => {
        const calc = new Szamologep();

        const result = calc.multiply(2, 3);
        expect(result).toBe(6);
    })
    it('should divide two numbers', () => {
        const calc = new Szamologep();

        const result = calc.divide(6, 3);
        expect(result).toBe(2);
    })
});
