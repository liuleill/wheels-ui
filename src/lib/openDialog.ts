import { createApp,h } from 'vue';
import Dialog from './Dialog.vue';
export const openDialog = (options)=>{
    const {title,content,ok,cancel} = options
    const div = document.createElement('div');
    const close = ()=>{
        //@ts-ignore
        //上面这行注释让ts别报错，忽略
        app.unmount(div)
        div.remove()
    }
    document.body.appendChild(div)
    const app = createApp({
        render(){
            return h(
                Dialog,
                {
                    visible:true,
                    'onUpdate:visible':(newVisible)=>{
                        if(newVisible === false){
                            close()
                        }
                    },
                    ok,
                    cancel,
                },
                {
                    title,
                    content
                }
            )
        }
    })
    app.mount(div)
};