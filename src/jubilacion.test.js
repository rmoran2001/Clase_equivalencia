import { puedeJubilarse } from './jubilacion';

describe('Validación de jubilación', () => {
    test('Clase 1: Edad >= 65 y Aportes IGSS >= 240 (Debería retornar true)', () => {
        expect(puedeJubilarse(65, 240)).toBe(true);
        expect(puedeJubilarse(70, 300)).toBe(true);
    });

    test('Clase 2: Edad >= 65 y Aportes IGSS < 240 (Debería retornar false)', () => {
        expect(puedeJubilarse(65, 239)).toBe(false);
        expect(puedeJubilarse(70, 100)).toBe(false);
    });

    test('Clase 3: Edad < 65 y Aportes IGSS >= 240 (Debería retornar false)', () => {
        expect(puedeJubilarse(64, 240)).toBe(false);
        expect(puedeJubilarse(50, 300)).toBe(false);
    });

    test('Clase 4: Edad < 65 y Aportes IGSS < 240 (Debería retornar false)', () => {
        expect(puedeJubilarse(64, 239)).toBe(false);
        expect(puedeJubilarse(50, 100)).toBe(false);
    });
});
