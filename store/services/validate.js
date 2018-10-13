export function checkRes (data) {
  if (data.status < 400) {
    return true
  } else {
    return false
  }
}
