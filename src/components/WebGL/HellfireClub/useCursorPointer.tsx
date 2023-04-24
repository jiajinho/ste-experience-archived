export default () => {
  const onPointerOver = () => {
    document.body.style.cursor = "pointer";
  }

  const onPointerOut = () => {
    document.body.style.cursor = "auto";
  }

  return { onPointerOver, onPointerOut }
}