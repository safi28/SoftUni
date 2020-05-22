function listOfSongs(arr) {
  let nOfSongs = Number(arr.shift());
  let typeSong = arr.pop();
  let nameOfSong = [];
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  for (let i = 0; i < nOfSongs; i++) {
    let [typeList, name, time] = arr[i].split("_");
    let song = new Song(typeList, name, time);
    nameOfSong.push(song);
  }
  if (typeSong === "all") {
    nameOfSong.forEach((i) => console.log(i.name));
  } else {
    let filtered = nameOfSong.filter((i) => i.typeList === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}
