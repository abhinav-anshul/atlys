interface ISpacer {
  x: number
  y: number
}

function Spacer({ y, x }: ISpacer) {
  return <div className={`py-${y} px-${x}`} />
}

export { Spacer }
