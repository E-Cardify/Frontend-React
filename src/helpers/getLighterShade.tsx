
export default function getLighterShade(color: string) {
    const [base, shade] = color.split('-');
    const newShade = Number(shade) - 200;
    console.log(`${base}-${newShade}`)
    return `${base}-${newShade}`;
}
