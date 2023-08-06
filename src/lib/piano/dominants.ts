export const notes = ["C", "D", "E", "F", "G", "A", "B", "C"];

export function pickRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

export function pickDominantFromNote(note: string) {
    const indexOfNote = notes.indexOf(note);
    const goToLowerC = indexOfNote < 4;
    if (goToLowerC) {
        return notes.slice(0, indexOfNote + 1);
    }

    const n = notes.slice(indexOfNote, undefined);
    n.reverse();
    return n;
}