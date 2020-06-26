export default class MazeSolver {
    maze: string[]
    newMaze:any = []
    xStart:number
    yStart:number
    xEnd:number
    yEnd:number

    // 0 MUR   1 START 2 END  3 LIBRE
    constructor(maze: string[]) {
        this.maze = maze;
        this.bootMaze();
    }
    solve() {
        let chemin: Object[] = [{x:this.xStart,y:this.yStart}]
        console.log(chemin);
        let x :number=this.xStart 
        let y :number = this.yStart 
        let trouve:boolean = false
        let max :number = 0
       while ( !trouve && max < 1000){

                ({ x, y,trouve} = this.DFS(x, y, chemin,trouve))  
 
            max += 1 
            } 
            console.log(this.newMaze);
            //console.log(this.maze);
            
    
    }

    private DFS(x: number, y: number, chemin: Object[], trouve:boolean) {

      
        while (this.newMaze[x - 1][y] != undefined && this.newMaze[x - 1][y] == " ") {
            this.newMaze[x - 1][y] = "v"
            chemin.push({ x: x - 1, y })
            x--
        }

        while (this.newMaze[x][y + 1] != undefined && this.newMaze[x][y + 1] == " ") {
            this.newMaze[x][y + 1] = "v"
            chemin.push({ x, y: y + 1 })
            y++
        }

        while (this.newMaze[x + 1][y] != undefined && this.newMaze[x + 1][y] == " ") {
            this.newMaze[x + 1][y] = "v"
            chemin.push({ x: x + 1, y })
            x++
        }

        while (this.newMaze[x][y - 1] != undefined && this.newMaze[x][y - 1] == " ") {
            this.newMaze[x][y - 1] = "v"
            chemin.push({ x, y: y - 1 })
            y--;
        }
 
         ({ x, y } = this.putFalseOnCell(x, y, chemin,trouve))

         if( this.newMaze[x+1][y] && this.newMaze[x+1][y]=="2" ||  this.newMaze[x-1][y] && this.maze[x-1][y]=="2" || this.maze[x][y+1] && this.maze[x][y+1]=="2" ||  this.maze[x][y-1] && this.maze[x][y-1]=="2"){
            console.log('trouvé');
            trouve = true
            return {x,y,trouve}
        }
         
        return { x, y,trouve }

    }

    private putFalseOnCell(x: number, y: number, chemin: Object[],trouve:boolean) {
        if ( (this.newMaze[x - 1][y] == undefined || this.newMaze[x - 1][y] != " ") && (this.newMaze[x][y + 1] == undefined || this.newMaze[x][y + 1] != " ")  && (this.newMaze[x + 1][y] == undefined || this.newMaze[x+1][y] != " ") && (this.newMaze[x][y - 1] == undefined || this.newMaze[x][y - 1] != " ") ) {
            if (this.newMaze[x][y] && this.newMaze[x][y] == "v") {
                console.log(x,y); 
                this.newMaze[x][y] = "f"
            }
            if(chemin.length > 1){
                x = chemin[chemin.length - 1]['x']
                y = chemin[chemin.length - 1]['y']
                chemin.pop()
                this.DFS(x, y, chemin,trouve)
            }



        }
        return { x, y }
    }

    private bootMaze() {
        for (let i in this.maze) {
            let row: string[] = this.maze[i].split('');
            //create the array of cells 
            this.newMaze.push(row)
            for (let j in row) {
                if (row[j] == '1') {
                    this.xStart = parseInt(i);
                    this.yStart = parseInt(j);
                }
                if (row[j] == '2') {
                    this.xEnd =parseInt(i);
                    this.yEnd = parseInt(j);
                }
            }
        }      
    }

}
