
export default function getLighterShade(color: string) {
    const [base, shade] = color.split('-');
    const newShade = Number(shade) - 200;
    return `${base}-${newShade}`;
}
