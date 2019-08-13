module.exports = {
  "bitbus": 1,
  "name": "twetch",
  "host": {
    "bitbus": "https://bob.bitbus.network"
  },
  "from": 594900,
  "v": 3,
  "q": {
    "find": {
      "$and": [
        { "out.tape.cell.s": "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut" }, 
        { "out.tape.cell.s": "app" }, 
        { "out.tape.cell.s": "twetch" }
      ]
    },
    "project": { "out.tape.cell.s": 1, "out.tape.cell.ops": 1, "out.tape.cell.lb": 1 }
  },
  "l": {
    "map": (x) => {
      let chosenTape;
      x.out.forEach((o) => {
        if (o.tape[0].cell[0].ops === "OP_RETURN" || o.tape[0].cell[1].ops === "OP_RETURN") {
          chosenTape = o.tape; 
        }
      })
      return chosenTape;
    }
  }
}
