

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffffff';
ctx.fillStyle = "#ffffff";

const insertPointButton = document.getElementById("add-points");
const createTreeButton = document.getElementById("create-tree");


const points = [];

insertPointButton.onclick = function () {
    const nPoints = document.getElementById('points-entry');

    for (let index = 0; index < nPoints.value; index++) {
        const x = Math.floor(Math.random() * (495 - 0));
        const y = Math.floor(Math.random() * (495 - 0));
        ctx.fillRect(x, y, 3, 3);
        points.push({ x, y });
    }
    
};


createTreeButton.onclick = function () {
    const maxPointAmount = document.getElementById("maximum-points-entry").value;

    const quadTree = new QuadTree(new Rectangle(0, 0, 500, 500), parseInt(maxPointAmount));

    points.forEach(point => {
        quadTree.insertPoint(point)
    });
}