export default class MazeSolver {
    maze: string[]
    mazeNumber:number[][]
    xStart:number
    yStart:number
    xEnd:number
    yEnd:number

    // 0 MUR   1 START 2 END  3 LIBRE
    constructor(maze: string[]) {
        this.maze = maze;
        this.mazeNumber = this.maze.map((row)=>{
            row= row.replace(/\*/g,'0')
            row= row.replace(/ /g,'3')
            return row.split('').map(Number);
        })
    }
    solve() {
        
        this.getStartAndEndCoords();
        let chemin: Object[] = [{x:this.xStart,y:this.yStart}]
        console.log(chemin);
        let x :number=this.xStart 
       while (  x < this.xEnd ){
                let y = this.yStart 
                // if(this.maze[x+1][y] != undefined && this.maze[x+1][y]=="2" ||  this.maze[x-1][y] != undefined && this.maze[x+1][y] || this.maze[x][y+1] != undefined && this.maze[x][y+1]=="2" ||  this.maze[x][y-1] != undefined && this.maze[x][y-1]){
                //     console.log('trouvé');
                //     break;
                // }
               
                if(this.maze[x+1][y]==" ") {
                    this.maze[String(x)][String(y-1)]="ok"
                    x++
                }   
                
                if(this.maze[x][y-1]==" ") {
                    this.maze[String(x)][String(y-1)]="ok"
                    console.log( this.maze[x][y-1]);
                    
                }  
            x++         
            } 
            console.log(this.maze);
            
    
    }

    private getStartAndEndCoords() {
        for (let i in this.maze) {
            let row: any = this.maze[i];
            
            
            for (let j in row) {
                if (row[j] == 1) {
                    this.xStart = parseInt(i);
                    this.yStart = parseInt(j);
                }
                if (row[j] == 2) {
                    this.xEnd =parseInt(i);
                    this.yEnd = parseInt(j);
                }
            }
        }
        
        
    }

}
