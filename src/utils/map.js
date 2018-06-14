export default (props, key, fn) => {
  return (
    props &&
    props.data &&
    props.data[key] &&
    props.data[key].edges &&
    props.data[key].edges.map((node = {}) => fn(node.node || {}))
  )
}
