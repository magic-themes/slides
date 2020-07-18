export const View = ({ next = false, prev = false, state }) =>
  div({ class: 'NextPrev' }, [
    next && Link({ to: next === '/' ? state.root : `${state.root}${next}/`, text: 'next' }),
    prev && Link({ to: prev === '/' ? state.root : `${state.root}${prev}/`, text: 'prev' }),
  ])

export const style = {
  a: {
    margin: '0 1em',
  },
}
