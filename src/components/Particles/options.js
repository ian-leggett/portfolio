export default {
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ff0000',
      animation: {
        enable: true,
        speed: 70,
        sync: true,
      },
    },
    shape: {
      type: 'images',
      images: [
        {
          src: '/assets/images/react-logo.png',
          width: 100,
          height: 90,
        },
        {
          src: '/assets/images/js-logo.png',
          width: 100,
          height: 100,
        },
        {
          src: '/assets/images/css3-logo.png',
          width: 100,
          height: 140,
        },
        {
          src: '/assets/images/html-logo.png',
          width: 100,
          height: 141,
        },
        {
          src: '/assets/images/node-logo.png',
          width: 100,
          height: 100,
        },
      ],
    },
    opacity: {
      value: 0.2,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 40,
      random: { enable: true, minimumValue: 10 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false,
      distance: 100,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    life: {
      duration: {
        value: 20,
      },
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.2,
      },
      speed: 0.5,
      direction: 'top',
      random: false,
      straight: false,
      outModes: {
        default: 'destroy',
        bottom: 'none',
      },
      attract: {
        enable: true,
        distance: 300,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      resize: true,
    },
  },
  detectRetina: true,
  emitters: {
    direction: 'top',
    rate: {
      quantity: 2,
      delay: 0.10,
    },
    size: {
      width: 100,
      height: 10,
    },
    position: {
      x: 50,
      y: 110,
    },
  },
}
