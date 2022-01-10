gsap.to('.overlay',2, {
    delay: 1,
    y: "-100%",
    ease:Expo.easeInOut
})

gsap.to('.overlay h1',2, {
    opacity: 0,
    y: -60,
    ease:Expo.easeInOut
})

gsap.to('.overlay span',2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease:Expo.easeInOut
})

gsap.to('.contenidoJumbo',2, {
    delay: 1.4,
    opacity: 1,
    y: 50,
    ease:Expo.easeInOut
})

gsap.from('.logo',2, {
    delay: 1.5,
    opacity: 0,
    x: -50,
    ease:Expo.easeInOut
})