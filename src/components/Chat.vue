<script setup>
    import { ref, onMounted } from 'vue';

    const chatContainer = ref(null);
    const chatStyle = ref({
        a: '18181b',
        b: 100,
        c: 'FFFFFF',
        d: 'FFFFFF',
        e: '555555',
        g: 'ffffff',
        h: '555555',
        j: 'ffffff',
        k: 'e0e0e0',
        l: '444444',
        m: '444444',
        n: 'FFFFFF',
        p: '10',
        q: '18181b',
        r: 100,
        t: 0,
        ab: false,
        surl: 0,
        allowpm: 0,
        fwtickm: 0
    });

    onMounted(() => {
        let script = document.createElement('script')
        script.setAttribute('id', 'cid0020000108958775450');
        script.setAttribute('data-cfasync', 'false');
        script.setAttribute('src', 'https://st.chatango.com/js/gz/emb.js');
        script.setAttribute('async', 'true');
        script.setAttribute('style', 'width: 100%; height: 100%;');
        script.innerText = JSON.stringify({
            handle: 'galaxmoe',
            arch: 'js',
            styles: chatStyle.value
        })
        chatContainer?.value?.replaceWith(script);
    })
</script>
<template>
    <div class="min-h-[400px]">
        <div ref="chatContainer" />
    </div>
</template>
