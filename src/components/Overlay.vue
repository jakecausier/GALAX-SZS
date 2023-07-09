<script setup>
    import { ref, computed, onMounted, defineProps } from 'vue';

    const props = defineProps({
        remaining: {
            required: true
        },
        remainingExact: {
            required: true
        }
    });

    const textWidth = ref(null);
    const textPosition = ref(0);

    onMounted(() => {
        updateTextWidth();
        updateTextPosition();

        window.addEventListener('resize', () => {
            updateTextWidth();
            updateTextPosition();
        })
    });

    const updateTextWidth = () => {
        textWidth.value = window.innerWidth / 2;
    };

    const updateTextPosition = () => {
        textPosition.value = window.innerHeight - 50;
    };
</script>
<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-cover bg-center z-[9999]" style="background-image: url('/img/laugh.png')">
        <svg width="100vw" height="100vh" class="absolute bottom-0 left-0 w-screen h-screen">
            <text aria-hidden="true" :x="textWidth" :y="`${textPosition}px`" text-anchor="middle" stroke="#000000" stroke-width="8px" fill="#000000" class="text-2xl lg:text-5xl font-sans drop-shadow-subtitle pointer-events-none">Don't forget to laugh {{ remaining ? `${remaining} from now` : 'soon' }}!</text>
            <text :x="textWidth" :y="`${textPosition}px`" text-anchor="middle" fill="#FFFFFF" class="text-2xl lg:text-5xl font-sans">Don't forget to laugh {{ remaining ? `${remaining} from now` : 'soon' }}!</text>
            <text :x="textWidth" y="50px" text-anchor="middle" stroke="#000000" stroke-width="6px" fill="#000000" class="text-base font-sans drop-shadow-subtitle pointer-events-none">TL Note: Exactly {{ remainingExact || 'some uncertain time' }} from now</text>
            <text :x="textWidth" y="50px" text-anchor="middle" fill="#FFFFFF" class="text-base font-sans">TL Note: Exactly {{ remainingExact || 'some uncertain time' }} from now</text>
        </svg>
    </div>
</template>
