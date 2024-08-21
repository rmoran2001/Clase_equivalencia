// Función que valida si una persona aplica para ser jubilada
export function puedeJubilarse(edad, aportesIGSS) {
    return edad >= 65 && aportesIGSS >= 240;
}


