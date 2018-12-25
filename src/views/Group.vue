<template>
  <div id='particles-js'>
    <div class="io-box">
      <div class="output">
        Some other output text
      </div>
      <hr>
        <input type="text" name="" value="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticlesJS',

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 100,
            'density': {
              'enable': true,
              'value_area': 10000
            }
          },
          'color': {
            'value': '#b89c3f'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 10,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 500,
            'color': '#333',
            'opacity': 0.4,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 2,
            'direction': 'bottom',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 0,
              'rotateY': 0
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'bubble'
            },
            'onclick': {
              'enable': false,
              'mode': 'repulse'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 0.5
              }
            },
            'bubble': {
              'distance': 200,
              'size': 12,
              'duration': 0.3,
              'opacity': 1,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  },
  computed: {

  }
}
</script>

<style src="../assets/Group.css">
</style>
