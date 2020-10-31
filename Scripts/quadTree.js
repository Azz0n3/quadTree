class QuadTree {
    constructor(rectangle, maxAmount) {
        this.boundary = rectangle;
        this.isDivided = false;
        this.maximumPoints = maxAmount;
        this.points = [];
        this.x = this.boundary.x;
        this.y = this.boundary.y;
        this.height = this.boundary.height;
        this.width = this.boundary.width;

        this.showBranch();
    }

    showBranch() {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = '#ffff00';
        ctx.strokeRect(this.x, this.y, this.height, this.width);
    }

    insertInChildren({ x, y }) {
        this.Ne.insertPoint({ x, y });
        this.No.insertPoint({ x, y });
        this.Se.insertPoint({ x, y });
        this.So.insertPoint({ x, y });
    }

    insertPoint({ x, y }) {
        if (this.boundary.contains({ x, y })) {
            if (!this.isDivided) {
                if (this.points.length === this.maximumPoints) {
                    this.Ne = new QuadTree(new Rectangle((this.x + this.width / 2), (this.y), (this.height / 2), (this.width / 2)), this.maximumPoints);
                    this.No = new QuadTree(new Rectangle((this.x), (this.y), (this.height / 2), (this.width / 2)), this.maximumPoints);
                    this.Se = new QuadTree(new Rectangle((this.x + this.width / 2), (this.y + this.height / 2), (this.height / 2), (this.width / 2)), this.maximumPoints);
                    this.So = new QuadTree(new Rectangle((this.x), (this.y + this.height / 2), (this.height / 2), (this.width / 2)), this.maximumPoints);

                    this.insertInChildren({ x, y });

                    this.points.forEach(point => {
                        this.insertInChildren(point);
                    });

                    this.isDivided = true;
                } else {
                    this.points.push({ x, y });
                    return;
                }
            } else {

                this.insertInChildren({ x, y })
            }

        }
        return;
    }
}