function random(range: number, adjuster = 0) {
  return Math.floor(Math.random() * range + adjuster)
}

function randoms_sum(max_value: number, number_length: number){
  let index = 0
  let result = 0

  while(index <= number_length)
  {
    result += random(max_value / number_length)
    index += 1
  }

  return result
}

function hsl_for_bg() {
  return `hsl(${randoms_sum(360, 5)} ${random(70, 20)}% ${randoms_sum(15, 5)}%)`
}

const style_variables = {
  'color-1': `hsl(${randoms_sum(360, 5)} 100% ${random(5, 90)}%)`,
  'bg-gradient': `linear-gradient(${randoms_sum(360, 5)}deg, ${hsl_for_bg()}, ${hsl_for_bg()}, ${hsl_for_bg()})`,
  'shadow': '0 0 0.5vmax var(--color-1)',
  'text-size': 'clamp(2vh, 4vh, 2.5vmax)'
}

export const style_values = Object.entries(style_variables)
.map(([key, value]) => `--${key}:${value}`).join(';');