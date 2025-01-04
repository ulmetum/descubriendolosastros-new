export interface VariantsformProducts {
  enter: (direction: 'forward' | 'backward') => { x: number | string }
  center: { x: number | string }
  exit: (direction: 'forward' | 'backward') => { x: number | string }
}
