function random(range: number, adjuster = 0) {
  return Math.floor(Math.random() * range + adjuster)
}

function hsl_for_bg() {
  return `hsl(${random(180) + random(180)} ${random(70, 20)}% ${random(7.5) + random(7.5)}%)`
}

const style_variables = {
  'color-1': `hsl(${random(180) + random(180)} 100% ${random(5, 90)}%)`,
  'bg-gradient': `linear-gradient(${random(180) + random(180)}deg, ${hsl_for_bg()}, ${hsl_for_bg()}, ${hsl_for_bg()})`,
  'shadow': '0 0 0.5vmax var(--color-1)',
  'text-size': 'clamp(2vh, 4vh, 2.5vmax)'
}

export const style_values = Object.entries(style_variables)
.map(([key, value]) => `--${key}:${value}`).join(';');