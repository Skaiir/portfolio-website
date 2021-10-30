export const scrollTo = (id) => scrollToWithOffset(id, 0)

export const scrollToWithOffset = (id, offSet) => {
  const y =
    document.querySelector('#' + id).getBoundingClientRect().top +
    window.scrollY -
    10
  window.scrollTo({ top: y, behavior: 'smooth' })
}
