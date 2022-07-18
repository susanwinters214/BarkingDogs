const sounds = ['dogs1', 'dogs2', 'dogs3', 'dogs4', 'dogs5', 'dogs6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
  btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
    stopPreviousSound()

     document.getElementById(sound).play()
  })

    document.getElementById('buttons').appendChild(btn)
})

function stopPreviousSound() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}