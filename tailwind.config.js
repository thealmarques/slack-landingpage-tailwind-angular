module.exports = {
  theme: {
    extend: {
      maxHeight: {
        '70p': '70%',
        '340px': '340px'
      },
      maxWidth: {
        '40rem': '40rem',
        '22rem': '22rem',
        '30rem': '30rem',
        '32rem': '32rem',
        '870px': '870px'
      },
      width: {
        '320px': '320px',
        '280px': '280px'
      },
      height: {
        '370px': '370px',
        '340px': '340px'
      },
      screens: {
        sm: { max: "1084px" },
      },
      boxShadow: {
        dropdown: '0 0 2rem rgba(0,0,0,.1)'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'button': '#611f69',
        'slack-gray': '#f5f5f5'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'button': "#611f69"
      }),
      textColor: theme => ({
        ...theme('colors'),
        'button': "#611f69"
      })
    },
  },
  variants: {
    textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
};
