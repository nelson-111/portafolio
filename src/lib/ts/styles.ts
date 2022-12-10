/**
 * Multiply Math.random() with the range, then sum by the minimum of the range, an adjuster, all inside a Math.floor()
 * @param range The range of the random number, the maximum
 * @param adjuster The minimum of the range
 * @returns A random number
 */
function random(range: number, adjuster = 0)
{
  return Math.floor(Math.random() * range + adjuster)
}

/**
 * @returns A hsl value with random numbers
 */
function randomHSL()
{
  return `hsl(${random(360 * 4)} ${random(45, 45)}% ${random(15, 5)}%)`
}

/*
The code below creates a object of strings, these strings are used for css variables
*/
const style_variables = {
  'color-1': `hsl(${random(360 * 4)} 100% ${random(5, 90)}%)`,
  'bg-gradient': `linear-gradient(${random(360 * 4)}deg, ${randomHSL()}, ${randomHSL()}, ${randomHSL()})`,
  'shadow': '0 0 0.5vmax var(--color-1)',
  'text-size': 'clamp(2vh, 4vh, 2.5vmax)'
}

export const style_values = Object.entries(style_variables)
.map(([key, value]) => `--${key}:${value}`)
.join(';')