import { observable, action } from 'mobx';
import Cell from '../Models/gridCell';
import levels from '../level.json'


class GameStore {
  @observable level = 0
  @observable topLevel = 0
  @observable currentLevelGridCells = []
  selectedCellsCount = 0
  @observable isGameCompleted = false
  
  @action.bound
  onCellClick(isCellHidden) {
   let gridSize = levels[this.level].gridSize
   if(isCellHidden) {
     this.incrementSelectedCellCount()
     if(this.selectedCellsCount === gridSize) {
       this.timer = setTimeout(() => {
       this.currentLevelGridCells = []
       this.resetSelectedCellsCount()
       this.goToNextLevelAndUpdateCells()
     },300)}
   }
   else {
    clearTimeout(this.timer)
    setTimeout(() => {
     this.goToInitialLevelAndUpdateCells()
     this.resetSelectedCellsCount()
     this.setTopLevel()
     this.currentLevelGridCells = []
   }, 300)
  }
  }

  @action.bound
  setTimer() {
    clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(() =>this.resetGame(), 3000 * (this.level + 3));
  }
  
  @action.bound
  setGridCells() {
     this.setTimer()
      let gridSize = levels[this.level].gridSize
      let totalCells =levels[this.level].gridSize*levels[this.level].gridSize
      for (let i = totalCells; i > 0 ; --i) {
        let addingEachGridItem = {
          id:Math.floor(Math.random() * 1000),
          isHidden : i <= gridSize ? true : false
        }
        const eachGridObject = new Cell(addingEachGridItem)
        this.currentLevelGridCells.push(eachGridObject)
      }
      this.shuffleGridCells()
  }
  shuffleGridCells(){
   let length=Number(this.currentLevelGridCells.length-1);
   for (; length > 0; length--) {
     const shuffled = Math.floor(Math.random() * (length + 1));
     const temp = this.currentLevelGridCells[length];
     this.currentLevelGridCells[length] = this.currentLevelGridCells[shuffled];
     this.currentLevelGridCells[shuffled] = temp;
   }
  }

  @action.bound
  goToNextLevelAndUpdateCells(){
  if(this.level === 6)
  {
    this.isGameCompleted = true;
    this.currentLevelGridCells=[];
  }
  else{
   this.currentLevelGridCells = []
   this.level=this.level+1
   this.setGridCells();
  }
 }

 @action.bound
 goToInitialLevelAndUpdateCells(){
    setTimeout(() => {
        this.resetGame();
      }, 200);
 }

 @action.bound
 resetSelectedCellsCount(){
    this.selectedCellsCount = 0;
 }

 @action.bound
 incrementSelectedCellCount() {
    this.selectedCellsCount = this.selectedCellsCount + 1;
 }

 @action.bound
 onPlayAgainClick(){
  this.isGameCompleted = false;
   this.resetGame()
 } 

 @action.bound
 resetGame(){
    this.currentLevelGridCells = []
    this.setTopLevel()
    this.level = 0;
    this.resetSelectedCellsCount();
    this.setGridCells();
 }

 @action.bound
 setTopLevel(){
    if (this.level > this.topLevel) {
        this.topLevel = this.level;
      }
 }
  
}

const gridGameStore = new GameStore();
export default gridGameStore;