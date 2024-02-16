let roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        let area = this.width * this.length;
        return(area);
    }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);