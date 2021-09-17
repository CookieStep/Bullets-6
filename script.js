var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");

var {
    cos, sin,
    atan2: atan,
    abs, sqrt,
    PI, floor,
    round, sign,
    ceil
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
    }));
    shapes.set("square-ring", new Path(ctx => {
        var w = 0.2;
        var a = 1-w;
        ctx.rect(0, 0, 1, w);
        ctx.rect(0, 0, w, 1);
        ctx.rect(0, a, 1, w);
        ctx.rect(a, 0, w, 1);
    }));
	shapes.set("tophat", new Path(path => {
		path.rect(-0.2, -0.2, 1.4, 0.2);
		path.rect(0, -0.8, 1, 0.6);
	}));
}
class Entity{
    constructor() {
        this.x = random(game.w);
        this.y = random(game.h);
        this.ox = this.x;
        this.oy = this.y;
    }
    explode() {
        var a = this.xp;
        var o = random(PI);
        for(let i = 0; i < a; i++) {
            var blob = new Xp;
            Xp.position(blob, i * PI2/a + o, this);
            enemies.push(blob);
        }
    }
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
        var {x, y, s, r, ro, alpha} = this;
        x *= scale;
        y *= scale;
        s *= scale;

        if(!r) r = 0;
        if(!ro) ro = 0;

        r += ro;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.fill(this.shape);
        ctx.resetTransform();
        ctx.restore();
    }
    draw2() {
        var {x, y, s, r, alpha, ro, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale * .5;

        x += s * .5;
        y += s * .5;

        if(!r) r = 0;
        if(!ro) ro = 0;

        r += ro;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    drawo() {
        var {ox, x, oy, y, s, r, ro, alpha} = this;
        x = (ox + x) * .5;
        y = (oy + y) * .5;
        x *= scale;
        y *= scale;
        s *= scale;

        if(!r) r = 0;
        if(!ro) ro = 0;

        r += ro;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha * .5;
        ctx.fillStyle = this.color;
        ctx.fill(this.shape);
        ctx.resetTransform();
        ctx.restore();
    }
    drawo2() {
        var {ox: x, oy: y, s, r, ro, alpha} = this;
        x *= scale;
        y *= scale;
        s *= scale;

        if(!r) r = 0;
        if(!ro) ro = 0;

        r += ro;

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
        if(!this.god && !this.inv.has(enemy)) {
            this.inv.set(enemy, 10);
            if(atk) this.hp -= atk;
        }
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

		// am = sqrt(am);
		// bm = sqrt(bm);

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

		// var ab = am/bm;
		// var ba = bm/am;
		var tm = am + bm;

		var aforce = ((2 * am)/(am + bm)) * avf;
		var bforce = ((2 * bm)/(am + bm)) * bvf;

		var abm = (am - bm)/tm;
		var bam = (bm - am)/tm;

        // var v1i = dist(a.vx, a.vy);
        // var v2i = dist(a.vx, a.vy);

        // a.vx = ((m1 - m2)/(m1 + m2)) * v1i + ((2 * m2)/(m1 + m2)) * v2i;
        // b.vx = ((2 * m1)/(m1 + m2)) * v1i + ((m2 - m1)/(m1 + m2)) * v2i;

		// bms = bms + (1 - bms) * (bam - 1);
		// ams = ams + (1 - ams) * (abm - 1);

		b.vx = b.vx * bam + cos(hrad) * aforce;
		b.vy = b.vy * bam + sin(hrad) * aforce;
		a.vx = a.vx * abm - cos(hrad) * bforce;
		a.vy = a.vy * abm - sin(hrad) * bforce;
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
    ro = 0;
}
class Xp extends Entity{
    static position(what, rad, parent) {
        if(!parent) parent = what.parent;
        // var s = what.s * .5;
        var ps = parent.s;
        what.r = rad;
        // var c = cos(rad), s = sin(rad);

        // var h = Math.min(abs(1 / c), abs(1 / s));

        // c *= h; s *= h;

        what.x = parent.x + ps/2 - what.s/2;
        what.y = parent.y + ps/2 - what.s/2;
    }
    s = .2;
    life = 0;
    moveTo2(enemy, mult) {
        var obj = {...this};
        obj.x += obj.vx * 3;
        obj.y += obj.vy * 3;
        this.move(Entity.radian(enemy, obj), mult);
    }
    explode() {};
    spd = 0.05;
    tick() {
        if(++this.life < 7) {
            this.friction = 1;
            this.move(this.r);
        }else if(++this.life < 20) {
            this.friction = 0.8;
        }else if(!main.dead) {
            this.friction = 0.99;
            this.spd = 0.05;
            this.moveTo2(main);
            if(Entity.isTouching(main, this)) {
                this.dead = DEAD;
                ++main.xp;
                main.onXp();
                ++score;
            }
        }
        this.hue += 10;
    }
    constructor() {
        super();
        this.hue = random(360);
    }
    draw() {
        var {x, y, ox, oy, vx, vy} = this;
        // var mx = abs(x - ox);
        // var my = abs(y - oy);
        var s = this.s/2;
        x += s; y += s;
        ox += s; oy += s;
        x *= scale; y *= scale;
        ox *= scale; oy *= scale;
        vx *= scale * -2; vy *= scale * -2;
        ctx.beginPath();
        ctx.moveTo(ox, oy);

        ctx.quadraticCurveTo(x + vx, y + vy, x, y);

        ctx.lineWidth = s * scale * 1.8;
        if(!y) return;
        if(!x) return;
        if(!ox) return;
        if(!oy) return;
        var color = ctx.createLinearGradient(x, y, ox, oy);
        this.color = this.color2 || `hsl(${this.hue}, ${this.sat}%, ${this.bri}%)`;
        color.addColorStop(0, this.color);
        color.addColorStop(1, this.color3 || `hsla(${this.hue - 10}, ${this.sat}%, ${this.bri}%, .2)`);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.globalAlpha = 1;
        this.draw1();
    }
    sat = 100;
    bri = 75;
    color = "#f00";
    shape = shapes.get("square.4");
}
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0;
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
    xHp = 1;
    hp  = 1;
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
        if(expert) this.spd *= 1.5;
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
    xp = 7;
}
class Walker extends Mover{
    color = "#ffa";
    shape = shapes.get("square.4");
    color2 = "#aa0";
    spd = .05;
    constructor() {
        super();
        if(expert) this.spd *= 1.5;
    }
    xp = 5;
}
class Bullet extends Mover{
    constructor(parent, rad) {
        super(rad);
        this.parent = parent;
        Bullet.position(this, rad);
        this.time = 25;
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
    explode() {}
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
    constructor() {
        super();
        if(expert) {
            this.shape2 = shapes.get("square-ring");
        }
    }
    register(what) {
        if(!(this.hits & what.team) || what.team & TEAM.BULLET) return;
        var dis = Entity.distance(this, what);
        if(!this.player) {
            this.player = what;
            this.dis = dis;
        }else if(dis < this.dis) {
            this.player = what;
            this.dis = dis;
        }
    }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = main;
        if(expert && player) {
            var l = .3;
            this.r = atan(this.vy, this.vx);
            if(this.force || Entity.distance(this, player) < 10) {
                var m = 1 - Entity.distance(this, player)/(this.force? 25: 10);
                if(this.force && m < l) m = l;
                this.moveTo(player, m);
            }
        }
    }
    color = "#0f0";
    shape = shapes.get("square.4");
    color2 = "#ff0";
    shape2 = shapes.get("pause");
    hp = 1;
    xp = 3;
}
class MiniBoss extends Mover{
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD;
    coll = 0;
    s = 1.5;
    m = 1;
    hp  = 10;
    xHp = 10;
    phase = 0;
    tick() {
        var m = this.hp/this.xHp;
        switch(this.phase) {
            case 0:
                this.spd = expert? .1: .075;
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
                if(expert || this.flash < 30) {
                    this.r = Entity.radian(main, this);
                }
                if(this.flash >= (expert? 35: 40)) {
                    this.phase = 2;
                    this.spd = 0.6;
                    this.timer = 0;
                }
            break;
            case 2:
                this.timer++;
                var b = 7;
                var c = expert? 0: (10 * m);
                if(this.timer < b) {
                    if(expert) this.moveTo(main);
                    else this.move(this.r);
                    // this.move(this.r);
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
    attacked(obj) {
        super.attacked(obj);

        var a = 5;
        var o = random(PI);
        for(let i = 0; i < a; i++) {
            var blob = new Xp;
            Xp.position(blob, i * PI2/a + o, this);
            enemies.push(blob);
        }
    }
    shape = shapes.get("square.4");
    color = "#f00";
    shape2 = shapes.get("arrow-box");
    color2 = "#fff";
    xp = 15;
}
class Boss extends Brain{
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD;
    coll = 0;
    xHp = 20;
    hp = 20;
    s = 2;
    r = 0;
    m = 5;
    xp = 30;
    ro = 0;
    goal = new Point;
    constructor() {
        super();
        if(expert) this.spd *= 1.5;
    }
    attacked(obj) {
        super.attacked(obj);
        
        var a = 7;
        var o = random(PI);
        for(let i = 0; i < a; i++) {
            var blob = new Xp;
            Xp.position(blob, i * PI2/a + o, this);
            enemies.push(blob);
        }
    }
    smartMove() {
        this.rad += (srand() - .5)/4;
        this.brainPoints.push([this.rad, this.wander]);
        var lx = this.x + this.s;
        var ly = this.y + this.s;

        var d = 10;
        var p = 5;

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
        this.brainMove();
    }
    toGoal(mult) {
        var {goal} = this;
        if(Entity.distance(this, goal) > 1) {
            this.moveTo(goal, mult);
        }else return 1;
    }
    register(enemy) {
        if(!(enemy instanceof Player || enemy instanceof Bullet)) return;
        var dis = Entity.distance(this, enemy);
        var d = 10;
        if(dis < d) {
            var n = (dis - d)/-d;
            var rad = Entity.radian(this, enemy);
            n **= .5;
            // if(expert) this.brainPoints.push([rad, n * 2]); 
            // else this.brainPoints.push([rad + PI, -n]);
            this.brainPoints.push([rad + PI, -n]);
        }
    }
    tick() {
        var {goal} = this;
        switch(this.phase) {
            case 0:
                goal.x = game.w - this.s/2;
                goal.y = this.s/2;
                this.m = 20;
                this.color2 = "#f00";
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
                this.m = 20;
                this.color2 = "#f00";
                goal.x = game.w - this.s/2;
                goal.y = game.h - this.s/2;
                if(this.timer++ % 10 == 0) {
                    var blob = new Mover();
                    Bullet.position(blob, PI, this);
                    blob.color = this.color;
                    enemies.push(blob);
                }
                if(this.toGoal(expert? .4: 1)) {
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
                this.smartMove();
                this.m = 5;
                this.color2 = "#f0f";
                if(this.timer++ > (expert? 100: 200)) {
                    this.phase = 3;
                    this.timer = 0;
                }
            break;
            case 3:
                var v = expert? 225: 100;
                this.smartMove();
                this.m = 5;
                this.color2 = "#f0f";
                if(++this.timer % v == 0) {
                    var blob = new Mover();
                    var rad = Entity.radian(main, this);
                    Bullet.position(blob, rad + PI/8, this);
                    blob.color = this.color;
                    enemies.push(blob);
                    var blob = new Mover();
                    Bullet.position(blob, rad - PI/8, this);
                    blob.color = this.color;
                    enemies.push(blob);
                }
                if(expert) {
                    var a = this.timer % (v * 2);
                    if(a > (v * 2) - 50) {
                        // this.moveTo(main, .5);
                        var rad = Entity.radian(main, this);
                        this.rad = rad;
                        if(a % 10 == 0) {
                            var blob = new Chill();
                            Bullet.position(blob, rad + PI/8, this);
                            blob.color = this.color;
                            blob.color2 = this.color2;
                            blob.force = true;
                            blob.spd *= 1.2;
                            enemies.push(blob);
                        }
                    }
                }
                if(this.timer >= v * 5) {
                    this.phase = 4;
                }
            break;
            case 4:
                this.m = 20;
                this.color2 = "#f00";
                goal.x = this.s/2;
                goal.y = this.s/2;
                if(this.toGoal()) {
                    this.phase = 5;
                    this.timer = 0;
                }
            break;
            case 5:
                this.m = 20;
                this.color2 = "#f00";
                goal.x = this.s/2;
                goal.y = game.h - this.s/2;
                if(this.timer++ % 10 == 0) {
                    var blob = new Mover();
                    Bullet.position(blob, 0, this);
                    blob.color = this.color;
                    enemies.push(blob);
                }
                if(this.toGoal(expert? .4: 1)) {
                    this.phase = 6;
                    this.timer = 0;
                }
            break;
            case 6:
                var v = expert? 225: 150;
                this.smartMove();
                this.m = 5;
                this.color2 = "#f0f";
                if(++this.timer % v == 0) {
                    var blob = new Mover();
                    var rad = Entity.radian(main, this);
                    Bullet.position(blob, rad + PI/8, this);
                    blob.color = this.color;
                    enemies.push(blob);
                    var blob = new Mover();
                    Bullet.position(blob, rad - PI/8, this);
                    blob.color = this.color;
                    enemies.push(blob);
                }
                if(expert) {
                    var a = this.timer % (v * 2);
                    if(a > (v * 2) - 50) {
                        // this.moveTo(main, .5);
                        var rad = Entity.radian(main, this);
                        this.rad = rad;
                        if(a % 10 == 0) {
                            var blob = new Chill();
                            Bullet.position(blob, rad + PI/8, this);
                            blob.color = this.color;
                            blob.color2 = this.color2;
                            blob.force = true;
                            blob.spd *= 1.2;
                            enemies.push(blob);
                        }
                    }
                }
                if(this.timer >= v * 5) {
                    this.phase = 0;
                }
            break;
        }
    }
    // burstShot(o=0, u) {
    //     if(isNaN(u) || u <= 0) u = PI/2;
    //     for(let i = 0; i < PI2; i += u) {
    //         var blob = new Bullet(this, i + o);
    //         blob.coll = 0;
    //         blob.time = 10;
    //         enemies.push(blob);
    //     }
    // }
    // burstShot2(o=0, u) {
    //     if(isNaN(u) || u <= 0) u = PI;
    //     for(let i = 0; i < PI2; i += u) {
    //         var blob = new Mover();
    //         Bullet.position(blob, i + o, this);
    //         enemies.push(blob);
    //     }
    // }
    phase = 0;
    color = "#ff0";
    color2 = "#f0f";
    shape2 = shapes.get("square.4");
    shape = shapes.get("bullet");
    static name = "Summoner";
}
class Wander extends Walker{
    ro = PI/2;
    tick() {
        this.r += (srand() - .5) * PI/2;
        super.tick();
    }
    shape = shapes.get("bullet");
    color = "#75a";
    color2 = "#daf";
}
class SpawnDust extends Xp{
    constructor(parent) {
        super();
        this.parent = parent;
    }
    tick() {
        var {parent: main} = this;
        this.friction = 0.99;
        this.spd = 0.05;
        this.moveTo2(main);
        this.dead = main.dead;
        if(Entity.distance(main, this) < .1) {
            this.dead = DEAD;
            // ++main.xp;
            // ++score;
        }
    }
    sat = 0;
    static position(what, rad, dis, parent) {
        if(!parent) parent = what.parent;
        // var s = what.s * .5;
        var ps = what.s;
        what.r = rad;
        var c = cos(rad), s = sin(rad);

        // var h = Math.min(abs(1 / c), abs(1 / s));

        // c *= h; s *= h;

        what.x = parent.x + ps/2 - what.s/2 + c * dis;
        what.y = parent.y + ps/2 - what.s/2 + s * dis;
    }
    draw1() {}
}
class Spawner extends Point{
    constructor(boss) {
        super(boss.x + boss.s/2, boss.y - boss.s/2);
        this.team = boss.team;
        this.boss = boss;
    }
    s = 0;
    coll = 0;
    hits = 0;
    register() {}
    attacked() {}
    hit() {}
    explode() {}
    inv = {has() {return true}}
    time = 0;
    dead = 0;
    update() {
        this.time += 1;
        if(this.time == 100) {
            enemies.push(this.boss);
            bosses.add(this.boss);
            this.dead = DEAD;
        }
        // if(this.time >= 150) {
        //     this.dead = DEAD;
        // }
        if(this.time > 35 && this.time < 75) {
            var blob = new SpawnDust(this);
            var rad = random(PI2);
            var dis = random(7, 5);
            SpawnDust.position(blob, rad, dis, this);
            blob.color2 = this.boss.color;
            blob.color3 = this.boss.color2;
            enemies.push(blob);
        }
    }
    draw() {
        var {x, y} = this;
        x *= scale;
        y *= scale;
        ctx.beginPath();
        if(this.time < 30) {
            ctx.arc(x, y, scale * (18/5 + (3 - this.time/10) * 10), 0, PI2);
        }else{
            var a = abs(this.time % 10 - 5) * 2;
            ctx.arc(x, y, scale * (10 + a)/5, 0, PI2);


            var s = 0.01;
            var blob = this.boss;
            var a = (this.time - 30)/70;
            s = blob.s * a + s * (1 - a);
            blob.drawWith({x: this.x - s/2, y: this.y - s/2, s, r: 0, alpha: a});
        }
        // if(this.time > 75) {
            // var s = 0.01;
            // var blob = this.boss;
            // var a = (this.time - 75)/25;
            // s = blob.s * a + s * (1 - a);
            // blob.drawWith({x: this.x - s/2, y: this.y - s/2, s, r: 0, alpha: a});
        // }
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.time > 75? 1 - (this.time - 75)/25: 1})`;
        ctx.stroke();
    }
}
class Turret extends Chill{
    constructor() {
        super();
        this.r = random(PI2);
    }
    register(what) {
        if(!(this.hits & what.team) || what.team & TEAM.BULLET) return;
        var dis = Entity.distance(this, what);
        if(!this.player) {
            this.player = what;
            this.dis = dis;
        }else if(dis < this.dis) {
            this.player = what;
            this.dis = dis;
        }
    }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = main;
        if(this.lastShot) --this.lastShot;
        if(Entity.distance(this, player) < (expert? 15: 10)) {
            var rad = Entity.radian(player, this);
            var dis = rDis(this.r - PI/2, rad);
            // this.r = rad + PI/2;
            if(expert) {
                var m = PI/32;
                if(abs(dis) < m) {
                    this.r = rad + PI/2;
                    this.shoot(this.r - PI/2);
                }else this.r += sign(dis) * m;
            }else{
                var m = PI/32;
                if(abs(dis) < m) {
                    this.r = rad + PI/2;
                }else this.r += sign(dis) * m;
                this.shoot(this.r - PI/2);
            }
        }
    }
    xp = 7;
    lastShot = 0;
    shoot(rad) {
        if(!this.lastShot) {
            var blob = new Bullet(this, rad);
            blob.team = TEAM.BULLET;
            blob.coll = TEAM.BULLET;
            var m = expert? 2: 3;
            blob.spd  /= m;
            blob.time *= m;
            enemies.push(blob);
            this.lastShot = 40;
        }
    }
    color = "#555";
    shape2 = shapes.get("bullet");
}
class Bomb extends Chill{
    color = "#333";
    shape2 = shapes.get("square.5");
    color2 = "#d55";
    xp = 2;
    tick() {
        if(this.timer) {
            ++this.timer;
            var m = 3;
            var a = 60 + 40 * abs((this.timer + m) % (m * 2) - m)/m;
            // var a = 60 + 40 * abs(m - m)/m;
            this.color2 = `hsl(0, 67%, ${a}%)`;
            if(this.timer == 4 * m) {
                this.dead = DEAD;
            }
        }
        if(Entity.distance(this, main) < 5 && !this.timer) {
            this.timer = 1;
            if(expert) {
                this.dead = DEAD;
                // this.boom = true;
            }
        }
    }
    explode() {
        super.explode();

        // if(expert && !this.boom) return;

        var u = PI2/8;
        for(let i = 0; i < PI2; i += u) {
            var blob = new Bullet(this, i);
            blob.hits = TEAM.GOOD + TEAM.BAD;
            blob.coll = 0;
            blob.time = 30;
            blob.spd /= expert? 2: 4;
            // blob.s *= 2;
            enemies.push(blob);
        }
    }
}
class Player extends Entity{
    constructor() {
        super();
        this.x = (game.w - this.s)/2;
        this.y = (game.h - this.s)/2;
    }
    onXp() {}
    nextLevel() {}
    explode() {
        var a = this.xp/10;
        var o = random(PI);
        for(let i = 0; i < a; i++) {
            var blob = new Xp;
            blob.spd = random()/15;
            Xp.position(blob, i * PI2/a + o, this);
            enemies.push(blob);
        }
    }
    xp = 0;
    r = 0;
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
            var mrad = rad;
        }
        mx = 0; my = 0;
        if(keys.has("ArrowUp"   )) --my;
        if(keys.has("ArrowDown" )) ++my;
        if(keys.has("ArrowLeft" )) --mx;
        if(keys.has("ArrowRight")) ++mx;
        if(mx || my) {
            var rad = atan(my, mx);
            // this.r = rad;
            this.skill(rad);
            var srad = rad;
        }
        if(keys.has("ShiftRight")) {
            this.ability(keys.get("ShiftRight"), mrad, srad);
            keys.set("ShiftRight", 2);
        }
        if(this.lastShot) --this.lastShot;
        if(this.lastSkill) --this.lastSkill;
        this.r = atan(this.vy, this.vx);
        this.tickSkill();
    }
    tickSkill() {}
    skill(rad) {}
    ability(key, mrad, srad) {}
    hit(what) {
        if(this.hits & what.team) {
            what.attacked({enemy: this, atk: this.atk});
        }
    }
    atk = 1;
    color = "#fff";
    shape = shapes.get("square.4");
    team = TEAM.GOOD;
    hits = TEAM.BAD;
    coll = TEAM.BAD;
}
class TheGunner extends Player{
    get alpha() {
        if(this.lastSkill > 40) return .4;
        return super.alpha;
    }
    tickSkill() {
        if(this.lastSkill > 40) {
            this.r = this.lastSkill * .5;
            this.team = 0;
            this.hits = 0;
            this.coll = 0;
        }else{
            this.team = TEAM.GOOD;
            this.hits = TEAM.BAD;
            this.coll = TEAM.BAD;
        }
    }
    skill(rad) {
        if(!this.lastShot) {
            this.team = TEAM.GOOD;
            this.hits = TEAM.BAD;
            this.coll = TEAM.BAD;
            enemies.push(new Bullet(this, rad));
            this.lastShot = 15;
        }
    }
    ability(key, mrad, srad) {
        if(!this.lastSkill) {
            var {spd} = this;
            this.spd *= 15;
            if(!isNaN(mrad)) {
                this.move(mrad);
            }
            this.spd = spd;
            this.lastSkill = 50;
        }
    }
    color = "#55f";
    shape = shapes.get("square.4");
    color2 = "#aaf";
    shape2 = shapes.get("square.4");
}
class TheDasher extends Player{
    hit(what) {
        super.hit(what);
        if(this.lastSkill) {
            this.hitd += 5;
        }
    }
    hitd = 0;
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
    tickSkill() {
        if(this.lastSkill > 15) {
            this.god = true;
            this.color = "#f00";
            this.color2 = "#000";
            this.m = 10;
        }else if(this.lastSkill) {
            this.god = false;
            this.color2 = "#fff";
            this.color = `hsl(0, ${(this.lastSkill % 10) * 10}%, 50%)`;
            this.m = 1;
        }else{
            this.color = "#f00";
            this.god = false;
            this.color2 = "#fff";
            this.m = 1;
        }
        if(this.lastSkill <= this.hitd) {
            this.lastSkill = 0;
        }
    }
    skill(rad) {
        if(!this.lastSkill) {
            var {spd} = this;
            this.spd *= 25;
            this.move(rad);
            this.hitd = 0;
            this.spd = spd;
            this.lastSkill = 30;
        }
    }
    ability(key, mrad, srad) {
        if(!this.lastSkill) {
            var {spd} = this;
            this.spd *= 25;
            if(!isNaN(mrad)) {
                this.move(mrad);
                this.hitd = 0;
            }else{
                this.spd = spd;
                return;
            }
            this.spd = spd;
            this.lastSkill = 20;
        }
    }
    shape2 = shapes.get("arrow-box");
    color = "#f00";
    color2 = "#fff";
}
class TheSummoner extends Player{
    constructor() {
        super();
    }
    onXp() {
        var pets = floor(this.p/5);
        if(pets < (10 - this.alive.length)) {
            this.p += 1;
        }
    }
    getPet() {
        this.pet = this.summon();
    }
    summon() {
        var summon = new (this.summons[this.selected]);
        Bullet.position(summon, random(PI2), this);
        summon.s = .75;
        summon.color = this.color;
        summon.color2 = this.color2;
        summon.team = TEAM.GOOD;
        summon.hits = TEAM.BAD;
        summon.coll = TEAM.BAD + TEAM.GOOD;
        summon.hp = .5;
        return summon;
    }
    tick() {
        super.tick();
        var pets = floor(this.p/5);
        if(pets < 0) pets = 0;
        if(pets > 10) pets = 10;
        if(this.pets.length < pets) {
            var pet = this.summon();
            pet.s = .5;
            this.pets.push(pet);
        }else this.pets.length = pets;
        this.r = 0;
        this.alive = this.alive.filter(blob => !blob.dead);
        if(pets < (10 - this.alive.length)) {
            this.p += this.rec;
        }
    }
    rec = 0.02;
    alive = [];
    update() {
        super.update();

        for(let i = 0; i < this.pets.length; i++) {
            let pet = this.pets[i];
            if(Entity.distance(this, pet) > 2) {
                pet.moveTo(this);
                pet.r = atan(pet.vy, pet.vx);
            }
            pet.update();
            for(let j = i + 1; j < this.pets.length; j++) {
                let them = this.pets[j];
                if(Entity.isTouching(pet, them)) {
                    Entity.collide(pet, them);
                }
            }
        }
        for(let blob of this.alive) {
            if(blob.inv.has(this)) {
                blob.tick();
            }
        }
    }
    draw() {
        super.draw();
        for(let pet of this.pets) {
            pet.draw();
        }
    }
    ability(key) {
        if(key == 1) {
            this.selected = (this.selected + 1) % this.summons.length;
            var arr = [], len = this.pets.length;
            for(let i = 0; i < len; i++) {
                var pet = this.summon();
                var old = this.pets[i];
                pet.s = .5;
                pet.x = old.x;
                pet.y = old.y;
                pet.vx = old.vx;
                pet.vy = old.vy;
                arr.push(pet);
            }
            this.pets = arr;
        }
    }
    explode() {
        for(let pet of this.pets) {
            pet.hp = 1;
            enemies.push(pet);
        }
    }
    skill(rad) {
        if(!this.lastShot && this.pets.length) {
            var blob = this.summon();
            blob.xp = 0;
            Bullet.position(blob, rad, this);
            enemies.push(blob);
            this.alive.push(blob);
            blob.inv.set(this, 10);
            blob.hp = 1;
            this.p -= 5;
            this.lastShot = 15;
        }
    }
    nextLevel() {
        for(let blob of this.alive) {
            blob.dead = DEAD;
        }
        this.p = 20;
    }
    p = 0;
    color = "#d82";
    color2 = "#555";
    shape = shapes.get("bullet");
    shape2 = shapes.get("square.4");
    selected = 0;
    summons = [Chill, Walker, Mover];
    pets = [];
}
class Tracker extends Chill{
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) return;
        if(player) {
            var l = .3;
            this.r = atan(this.vy, this.vx);
            if(Entity.distance(this, player) < 25) {
                var m = 1 - Entity.distance(this, player)/25;
                if(this.force && m < l) m = l;
                this.moveTo2(player, m);
            }
        }
    }
    moveTo2(enemy, mult) {
        var obj = {...this};
        obj.x += obj.vx * 3;
        obj.y += obj.vy * 3;
        var obj2 = {...enemy};
        obj2.x += obj2.vx * 4;
        obj2.y += obj2.vy * 4;
        if(!obj2.x) obj2 = enemy;
        this.move(Entity.radian(obj2, obj), mult);
    }
    friction = 0.99;
    color = "#0f0";
    shape = shapes.get("square.4");
    color2 = "#ff0";
    shape2 = shapes.get("square-ring");
    hp = 1;
    xp = 0;
}
class TheMagician extends TheSummoner{
    summons = [Tracker];
    color = "#5f5";
    color2 = "#cfc";
    rec = 0.15;
    shape2 = shapes.get("tophat");
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale * .8;

        x += s * .15;
        y += s * .2;

        r = atan(scale, this.vx * scale) - PI/2;
        // if(!ro) ro = 0;

        // r += ro;

        ctx.save();
        ctx.zoom(x, y, s, s, r);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    summon() {
        var blob = super.summon();
        blob.team += TEAM.BULLET;
        blob.coll = this.coll;
        blob.hp = .1;
        return blob;
    }
    onXp() {}
    nextLevel() {
        super.nextLevel();
        this.p = 0;
    }
    register(what) {
        for(let pet of this.pets) {
            pet.register(what);
        }
    }
    skill(rad) {
        if(!this.lastShot && this.pets.length) {
            var blob = this.summon();
            blob.xp = 0; blob.s = .5;
            Bullet.position(blob, rad, this);
            enemies.push(blob);
            this.alive.push(blob);
            blob.inv.set(this, 10);
            var a = (blob.spd * 15);
            blob.vx = cos(rad) * a;
            blob.vy = sin(rad) * a;
            blob.hp = 1;
            this.p -= 5;
            this.lastShot = 15;
        }
    }
    ability() {
        for(let pet of this.pets) {
            this.alive.push(pet);
            enemies.push(pet);
            this.p -= 5;
            pet.hp = 1;
        }
        this.pets = [];
    }
    p = 0;
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
var saveData = JSON.parse(localStorage.getItem("data")) || {};
saveData.save = function() {
    localStorage.setItem("data", JSON.stringify(saveData));
};
onload = () => {
    try{
    document.body.appendChild(canvas);
    onresize();
    mainMenu.load();
    }catch(err) {console.error(err); console.log(enemies)}
    update();
};
{
    let menu = 0;
    let players = [];
    let plasel = 0;
    let selLvl = 0;
    let lvlMax = 0;
    let menus = 2;
    function mainMenu() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, game.width, game.height);
        var h = game.height/10;
        var i = 0;
        var s = h * 1.2;
        var x = (game.width - s)/2;
        var y = game.height/100;
        ctx.fillStyle = "#ff5";
        if(menu == 0) {
            ctx.fillRect(x, y, s, s);
        }
        for(let blob of players) {
            var s = h/scale;
            var x = (game.w - s)/2 + s * (i - plasel) * 1.5;
            var y = game.h/50;
            blob.drawWith({x, y, s});
            i += 1;
        }
        var text = levelName(selLvl + 1);
        ctx.font = `${h}px Arial`;
        var {width} = ctx.measureText(text);
        var x = (game.width - width)/2;
        y += s; y *= scale;
        ctx.fillStyle = expert? "#f0d": "#fff";
        ctx.fillText(text, x, y + h);
        s *= scale;
        y += s/5;
        x -= s/5;
        if(menu == 1) {
            if(selLvl > 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + s);
                ctx.lineTo(x-s, y+s/2);
                ctx.closePath();
                ctx.fill();
            }
            x += width + s/2 - s/10;
            if(selLvl < lvlMax) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + s);
                ctx.lineTo(x+s, y+s/2);
                ctx.closePath();
                ctx.fill();
            }
        }
        ctx.beginPath();
        if(keys.get("Backspace") == 1) {
            selLvl = 0;
            expert = !expert;
            if(expert) lvlMax = saveData.levelE;
            else lvlMax = saveData.level;
            keys.set("Backspace", 2);
        }
        if(keys.get("ArrowRight") == 1) {
            keys.set("ArrowRight", 2);
            if(menu == 0) ++plasel;
            if(menu == 1) ++selLvl;
        }
        if(keys.get("ArrowLeft") == 1) {
            keys.set("ArrowLeft", 2);
            if(menu == 0) --plasel;
            if(menu == 1) --selLvl;
        }
        if(keys.get("ArrowUp") == 1) {
            keys.set("ArrowUp", 2);
            --menu;
        }
        if(keys.get("ArrowDown") == 1) {
            keys.set("ArrowDown", 2);
            ++menu;
        }
        plasel += players.length;
        plasel %= players.length;
        if(!lvlMax) {
            lvlMax = 0;
        }
        selLvl += lvlMax + 1;
        selLvl %= lvlMax + 1;
        menu += menus;
        menu %= menus;
        if(keys.get("Space") == 1) {
            keys.set("Space", 2);
            mainMenu.active = false;
            level = selLvl + 1;
            restart();
        }
    }
    mainMenu.spawn = () => {
        mainMenu.load();
        mainMenu.active = false;
        main = players[plasel];
    }
    mainMenu.load = () => {
        mainMenu.active = true;
        if(expert) lvlMax = saveData.levelE;
        else lvlMax = saveData.level;
        players = [new TheGunner];
        if(saveData.level >= 5) {
            players.push(new TheDasher);
        }
        if(saveData.level >= 10) {
            players.push(new TheSummoner);
        }
        if(saveData.levelE >= 10) {
            players.push(new TheMagician);
        }
    };
}

var level, expert, score;
function restart() {
    score = 0;
    mainMenu.spawn();
    enemies = [main];
    if(level) level -= 1;
    else level = 0;
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
var boss = {
    5: MiniBoss,
    10: Boss
};
const ms = 1000/40;
var frame = () => new Promise(resolve => {
    setTimeout(() => {
        if(gone) {
            whenFocus = resolve;
        }else{
            resolve();
        }
    }, ms);
});
function levelName(level) {
    var txt = `Level ${level}`;
    if(level in boss) {
        var n = ceil(level/10);
        if(level % 10 == 0) txt = `Boss ${n}: ${boss[level].name}`;
        else txt = `Miniboss ${n}: ${boss[level].name}`;
    }
    return txt;
}
async function update() {
    while(true) {
        await frame();
        try{
        if(mainMenu.active) {
            mainMenu();
            continue;
        }
        ctx.fillStyle = "#000";
        // ctx.shadowBlur = 0;
        ctx.fillRect(0, 0, game.width, game.height);
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
            blob.drawWith({x: x/scale - .5, y: y/scale - (s - 1)/2, s, r: 0, alpha: 1});
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
                    if(blob.inv.has(them) || them.inv.has(blob)) coll = false;
                    if(coll) Entity.collide(blob, them);
                    if(hits) {
                        blob.hit(them);
                        them.hit(blob);
                    }
                }
            }
        }
        var txt = levelName(level);
        ctx.font = `${scale}px Arial`;
        ctx.fillStyle = expert? "#f0d": "#fff";
        ctx.fillText(txt, 0, scale - 5);
        var txt = `Score: ${score}`;
        ctx.fillText(txt, game.width - ctx.measureText(txt).width, scale - 5);

        let a = [];
        enemies = enemies.filter(blob => {
            if(blob.dead < DEAD) return true;
            else a.push(blob);
        });
        a.forEach(blob => blob.explode());

        if(keys.get("Space") == 1) {
            restart();
            keys.set("Space", 2);
        }

        if(keys.get("Backspace") == 1) {
            // level = 0;
            // expert = !expert;
            // restart();
            mainMenu.load();
            keys.set("Backspace", 2);
        }

        var arr = enemies.filter(blob => {
            return (blob.team & TEAM.BAD) || (blob instanceof Xp);
        });

        if(keys.get("Enter") == 1) {
            console.log(arr);
            keys.set("Enter", 2);
        }
        
        if(!main.dead && arr.length == 0) {
            main.nextLevel();
            nextLevel();
        }
        }catch(err) {
            console.error(err);
        }
    }
}
function nextLevel() {
    if(expert) {
        if(level > saveData.levelE || !saveData.levelE) {
            saveData.levelE = level;
        }
    }
    if(level > saveData.level || !saveData.level) {
        saveData.level = level;
    }
    saveData.save();
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
            var spawn = new Spawner(blob);
            enemies.push(spawn);
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
            var spawn = new Spawner(blob);
            enemies.push(spawn);
        break;
        case 11:
            for(let i = 0; i < 5; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
                var blob = new Turret();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 12:
            for(let i = 0; i < 10; i++) {
                var blob = new Turret();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 13:
            for(let i = 0; i < 10; i++) {
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
                var blob = new Bomb();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        default:
            --level;
        break;
    }
}
