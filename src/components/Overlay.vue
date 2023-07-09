<script setup>
    import { ref, computed, onMounted, defineProps } from 'vue';

    const props = defineProps({
        remaining: {
            required: true
        }
    });

    const text = ref(null);
    const textWidth = ref(null);

    onMounted(() => {
        updateTextWidth();
        window.addEventListener('resize', () => {
            updateTextWidth();
        })
    });

    const updateTextWidth = () => {
        textWidth.value = window.innerWidth / 2;
    };
</script>
<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-cover bg-center z-[9999]" style="background-image: url('/img/laugh.png')">
        <svg width="100vw" height="100px" class="absolute bottom-0 left-0 w-screen h-[100px]">
            <text aria-hidden="true" ref="text" :x="textWidth" y="50%" text-anchor="middle" stroke="#000000" stroke-width="8px" fill="#000000" class="text-2xl lg:text-6xl font-sans drop-shadow-subtitle pointer-events-none">Don't forget to laugh {{ remaining ? `${remaining} from now` : 'soon' }}!</text>
            <text ref="text" :x="textWidth" y="50%" text-anchor="middle" fill="#FFFFFF" class="text-2xl lg:text-6xl font-sans">Don't forget to laugh {{ remaining ? `${remaining} from now` : 'soon' }}!</text>
        </svg>
    </div>
</template>
