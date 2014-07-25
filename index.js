
module.exports = function bind(val, min, max, def) {
  if (val == null || isNaN(val)) val = def || 0
  val = Math.round(val)
  if (typeof min === 'number') val = Math.max(val, min)
  if (typeof max === 'number') val = Math.min(val, max)
  return val
}
