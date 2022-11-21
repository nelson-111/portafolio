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
 * Makes an iteration that sums a fractioned random number, so the randomness is "purer"
 * @param range The maximum random number
 * @param fraction The number of parts is divided the range
 * @returns A random number
 */
function fractionedRandom(range: number, fraction: number)
{
  let index = 0
  let result = 0

  while(index <= fraction)
  {
    result += random(range / fraction)
    index += 1
  }

  return result
}

/**
 * @returns A hsl value with random numbers
 */
function BgHsl()
{
  return `hsl(${fractionedRandom(360, 5)} ${random(70, 20)}% ${fractionedRandom(15, 5)}%)`
}

const style_variables = {
  'color-1': `hsl(${fractionedRandom(360, 2)} 100% ${random(5, 90)}%)`,
  'bg-gradient': `linear-gradient(${fractionedRandom(360, 5)}deg, ${BgHsl()}, ${BgHsl()}, ${BgHsl()})`,
  'shadow': '0 0 0.5vmax var(--color-1)',
  'text-size': 'clamp(2vh, 4vh, 2.5vmax)'
}

export const style_values = Object.entries(style_variables)
.map(([key, value]) => `--${key}:${value}`)
.join(';')