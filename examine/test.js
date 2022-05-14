const execTryCatch = ({ fn, args, callback, resolve, reject }) => {
  try {
    const result = fn.apply(this, args)
    resolve(callback && callback(args) || result)
  } catch (err) {
    reject(err)
  }
}

const clearTimer = (target) => {
  if (target) {
    clearTimeout(target)
    target = null
  }
}

const isImmediate = (immediate, isInvoke, callback) => {
  return immediate && isInvoke && callback()
}

function debounce(fn, delay = 233, options = { immediate: false, callback }) {
  let timer = null
  let isInvoke = true
  const { immediate, callback } = options
  const _debounce = function (...args) {
    clearTimer(timer)
    return new Promise((resolve, reject) => {
      isImmediate(immediate, isInvoke, () => {
        execTryCatch({ fn, args, callback, resolve, reject })
        return isInvoke = false
      })

      timer = setTimeout(execTryCatch.bind(this, { fn, args, callback, resolve, reject }), delay)
    })
  }

  _debounce.cancel = () => clearTimer(timer)

  return _debounce
}

