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
        this.DFS(x, y)
        console.log(this.newMaze);
        
    }

    private DFS(x: number, y: number) {
        

        if (this.isOutside(x, y)) return false
        if (this.isGoal(x, y)) return true
        if (this.isBlocked(x, y)) return false
        if (!this.isOpen(x, y)) return false
    
        this.newMaze[x][y] = this.newMaze[x][y] == "1" ? "1" : 'v'

        
        // ←
        if (this.DFS(x - 1, y)) return true
    
        // ↑
        if (this.DFS(x, y + 1)) return true
    
        // →
        if (this.DFS(x + 1, y)) return true
    
        // ↓
        if (this.DFS(x, y - 1)) return true
    

        return false

      
      
      
    }

    private isOutside(x,y){
        let rowCount= this.newMaze.length
        let columnCount= this.newMaze[0].length
        return x >= rowCount || x < 0 || y >= columnCount || y < 0

    }

    private isOpen(x,y){
        return this.newMaze[x][y]==' ' ||  this.newMaze[x][y]=='1'
    }

    private isVisited(x,y){
        return this.newMaze[x][y]=='v'
    }

    private isBlocked(x, y): boolean {
        return this.newMaze[x][y] === '*'
    }
      

    private isGoal(x,y){
        return this.newMaze[x][y]=='2'

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
