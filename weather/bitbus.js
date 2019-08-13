module.exports = {
  "bitbus": 1,
  "name": "weathersv",
  "host": {
    "bitbus": "https://bob.bitbus.network"
  },
  "from": 594900,
  "v": 3,
  "q": {
    "find": { "out.tape.cell.s": "1LtyME6b5AnMopQrBPLk4FGN8UBuhxKqrn" },
    "project": { "out.tape.cell.s": 1 }
  },
  "l": {
    "map": (tx) => {
      return tx.out[0].tape[1].cell[2].s
    }
  }
}
