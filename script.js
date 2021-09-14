var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d", {alpha: false});

var {
    cos, sin,
    atan2: atan,
    abs, sqrt,
    PI, floor,
    round, sign
} = Math;

var loop = (value, max) => (value % max + max) % max;
var rotate = (value, range) => {
	if(value > +range/2) value -= range;
	if(value < -range/2) value += range;
	return value;
}
var rDis = (a, b, c=(PI * 2)) => rotate(loop(b - a, c), c);

var random = (max=1, min=0) => Math.random() * (max - min) + min;
var srand = () => {
    var rad = random(PI2);
    var c = cos(rad);
    var s = sin(rad);
    var a = c + s + 2;
    return a/4;
};
var randomOf = ([...list]) => list[floor(random(list.length))];
var PI2 = PI * 2;
var dist = (x, y) => ((x ** 2) + (y ** 2)) ** .5;

const env = {
    SOLOLEARN: Symbol()
};
const Enviroment = undefined;

CanvasRenderingContext2D.prototype.zoom = function(x, y, l=1, w=1, r, h, k) {
    if(r != undefined) {
        if(!h) {
            h = x + l/2;
            k = y + w/2;
        }
        var c = cos(r);
        var s = sin(r);
        this.setTransform(c * l, s * l, -s * w, c * w, h, k);
        this.translate(-(h-x)/l, -(k-y)/w);
    }else{
        this.setTransform(l, 0, 0, w, x, y);
    }
};
let a = n => 2 ** n;
var TEAM = {
    GOOD: a(0),
    BAD:  a(1),
    BULLET: a(2),
    ENEMY: a(4),
    BOSS: a(5)
};
var DEAD = 10;
{
    class Path extends Path2D{
        constructor(path) {
            if(typeof path == "function") {
                super();
                path(this);
            }else super(path);
        }
    }

    var shapes = new Map;
    shapes.set("square.4", new Path(ctx => {
        var r = .4;
        ctx.moveTo(r, 0);
        ctx.lineTo(1 - r, 0);
        ctx.quadraticCurveTo(1, 0, 1, 0 + r);
        ctx.lineTo(1, 1 - r);
        ctx.quadraticCurveTo(1, 1, 1 - r, 1);
        ctx.lineTo(r, 1);
        ctx.quadraticCurveTo(0, 1, 0, 1 - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
    }));
    shapes.set("square.5", new Path(ctx => {
        var r = .5;
        ctx.moveTo(r, 0);
        ctx.lineTo(1 - r, 0);
        ctx.quadraticCurveTo(1, 0, 1, 0 + r);
        ctx.lineTo(1, 1 - r);
        ctx.quadraticCurveTo(1, 1, 1 - r, 1);
        ctx.lineTo(r, 1);
        ctx.quadraticCurveTo(0, 1, 0, 1 - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
    }));
    shapes.set("pause", new Path(ctx => {
        var a = .3;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 1);
        ctx.lineTo(a, 1);
        ctx.lineTo(a, 0);
        a = 1 - a;
        ctx.moveTo(1, 0);
        ctx.lineTo(1, 1);
        ctx.lineTo(a, 1);
        ctx.lineTo(a, 0);
    }));
    shapes.set("arrow", new Path(path => {
        var mid = 1/2;
        var top = 1/16;
        var btm = 9/10;
        var spl = 1/2;
        var wid = 14/16;
        var spr = 11/16;
		path.moveTo(mid, top);
		path.lineTo(wid, spl);
		path.lineTo(spr, spl);
		path.lineTo(spr, btm);
        spr = 1 - spr;
        wid = 1 - wid;
		path.lineTo(spr, btm);
		path.lineTo(spr, spl);
		path.lineTo(wid, spl);
		path.closePath();
		path.rotation = PI / 2;
	}));
    shapes.set("arrow-box", new Path(path => {
        var mid = 1/2;
        var wid = 1/8;
        var low = 1/2;
        var a = 1/20;
		//Top Triangle
		path.moveTo(mid, 1 / 8 - a);
		path.lineTo(wid, low - a);
		path.lineTo(1 - wid, low - a);
		path.closePath();
		//Bottom Box
		path.rect(wid, 6 / 10, 3/4, 2 / 10);
		path.rotation = PI / 2;
	}));
    shapes.set("bullet", new Path(path => {
		// path.rotation = PI / 2;
        var r = 1/3;
		path.moveTo(0, 1);
		path.quadraticCurveTo(0, 0, r, 0);
		path.lineTo(1 - r, 0);
		path.quadraticCurveTo(1, 0, 1, 1);
		path.closePath();
    }))
}
class Entity{
    constructor() {
        this.x = random(game.w);
        this.y = random(game.h);
        this.ox = this.x;
        this.oy = this.y;
    }
    explode() {}
    dead = 0;
    update() {
        var {friction} = this;
        this.vx *= friction;
        this.vy *= friction;
        if(!this.dead) this.tick();
        this.ox = this.x;
        this.oy = this.y;
        this.x += this.vx;
        this.y += this.vy;
        this.screenlock();
        if(this.hp <= 0) {
            ++this.dead;
        }
        for(let [enemy, number] of this.inv) {
            if(--number) this.inv.set(enemy, number);
            else this.inv.delete(enemy);
        }
    }
    friction = 0.8;
    get alpha() {
        if(this.dead) return 1 - this.dead/DEAD;
        return (this.hp/this.xHp) * .8 + .2;
    }
    draw() {
        this.drawo2();
        this.drawo();
        this.draw1();
        this.draw2();
    }
    drawWith(obj) {
        obj = {...this, ...obj};
        // this.drawo2.call(obj);
        // this.drawo.call(obj);
        this.draw1.call(obj);
        this.draw2.call(obj);
    }
    draw1() {
        var {x, y, s, r, alpha} = this;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.fill(this.shape);
        ctx.resetTransform();
        ctx.restore();
    }
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale * .5;

        x += s * .5;
        y += s * .5;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    drawo() {
        var {ox, x, oy, y, s, r, alpha} = this;
        x = (ox + x) * .5;
        y = (oy + y) * .5;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha * .5;
        ctx.fillStyle = this.color;
        ctx.fill(this.shape);
        ctx.resetTransform();
        ctx.restore();
    }
    drawo2() {
        var {ox: x, oy: y, s, r, alpha} = this;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha * .2;
        ctx.fillStyle = this.color;
        ctx.fill(this.shape);
        ctx.resetTransform();
        ctx.restore();
    }
    hit(what) {
    }
    inv = new Map;
    attacked({enemy, atk}) {
        // if(!this.inv.has(enemy)) {
            this.inv.set(enemy, 10);
            if(atk) this.hp -= atk;
        // }
    }
    screenlock() {
        var {x, y, s, vx, vy} = this;
        var b = 1;
        var lx = x + s;
        var ly = y + s;
        var hit;
        if(x < 0) {
            this.x = 0;
            this.vx = abs(vx) * b;
            hit = true;
        }else if(lx > game.w) {
            this.x = game.w - s;
            this.vx = -abs(vx) * b;
            hit = true;
        }
        if(y < 0) {
            this.y = 0;
            this.vy = abs(vy) * b;
            hit = true;
        }else if(ly > game.h) {
            this.y = game.h - s;
            this.vy = -abs(vy) * b;
            hit = true;
        }
        return hit;
    }
    register(enemy) {}
    move(rad, mult=1) {
        if(mult > 1) mult = 1;
        if(mult < -1) mult = -1;
        var dis = this.spd * mult;
        this.vx += cos(rad) * dis;
        this.vy += sin(rad) * dis;
    }
    moveTo(enemy, mult) {
        this.move(Entity.radian(enemy, this), mult);
    }
    team = 0;
    hits = 0;
    coll = 0;
    static collTest(a, b) {
        return (a.coll & b.team) || (b.coll & a.team);
    }
    static hitTest(a, b) {
        if(a.inv.has(b)) return;
        if(b.inv.has(a)) return;
        return (a.hits & b.team) || (b.hits & a.team);
    }
    /**@param {Entity} a param {Entity} b*/
    static collide(a, b) {
        var am = a.m;
        var bm = b.m;

		am = sqrt(am);
		bm = sqrt(bm);

		// var hrad = this.radian(b, a);

        var ar = a.s/2;
        var br = b.s/2;

        var s = (b.s - a.s)/2;

        var hrad = atan(b.oy - a.oy + s, b.ox - a.ox + s);

        // hrad = hrad + rDis(hrad, orad)/2;
		
		// // //Center point
		// var px = a.x + ar * cos(hrad);
		// var py = a.y + ar * sin(hrad);

        // ar /= 2; br /= 2;

		// a.x = px - cos(hrad) * ar - ar;
		// a.y = py - sin(hrad) * ar - ar;
		// b.x = px + cos(hrad) * br + br;
		// b.y = py + sin(hrad) * br + br;

		//Line radian
		var lrad = rDis(PI, hrad);

        var arad = atan(a.vy, a.vx);
        var brad = atan(b.vy, b.vx);

		//Movement radian
		var amr = rDis(lrad, arad);
		var bmr = rDis(lrad, brad);

		//Movement force
		var amf = cos(amr);
		var bmf = cos(bmr);

		if(sign(amf) > 0) amf = 0;
		if(sign(bmf) < 0) bmf = 0;

		//Movement saved
		var ams = abs(sin(amr));
		var bms = abs(sin(bmr));

		//Velocity force
		var avf = dist(a.vx, a.vy);
		var bvf = dist(b.vx, b.vy);

		var aforce = amf * avf;
		var bforce = bmf * bvf;

		var ab = am/bm;
		var ba = bm/am;

		var tm = am + bm;
		var abm = am/tm;
		var bam = bm/tm;

		bms = bms + (1 - bms) * (bam - 1);
		ams = ams + (1 - ams) * (abm - 1);

		b.vx = b.vx * bms - cos(hrad) * aforce * ab;
		b.vy = b.vy * bms - sin(hrad) * aforce * ab;
		a.vx = a.vx * ams - cos(hrad) * bforce * ba;
		a.vy = a.vy * ams - sin(hrad) * bforce * ba;
    };
    /**@param {Entity} a @param {Entity} b*/
	static radian = (a, b) => {
        var s = (a.s - b.s)/2;
        return atan(a.y - b.y + s, a.x - b.x + s);
    };
    /**@param {Entity} a @param {Entity} b*/
	static distance = (a, b) => {
        var s = (a.s - b.s)/2;
        return dist(a.y - b.y + s, a.x - b.x + s);
    };
	static isTouching(a, b) {
		var as = a.s;
		var bs = b.s;
		var ax = a.x;
		var bx = b.x;
		var ay = a.y;
		var by = b.y;
		return ax + as > bx
			&& bx + bs > ax
			&& ay + as > by
			&& by + bs > ay
		;
	};
    s = 1;
    x = 0;
    y = 0;
    vx = 0;
    vy = 0;
    spd = .075;
    m = 1;
    hp = 1;
    xHp = 1;
    atk = 1;
}
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0;
}
class Player extends Entity{
    constructor() {
        super();
        this.x = (game.w - this.s)/2;
        this.y = (game.h - this.s)/2;
    }
    tick() {
        var mx = 0;
        var my = 0;
        if(keys.has("KeyW")) --my;
        if(keys.has("KeyS")) ++my;
        if(keys.has("KeyA")) --mx;
        if(keys.has("KeyD")) ++mx;
        if(mx || my) {
            var rad = atan(my, mx);
            // this.r = rad;
            this.move(rad);
        }
        mx = 0; my = 0;
        if(keys.has("ArrowUp"   )) --my;
        if(keys.has("ArrowDown" )) ++my;
        if(keys.has("ArrowLeft" )) --mx;
        if(keys.has("ArrowRight")) ++mx;
        if(mx || my) {
            var rad = atan(my, mx);
            // this.r = rad;
            this.shoot(rad);
        }
        if(this.lastShot) --this.lastShot;
        this.r = atan(this.vy, this.vx);
    }
    hit(what) {
        if(this.hits & what.team) {
            what.attacked({enemy: this, atk: this.atk});
        }
    }
    shoot(rad) {
        if(!this.lastShot) {
            enemies.push(new Bullet(this, rad));
            this.lastShot = 20;
        }
    }
    atk = 1;
    color = "#55f";
    shape = shapes.get("square.4");
    color2 = "#aaf";
    shape2 = shapes.get("square.4");
    team = TEAM.GOOD;
    hits = TEAM.BAD;
    coll = TEAM.BAD;
}
class Enemy extends Entity{
    hit(what) {
        if(this.hits & what.team) {
            what.attacked({enemy: this, atk: this.atk});
        }
    }
    spawn() {
        var d = 10;
        var I = this;
        do{
            this.x = random(game.w - this.s);
            this.y = random(game.h - this.s);
        }while(close());
        function close() {
            for(let blob of enemies) {
                if(blob instanceof Player && Entity.distance(blob, I) < d) {
                    return true;
                }
                if(Entity.hitTest(I, blob) && Entity.isTouching(blob, I)) {
                    return true;
                }
            }
        }
        return this;
    }
    xHp = .5;
    hp  = .5;
    team = TEAM.BAD + TEAM.ENEMY;
    hits = TEAM.GOOD;
    coll = TEAM.ENEMY;
}
class Brain extends Enemy{
    constructor() {
        super();
        this.brainPoints = [];
        this.rad = random(PI2);
    }
    brainMove() {
		var lines = [];
		var max;
		var add = (PI * 2)/64;
		for(let a = 0; a < PI * 2; a += add) {
			var num = 0;
			for(let [rad, pow] of this.brainPoints) {
				let n = pow < 0; //iaNegative?
				num += abs(((cos(a - rad) + 1)/2) ** (n? 2: .2)) * pow;
			}
			if(isNaN(max) || num > max) {
				max = num;
			}
			lines.push([a, num]);
		}
		var [rad] = randomOf(lines.filter(([a, num]) => num == max));
		max = abs(max);
		// if(max < .1) max = .1;
		// if(max > 1) max = 1;

        this.rad = rad;

        this.move(rad, max);
		// this.vx += cos(rad) * this.spd * max;
		// this.vy += sin(rad) * this.spd * max;
		this.crad = rad;
		this.cmax = max;
		this.lines = lines;
        this.brainPoints = [];
	}
    wander = .5;
    tick() {
        this.rad += (srand() - .5)/4;
        this.brainPoints.push([this.rad, this.wander]);
        var lx = this.x + this.s;
        var ly = this.y + this.s;

        var d = 10;
        var p = 15;

        if(this.x < d) {
            var n = (this.x - d)/-d;
            n **= p;
            this.brainPoints.push([PI, -n]);
        }
        if(lx > game.w - d) {
            var dis = game.w - lx;
            var n = (dis - d)/-d;
            n **= p;
            this.brainPoints.push([0, -n]);
        }
        if(this.y < d) {
            var n = (this.y - d)/-d;
            n **= p;
            this.brainPoints.push([PI * 3/2, -n]);
        }
        if(ly > game.h - d) {
            var dis = game.h - ly;
            var n = (dis - d)/-d;
            n **= p;
            this.brainPoints.push([PI/2, -n]);
        }
        // var d = 10;
        // for(let enemy of enemies) {
        //     if(enemy == this) continue;
        //     var dis = Entity.distance(this, enemy);
        //     if(dis < d) {
        //         var n = (dis - d)/-d;
        //         var rad = Entity.radian(this, enemy);
        //         n **= 2;
        //         this.brainPoints.push([rad, n]);
        //     }
        // }
        // this.move(this.rad);
        this.brainMove();
        // this.r = this.rad;
    }
    register(enemy) {
        var dis = Entity.distance(this, enemy);
        var d = 10;
        if(dis < d) {
            var n = (dis - d)/-d;
            var rad = Entity.radian(this, enemy);
            n **= 2;
            this.brainPoints.push([rad, n]);
        }
    }
    draw() {
        super.draw();
        var mx = this.x + this.s/2;
        var my = this.y + this.s/2;
        // // All options
        // if(this.lines) for(let [rad, spd] of this.lines) {
		// 	var dis = abs(spd);
		// 	ctx.strokeStyle = spd > 0? "green": "red";
		// 	ctx.beginPath();
		// 	ctx.moveTo(mx * scale, my * scale);
		// 	var x = mx + cos(rad) * dis;
		// 	var y = my + sin(rad) * dis;
		// 	ctx.lineTo(x * scale, y * scale);
		// 	ctx.stroke();
		// }
        // // Brain lines
        // for(let [rad, spd] of this.brainPoints) {
		// 	var dis = abs(spd) * 10;
		// 	ctx.strokeStyle = spd > 0? "green": "red";
		// 	ctx.beginPath();
		// 	ctx.moveTo(mx * scale, my * scale);
		// 	var x = mx + cos(rad) * dis;
		// 	var y = my + sin(rad) * dis;
		// 	ctx.lineTo(x * scale, y * scale);
		// 	ctx.stroke();
		// }
    }
    color = "#ccc";
    shape = shapes.get("square.4");
}
class Mover extends Enemy{
    color = "#fa5";
    shape = shapes.get("square.4");
    shape2 = shapes.get("arrow");
    color2 = "#f00"
    constructor(r) {
        super();
        this.r = r ?? random(PI2);
    }
    tick() {
        this.move(this.r);
        this.r = atan(this.vy, this.vx);
    }
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s, r + PI/2);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
}
class Walker extends Mover{
    color = "#ffa";
    shape = shapes.get("square.4");
    color2 = "#aa0";
    spd = .05;
}
class Bullet extends Mover{
    constructor(parent, rad) {
        super(rad);
        this.parent = parent;
        Bullet.position(this, rad);
        this.time = 100;
        this.team = parent.team + TEAM.BULLET;
        this.hits = parent.hits;
        this.color = parent.color;
        this.coll = parent.coll + TEAM.BULLET;
    }
    static position(what, rad, parent) {
        if(!parent) parent = what.parent;
        var s = what.s * .5;
        var ps = parent.s;
        what.r = rad;
        var c = cos(rad), s = sin(rad);

        var h = Math.min(abs(1 / c), abs(1 / s));

        c *= h; s *= h;

        what.x = parent.x + ps/2 - what.s/2 + c * ps;
        what.y = parent.y + ps/2 - what.s/2 + s * ps;
    }
    hit(what) {
        if(this.hits & what.team) {
            what.attacked({enemy: this, atk: this.atk});
            // what.vx += cos(this.r) * 3;
            // what.vy += sin(this.r) * 3;
        }
    }
    screenlock() {
        if(super.screenlock()) {
            this.r = atan(this.vy, this.vx);
        }
    }
    tick() {
        super.tick();
        var rad = atan(this.vy, this.vx);
        this.vx = cos(rad) * this.spd;
        this.vy = sin(rad) * this.spd;
        --this.time;
        if(this.time == 0) {
            this.hp = 0;
        }
    }
    s = .5;
    m = 3;
    friction = 1;
    spd = .6;
    // coll = 0;
}
class Chaser extends Brain{
    color = "#f5a";
    shape = shapes.get("square.4");
    wander = .8;
    register(enemy) {
        if(enemy instanceof Chaser) return;
        if(enemy instanceof Bullet) return;
        var dis = Entity.distance(this, enemy);
        var d = 5;
        if(dis < d) {
            var n = (dis - d)/-d;
            var rad = Entity.radian(enemy, this);
            n **= .5;
            this.brainPoints.push([rad, n]);
        }
    }
}
class Chill extends Enemy{
    tick() {
        this.r = atan(this.vy, this.vx);
    }
    color = "#0f0";
    shape = shapes.get("square.4");
    color2 = "#ff0";
    shape2 = shapes.get("pause");
    hp = 1;
}
class MiniBoss extends Mover{
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD;
    coll = 0;
    s = 1.5;
    hp  = 10;
    xHp = 10;
    phase = 0;
    tick() {
        var m = this.hp/this.xHp;
        switch(this.phase) {
            case 0:
                this.spd = .075;
                this.moveTo(main);
                this.r = atan(this.vy, this.vx);
                if(Entity.distance(this, main) < 5) {
                    this.phase = 1;
                    this.flash = 0;
                }
            break;
            case 1:
                ++this.flash;
                this.color = `hsl(0, ${(this.flash % 10) * 10}%, 50%)`;
                if(this.flash < 40) {
                    this.r = Entity.radian(main, this);
                }
                if(this.flash >= 50) {
                    this.phase = 2;
                    this.spd = 0.6;
                    this.timer = 0;
                }
            break;
            case 2:
                this.timer++;
                var b = 7.5;
                var c = 10 * m;
                if(this.timer < b) {
                    this.move(this.r);
                }else if(this.timer < b + c) {
                    var a = this.timer - b;
                    this.color = `hsl(0, ${a * 2}%, 50%)`;
                }else{
                    this.phase = 0;
                    this.color = "#f00";
                }
                this.r = atan(this.vy, this.vx);
            break;
        }
    }
    shape = shapes.get("square.4");
    color = "#f00";
    shape2 = shapes.get("arrow-box");
    color2 = "#fff";
}
class Boss extends Brain{
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD;
    coll = 0;
    xHp = 20;
    hp = 20;
    s = 2;
    r = 0;
    ro = PI/2;
    goal = new Point;
    toGoal() {
        var {goal} = this;
        if(Entity.distance(this, goal) > 1) {
            this.moveTo(goal);
        }else return 1;
    }
    register(enemy) {
        if(!(enemy instanceof Player || enemy instanceof Bullet)) return;
        var dis = Entity.distance(this, enemy);
        var d = 10;
        if(dis < d) {
            var n = (dis - d)/-d;
            var rad = Entity.radian(this, enemy);
            n **= 2;
            this.brainPoints.push([rad + PI, -n]);
        }
    }
    tick() {
        var {goal} = this;
        switch(this.phase) {
            case 0:
                goal.x = game.w - this.s/2;
                goal.y = this.s/2;
                if(this.toGoal()) {
                    this.phase = 1;
                    this.timer = 0;
                }
            break;
            // case 0:
            //     goal.x = game.w/2;
            //     goal.y = game.h/2;
            //     if(this.toGoal()) {
            //         this.phase = 1;
            //         this.timer = 0;
            //     }
            // break;
            case 1:
                goal.x = game.w - this.s/2;
                goal.y = game.h - this.s/2;
                if(this.timer++ % 10 == 0) {
                    var blob = new Mover();
                    Bullet.position(blob, PI, this);
                    enemies.push(blob);
                }
                if(this.toGoal()) {
                    this.phase = 2;
                    this.timer = 0;
                }
            break;
            // case 1:
            //     ++this.timer;
            //     goal.x = game.w/2;
            //     goal.y = game.h/2;
            //     this.toGoal();
            //     var a = abs(this.timer % 500 - 250)/100;
            //     this.burstShot(a * PI);
            //     if(this.timer == 750) {
            //         this.phase = 2;
            //     }
            // break;
            case 2:
                super.tick();
                if(this.timer++ > 300) {
                    this.phase = 3;
                    this.timer = 0;
                }
            break;
            case 3:
                super.tick();
                if(++this.timer % 150 == 0) {
                    var blob = new Mover();
                    var rad = Entity.radian(main, this);
                    Bullet.position(blob, rad + PI/8, this);
                    enemies.push(blob);
                    var blob = new Mover();
                    Bullet.position(blob, rad - PI/8, this);
                    enemies.push(blob);
                }
                if(this.timer >= 150 * 5) {
                    this.phase = 4;
                }
            break;
            case 4:
                goal.x = this.s/2;
                goal.y = this.s/2;
                if(this.toGoal()) {
                    this.phase = 5;
                    this.timer = 0;
                }
            break;
            case 5:
                goal.x = this.s/2;
                goal.y = game.h - this.s/2;
                if(this.timer++ % 10 == 0) {
                    var blob = new Mover();
                    Bullet.position(blob, 0, this);
                    enemies.push(blob);
                }
                if(this.toGoal()) {
                    this.phase = 6;
                    this.timer = 0;
                }
            break;
            case 6:
                super.tick();
                if(++this.timer % 150 == 0) {
                    var blob = new Mover();
                    var rad = Entity.radian(main, this);
                    Bullet.position(blob, rad, this);
                    enemies.push(blob);
                }
                if(this.timer >= 150 * 5) {
                    this.phase = 0;
                }
            break;
        }
    }
    burstShot(o=0, u) {
        if(isNaN(u) || u <= 0) u = PI/2;
        for(let i = 0; i < PI2; i += u) {
            var blob = new Bullet(this, i + o);
            blob.coll = 0;
            blob.time = 10;
            enemies.push(blob);
        }
    }
    burstShot2(o=0, u) {
        if(isNaN(u) || u <= 0) u = PI;
        for(let i = 0; i < PI2; i += u) {
            var blob = new Mover();
            Bullet.position(blob, i + o, this);
            enemies.push(blob);
        }
    }
    phase = 0;
    color = "#ff0";
    color2 = "#f0f";
    shape2 = shapes.get("square.4");
    shape = shapes.get("bullet");
}
var main;
var bosses = new Set;
var enemies;
// var bullets;
var scale = 40;
const sf = 1/25;
var game = {
    width: 0,
    height: 0
};
onload = () => {
    try{
    document.body.appendChild(canvas);
    onresize();
    restart();
    }catch(err) {console.error(err); console.log(enemies)}
    update();
};
var level;
function restart() {
    main = new Player;
    enemies = [main];
    level = 0;
    // for(let i = 0; i < 10; i++) {
    //     let a = new Chaser();
    //     a.spawn();
    //     enemies.push(a);
    // }
    // for(let i = 0; i < 10; i++) {
    //     let a = new Brain();
    //     a.spawn();
    //     enemies.push(a);
    // }
    // for(let i = 0; i < 10; i++) {
    //     let a = new Mover();
    //     a.spawn();
    //     enemies.push(a);
    // }
}
onresize = () => {
    game.width = innerWidth;
    game.height = innerHeight;

    scale = round(sf * (game.width * game.height) ** .5);

    game.w = game.width/scale;
    game.h = game.height/scale;

    canvas.width = game.width;
    canvas.height = game.height;
};
var keys = new Map;
onkeydown = ({code}) => keys.set(code, keys.has(code) * 2 + 1);
onkeyup = ({code})   => keys.delete(code);

var gone;
if(Enviroment == env.SOLOLEARN) gone = true;
onblur = () => {
    gone = true;
};
onfocus = () => {
    gone = false;
    whenFocus();
};
var whenFocus = () => {};
var level = 0;
const ms = 20;
var frame = () => new Promise(resolve => {
    setTimeout(() => {
        if(gone) {
            whenFocus = resolve;
        }else{
            resolve();
        }
    }, ms);
});
async function update() {
    while(true) {
        await frame();
        try{
        // ctx.fillStyle = "#000a"
        // ctx.shadowBlur = 0;
        ctx.clearRect(0, 0, game.width, game.height);
        var i = 0;
        bosses.forEach(blob => {
            var l = 5;
            var w = game.width * 5/8;
            var x = (game.width - w)/2;
            var h = scale;
            var y = game.height - (i * 1.5 + 1) * h - l/2;
            ctx.strokeStyle = blob.color;
            ctx.fillStyle = blob.color2 || blob.color;
            ctx.lineWidth = l;
            ctx.fillRect(x, y, w * (blob.hp/blob.xHp), h);
            ctx.strokeRect(x, y, w, h);
            var s = 1 + 5/scale;
            blob.drawWith({x: x/scale - .5, y: y/scale - (s - 1)/2, s, r: PI * 3/2 + (blob.ro ?? 0), alpha: 1});
            if(!enemies.includes(blob)) {
                bosses.delete(blob);
            }
            ++i;
        });
        // main.update();
        // main.draw();
        for(let i = 0; i < enemies.length; i++) {
            let blob = enemies[i];
            blob.update();
            blob.draw();
            for(let j = i + 1; j < enemies.length; j++) {
                let them = enemies[j];
                them.register(blob);
                blob.register(them);
                var coll = Entity.collTest(blob, them);
                var hits = Entity.hitTest(blob, them);
                if((coll || hits) && Entity.isTouching(blob, them)) {
                    if(coll) Entity.collide(blob, them);
                    if(hits) {
                        blob.hit(them);
                        them.hit(blob);
                    }
                }
            }
        }
        var txt = `Level ${level}`;
        if(level == 5) txt = "MiniBoss";
        if(level == 10) txt = "Boss 1";
        ctx.font = `${scale}px Arial`;
        ctx.fillStyle = "#fff";
        ctx.fillText(txt, 0, scale - 5);
        enemies = enemies.filter(blob => {
            if(blob.dead < DEAD) return true;
            else blob.explode();
        });

        if(keys.get("Space") == 1) {
            restart();
            keys.set("Space", 2);
        }
        if(enemies.filter(blob => blob.team & TEAM.BAD).length == 0) {
            nextLevel();
        }
        }catch(err) {
            console.error(err);
        }
    }
}
function nextLevel() {
    switch(++level) {
        case 1:
            for(let i = 0; i < 10; i++) {
                var blob = new Chill();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 2:
            for(let i = 0; i < 5; i++) {
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
                var blob = new Chill();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 3:
            for(let i = 0; i < 10; i++) {
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 4:
            for(let i = 0; i < 10; i++) {
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
                var blob = new Chill();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 5:
            var blob = new MiniBoss;
            blob.spawn();
            enemies.push(blob);
            bosses.add(blob);
        break;
        case 6:
            for(let i = 0; i < 5; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
                var blob = new Chill();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 7:
            for(let i = 0; i < 5; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 8:
            for(let i = 0; i < 10; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 9:
            for(let i = 0; i < 5; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
                var blob = new Chill();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 10:
            var blob = new Boss;
            blob.spawn();
            enemies.push(blob);
            bosses.add(blob);
        break;
        default:
            --level;
        break;
    }
}
