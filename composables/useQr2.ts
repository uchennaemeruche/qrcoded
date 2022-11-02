
import  { QRCodeOptions, QRCodeRenderersOptions, QRCodeToDataURLOptions, toCanvas, toDataURL, toString } from 'qrcode'
import { PropType } from 'vue'

type Modules = boolean[][]
type Level = 'L' | 'M' | 'Q' | 'H'

const defaultErrorCorrectLevel = 'H'

const SUPPORTS_PATH2D: boolean = (function () {
    try {
      new Path2D().addPath(new Path2D())
    } catch (e) {
      return false
    }
    return true
  })()


  const EVENT_READY = 'ready'



    
function generatePath(modules: Modules, margin: number = 0): string {
    const ops: string[] = []
    modules.forEach(function (row, y) {
      let start: number | null = null
      row.forEach(function (cell, x) {
        if (!cell && start !== null) {
          // M0 0h7v1H0z injects the space with the move and drops the comma,
          // saving a char per operation
          ops.push(
            `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
          )
          start = null
          return
        }
  
        // end of row, clean up or skip
        if (x === row.length - 1) {
          if (!cell) {
            // We would have closed the op above already so this can only mean
            // 2+ light modules in a row.
            return
          }
          if (start === null) {
            // Just a single dark module.
            ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`)
          } else {
            // Otherwise finish the current line.
            ops.push(
              `M${start + margin},${y + margin} h${x + 1 - start}v1H${
                start + margin
              }z`
            )
          }
          return
        }
  
        if (cell && start === null) {
          start = x
        }
      })
    })
    return ops.join('')
  }

    const QrCodeProps ={
        value: {
            type: String,
            required: true,
            default: '',
          },
          size: {
            type: Number,
            default: 100,
          },
          
          background: {
            type: String,
            default: '#fff',
          },
          foreground: {
            type: String,
            default: '#000',
          },
          margin: {
            type: Number,
            required: false,
            default: 0,
          },
    }



    const QrCodeNuxtProps ={
        ...QrCodeProps,
        renderAs:{
            type: String as PropType<'canvas' | 'svg'>,
            required: false,
            default: 'canvas',
            validator: (as: any) => ['canvas', 'svg'].indexOf(as) > -1,
        }
     }


     const QRCodeCanvas = defineComponent({
        name: 'QRCodeCanvas',
        emits: [EVENT_READY],
        props: QrCodeProps,
        setup(props, {emit}) {
          const canvasEl = ref<HTMLCanvasElement | null>(null)
          
      
          const generate = () => {
            const { value, size, margin, background, foreground } = props
      
            // const { modules: cells } = QRCode(value, level)
            const numCells =  margin * 2
            const canvas = canvasEl.value
      
            if (!canvas) {
              return;
            }
      
            const ctx = canvas.getContext('2d')
      
            if (!ctx) {
              return;
            }
      
            const devicePixelRatio = window.devicePixelRatio || 1
      
            const scale = (size / numCells) * devicePixelRatio
            canvas.height = canvas.width = size * devicePixelRatio
            ctx.scale(scale, scale)
      
            ctx.fillStyle = background
            ctx.fillRect(0, 0, numCells, numCells)
      
            ctx.fillStyle = foreground
      
            
            toCanvas(canvas, value, (error) =>{
                if(error){
                    console.log("Canvas error", error)
                    throw error
                }
                emit(EVENT_READY, canvas)
            })
            
          }
      
          onMounted(generate)
          onUpdated(generate)
      
          return () => h(
            'canvas',
            {
              ref: canvasEl,
              style: { width: `${props.size}px`, height: `${props.size}px`},
            },
          )
        },
      })

     defineComponent({
        name: 'QrCode',
        
        

        props:{
            value:{type: String, default: undefined},
            options:{type: Object, default: undefined},
            tag: {type: String, default: 'canvas'}
        },

        emits: [EVENT_READY],

        watch:{
            $props:{
                deep: true,
                immediate: true,

                handler(){
                    if(this.$el){
                        this.generate()
                    }
                }
            }
        },

        mounted() {
            this.generate()
        },

        methods: {
            generate(){
                const options = this.options || {}
                const value = String(this.value)
                const done  = () =>{
                    this.$emit(EVENT_READY, this.$el)
                }

                switch (this.tag) {
                    case 'canvas':
                       toCanvas(this.$el, value, options, (err) =>{
                            if(err){
                                console.log("Canvas error:", err)
                                throw err
                            }
                            done()
                        })
                        break;

                    case 'img':
                        toDataURL(value, options, (error, url) => {
                            if (error) {
                              throw error;
                            }
                
                            this.$el.src = url;
                            this.$el.onload = done;
                          });
                          break;
                    

                    case 'svg':
                        toString(value, options, (error, string) =>{
                            if(error) throw error

                            const div = document.createElement('div')

                            div.innerHTML = string

                            const svg = div.querySelector('svg')

                            if(svg){
                                const {attributes, childNodes} = svg

                                Object.keys(attributes).forEach((key: string) =>{
                                    const attribute = attributes[Number(key)]
                                    this.$el.setAttribute(attribute.name, attribute.value)
                                })

                                Object.keys(childNodes).forEach((key: string) =>{
                                    const childNode = childNodes[Number(key)]
                                    this.$el.appendChild(childNode.cloneNode(true))
                                })
                                done()
                            }
                        })
                        break;
                    default:
                        break;
                }


            }
        },
        render(){
            return h(this.tag, this.$slots.default)
        }

    })
    

    

   

   


