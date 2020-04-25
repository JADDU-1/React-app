import { observable } from 'mobx'
class Cell {
  id
  @observable isHidden;

  constructor(gridObject) {
    this.id = gridObject.id
    this.isHidden = gridObject.isHidden
  }
}

export default Cell;