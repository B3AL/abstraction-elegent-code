input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
})
