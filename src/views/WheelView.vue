<script setup>
import { ref } from 'vue'
import MainButton from '../components/MainButtonComponent.vue'
import WheelInput from '../components/WheelInputComponent.vue'
const prizes = ['Поцелуй', 'Обнимашка', 'Крепкое объятие', 'Желание']

const wheelRef = ref(null)
const isSpinning = ref(false)

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function rotate() {
  if (wheelRef.value && !isSpinning.value) {
    isSpinning.value = true
    const degrees = getRandomInt(159) + 201
    const totalDegrees = degrees * 10
    wheelRef.value.style.transform = `rotate(${totalDegrees}deg)`

    setTimeout(() => {
      isSpinning.value = false
    }, 4000)
  }
}
</script>
<template>
  <div class="flex flex-col gap-y-6 h-screen w-screen items-center justify-center">
    <div class="wheel-wrapper">
      <div class="absolute flex top-[8px] left-[254px] z-6">
        <svg
          width="36"
          height="46"
          viewBox="0 0 36 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.421 33.0699C18.7399 34.7137 16.4123 34.7164 15.7274 33.0742L3.10081 2.7993C2.55174 1.48277 3.51793 0.031111 4.94437 0.0294432L30.1267 7.9872e-07C31.5531 -0.00166696 32.5227 1.44772 31.9767 2.76554L19.421 33.0699Z"
            fill="#FFA811"
          />
          <g filter="url(#filter0_ddi_0_1)">
            <path
              d="M17.613 37.5147L4.00002 4.75393L31.1494 4.72219L17.613 37.5147Z"
              fill="#FFD42A"
            />
          </g>
          <defs>
            <filter
              id="filter0_ddi_0_1"
              x="0"
              y="0.722168"
              width="35.1494"
              height="44.7925"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_1"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.0666667 0 0 0 0.7 0"
              />
              <feBlend mode="normal" in2="shape" result="effect3_innerShadow_0_1" />
            </filter>
          </defs>
        </svg>
      </div>

      <ul class="wheel" ref="wheelRef">
        <li class="triangle" v-for="(item, index) in prizes" :style="{ '--index-item': index }">
          <p
            class="absolute flex bottom-[75%] left-[calc(256px-128px)] w-[256px] h-[96px] text-center items-center justify-center text-2xl wheel-text"
          >
            {{ item }}
          </p>
        </li>
      </ul>
      <div class="wheel-center"></div>
    </div>
    <MainButton title="Крутить" @click="rotate" />
    <WheelInput />
  </div>
</template>
<style scoped>
.wheel-wrapper {
  position: relative;
  /* 64px отступ - 32px для бордера */
  width: 544px;
  height: 544px;
  background: #a02956;
  clip-path: circle(50%);
}

.wheel-wrapper::after {
  position: absolute;
  /* 64px отступ - 32px для бордера */
  content: '';
  width: 520px;
  height: 520px;
  top: 12px;
  left: 12px;
  background: #ffa7c1;

  clip-path: circle(50%);
}

.wheel {
  z-index: 2;
  position: absolute;
  top: 16px;
  left: 16px;
  width: 512px;
  height: 512px;
  background: #ffa7c1;
  clip-path: circle(50%);
  transition: transform 3s cubic-bezier(0.25, 0.1, 0.1, 1);
}

.triangle::before {
  position: absolute; /* ✅ Все треугольники в одной точке */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* clip-path: polygon(0% 0%, 100% 0%, 0% 100%); */
  /* левый верхний угол, праввый верхний угол, нижний угол */
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
}

.triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fad6e1;
  clip-path: polygon(0.5% 0%, 99.5% 0%, 50% 49.5%);
  rotate: calc(90deg * var(--index-item));
}

.triangle:nth-child(odd) {
  color: white;
  background: #a80006;
}

.triangle:nth-child(even) {
  color: #ea4986;
  background: #fad6e1;
}

.triangle:nth-child(even)::before {
  background: #ffa7c1;
}

.wheel-text {
  font-family: 'Comfortaa', bold;
  font-weight: 900;
  font-size: 32px;
}

.wheel-center {
  z-index: 3;
  position: relative;
  /* 64px отступ - 32px для бордера */
  top: 240px;
  left: 240px;
  width: 64px;
  height: 64px;
  background: #ffa811;
  clip-path: circle(50%);
}

.wheel-center::after {
  position: absolute;
  z-index: 5;
  content: '';
  /* 64px отступ - 32px для бордера */
  top: 4px;
  left: -2px;
  width: 64px;
  height: 64px;
  background: #ffd42a;
  clip-path: circle(50%);
}
</style>
