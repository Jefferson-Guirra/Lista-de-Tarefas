type callBack = () => void

export default function debounce(callback: callBack, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback()
      timer = null
    }, delay)
  }
}
