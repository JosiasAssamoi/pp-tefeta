import fs from "fs";
import MazeSolver from './MazeSolver' 

const args: string[] = process.argv.slice(2)

if (args.length !== 1) {
  console.log("/!\\ USAGE: ts-node ./index.ts <FILE> /!\\")
  process.exit(0)
}

const file: string = args[0]

if (!fs.existsSync(file)) {
  console.log(`The file ${file} does not exist.`)
  process.exit(-1)
}

const map_file: string = fs.readFileSync(file, { encoding: "ascii" }).trim()

let map_maze: string[] = map_file.split("\n").splice(1).map(row => {
  
  return row.trim()
}
);

let maze = new MazeSolver(map_maze);
maze.solve()



