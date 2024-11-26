export const wrap = ({
  number,
  min,
  max,
}: {
  number: number
  min: number
  max: number
}) => Math.min(Math.max(number, min), max)
