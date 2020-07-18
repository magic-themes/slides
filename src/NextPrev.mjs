export const View = ({ next = false, prev = false, state }) =>
  div({ class: 'NextPrev' }, [
    prev && Link({ to: prev === '/' ? state.root : `${state.root}${prev}/`, text: 'prev' }),
    next && Link({ to: next === '/' ? state.root : `${state.root}${next}/`, text: 'next' }),
  ])

export const style = {
  position: 'fixed',
  bottom: '0.5em',
  right: '0.5em',
  left: 'auto',
  top: 'auto',

  a: {
    margin: '0 1em',
  },
}
