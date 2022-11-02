
import { toCanvas, toDataURL, toString } from 'qrcode';

    
    const EVENT_READY = 'ready'
    const QrCode = defineComponent({
        name: 'QrCode',
        props:{
            value: {type: String, default: undefined},
            options:{type:Object, default: undefined},
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
            },
        },

        mounted(){
            this.generate()
        },
        
        methods:{
            generate(){
                const options = this.options || {}
                const value = String(this.value)
                const done  = () =>{
                    this.$emit(EVENT_READY, this.$el)
                }

                switch (this.tag) {
                    case 'canvas':
                        toCanvas(this.$el, value, options, (err) =>{
                            console.log("New Value", value)
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

                                Object.keys(attributes).forEach((key) =>{
                                    const attribute = attributes[Number(key)]
                                    this.$el.setAttribute(attribute.name, attribute.value)
                                })

                                Object.keys(childNodes).forEach((key) =>{
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

    export default QrCode