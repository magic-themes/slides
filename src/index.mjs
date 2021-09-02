export * as NextPrev from './NextPrev.mjs'

export const vars = {
  text: {
    dark: '#c4c4c4',
    light: '#212121',
  },

  background: {
    dark: '#212121',
    light: '#c4c4c4',
  },

  fontSize: '25px',

  fadeDuration: '500ms',

  neutral: '#ea4444',

  widths: {
    tablet: '500px',
    laptop: '1024px',
    desktop: '1600px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      fontSize: v.fontSize,
      lineHeight: '2.5',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      fontFamily: 'ubuntu',
      textAlign: 'center',
      fontSize: '25px',
      minHeight: '100vh',
      minWidth: '100vw',
      color: v.text.dark,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,
      padding: '0 0 3em',

      'svg.icon': {
        height: '1em',
        width: '1em',
      },

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    a: {
      color: v.neutral,
    },

    '.Footer': {
      display: 'none',
    },

    h1: {
      color: v.neutral,
      fontSize: '2em',
    },

    '.LightSwitch': {
      '.icon': {
        position: 'fixed',
        left: '0.5em',
        top: 'auto',
        bottom: '2.5em',
      },
    },

    '.NoSpy': {
      '.ShowHide': {
        left: '0.5em',
      },
    },
  }
}
