var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");

//ATKD
//https://jummbus.bitbucket.io/#j4N07Unnamedn310s1k0l00e03t2mm0afg0fj07i0r1O_U00000000o3210T0v0pL0OaD0Ou00q0d100f8y0z8C0w1c0h6X1T5v0pL0OaD0Ou21q1d500f6y1z8C0c0h8H_SJ5SJFAAAkAAAT5v0pL0OaD0Ou51q1d500f7y1z6C1c0h0H-IHyiih9999998T4v0pL0OaD0Ouf0q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00b4Acigw00000h4g000000014h000000004h400000000p22sFB-8p6CCbAAOfi5jcLiF9yW2p7F2XaBIdAbgGQZCnZAbJ4O_kG9yWCO5VBiVxIxtBiS6O5FQquPb-Q5SDdaDddByipjFQKFZgVzPfCtbCvcdzPizPkFWAnYybEeNGRuEQuEsl5UBiAuoZjUJhSNjN4L00000

const env = {
    SOLOLEARN: Symbol()
};
const Enviroment = undefined;

//https://www.beepbox.co/2_3/#6n31s6kbl00e0Btbm0a7g0Bjbi0r1o3210T0w0f2d1c0h0v2T0w3f1d1c0h0v0T0w1f1d1c0h0v0T2w1d1v2b0000d3g0018i4x8310c44x80000i4N8klBsi4N8oCFyqCN8j4xMh4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4gp23WFzO6wd0q0Ogq0Q1E3wMQ1E30xF3g6wdoqgQ1E3g6wdoq0Q1E3G3g6wdoqgQ1E3m40FBO2w2oYic4CLQhXga0r4x8Xh7I0E1Ill9EZ9DTjnUA50e8FHUHyX86CNZFF-S-q3g6Ed0qgQ1F3g7i6wd8q0QxE3q6wfGgl0OWqKHWSCGC70a26of91ggP1YA513a7B0G1i2E6kfPoa0k0VPCu9FGYhPCjAVejPDdcPWpuHL00Fy0k3J8QQ3F8w0

//https://www.beepbox.co/2_3/#6n31s6kbl02e07t9m0a7g0fj7i0r1o3210T0w0f1d1c0h0v0T0w3f1d1c3h6v0T0w1f1d1c0h0v0T2w1d1v3b4h4h4h4h4h404xci514h4h4h4h4h4h4h4h4h4h4h4h4p21QFxM2A4a2M5FaM4623120wOg2Ce2C78IC27iCvle0zSgsza5ARzFSWsAuO3ApoICItek2I5wagp97B0A0i8945N2M5Mawl0I1ui00Fyhg6y18QxE3ih00

//Dasher - https://jummbus.bitbucket.io/#j4N07Unnamedn311s1k0l02e0bt38m0a7g0dj07i0r1O_U0000000000o22100T5v0pL0OaD0Ou21q1d500f6y1z8C0c0h8H_SJ5SJFAAAkAAAT5v0pL0OaD0Ou05q1d100f8y1z6C1c0h0H-JJAArrqiih999T5v0kL0OaD0Ou51q1d500f7y1z6C1c0h0H-IHyiih9999998T4v0pL0OaD0Ouf0q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00T8v0pL0OaD0Oud9q1d100f6y1z2C0b028P8zcycN8h4w004h80000h8x4y8y8y8y8y8y8y4g008x4p24bFyUzj8Y2CbEAt60OhBVozF4tcn9CnjasJG6EQyeAhQJNIZDj8X17iVcmwbAW97i8Wmi5E2ViAhR2eE2CbAxq5q25EkGoJ2B0yQak4bgelR1q5mGbgFl1q5aGbgFlhq0I1hFQWd6FlEQqd42CnUhczOmhjcL87jQO_hj8ZbarcWs2Chyp7g8W96Ca92Q1sAhQ2eBkEM792Q1q0J0mwbg5Eka52Abg5E2Q1q0J0mxgEk001500n_E57EUkG0E6nEUpw0E7DEUuw00


//Stage 1 - https://www.beepbox.co/2_3/#6n32s6kbl00e0nt7m0afg0nj7i0r1o32000T0w4f2d1c0h0v0T0w1f1d1c0h0v0T0w5f1d1c0h0v1T2w0d1v2T2w0d1v3b00000000wz92cA9m4xci4QlD4xci4QlD000h4h4h000h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4hp27FF70BQNp311E2CrhzE3BrePN0LG8qMRxSP7g7bStDB5ZAd8q0XhzE3BrePjfELN8qgQ1Sz7g7aUDpFyg6Ed0kPaVEdgq0YkCdgqwQ1jeCGLb3k7RoqwQ1WHGwR1E3Rnd1G3g7GqGQNY3Uw9zWMdEq0ZqoW0VnzePj4wc66wapy9zE3B97jIV9vIxwwRxSP7g7bStDabZAdoqwXpzE3BXeOCvhvN8qgQ1SIEdgq0V5osLytLabZAdoq0Xmk6Ed0syIenIXumnX8qgQ1SQNq3k6wapJ9zk6Ed0kPFGHOMR1Zm6Ed0uGWEdgq0ZlPgqwQ1WCGJcv0-8aC030QQQQQQQQQQQQQQRMdddddddddddddddk1jjjjjjjjjjjjjj1TQQQQQQQQQQQQQQwaoD66wMM1xJceEzghE8Q4qyd16Ezgh0Fws2w50a0k0E1g2w50a0k0E1g2w50a0g0a0k0E1g2w50a0mwE1g2w50a0k0E00

//Level1 - https://jummbus.bitbucket.io/#j4N07Unnamedn310s1k0l04e0ft2mm0a7g0jj07i0r1O_U00000000o3330T0v0pL0OaD0Ou00q1d100f7y1z8C1w5c0h0X0T0v0fL0OaD0Ou00q0d100f8y0z1C0wbc0h0X1T0v0uL0OaD0Ou00q1d100fay0z1C0wbc0h0X0T2v05L0OaD0Ou15q0d100f8y0z1C2w0Gc0h0b01ci4Uq7hkk0018i4x8j4Rhk4Nc001klpmkPcOgB00000000000000p27PFyy0I6bh5EyFAo3Ot6yCkyej5FyQiDppf8UBBek5EyQhq8KjOB61Sek5G2QiDppj8VjasEbh5EyQhsDBadjoVgmEbhatBBczBc1VgmGbh5EyFBUEnV8mAbhEkhsFlV0mAbj5EyUynV8mg5FkGoKiFswbi5EyQhtJBqdryek5G2QiDpVD8VjasEbh5EyQhsBBqdjoVgmEbhatDBszAs2VcmEbh5EyVnbr4zOoJcmykXb9V7dpiQPnMskFIIRY6BhBDjWlpmCq-z6Jmmq-FmSOJrAoSFRGQPFZmESHreDSajEKSPnQpykJRiKI-rQDqFHCJso4lck1QAOch5j54Ef0zhOtj8yViFB2_0qcmFjO8KkFpcQsDiO8KjGVkLO5mbl5AiCyrJ4mGbgcJcL48KmFX4n9kIEqejHp4nakIJkF4snaksybBaKkd79RcybBaCRGhsFhS8KkGpkLOJ4mFlO8KlGVgLOJ4FAoDhEQkOY8g6jFQqekFw0

//Summomner - https://jummbus.bitbucket.io/#j4N07Unnamedn310s1k0l00e0ft2Qm0a7g0fj07i0r1O_U00000000o2320T0v0pL0OaD0Ou00q1d100f6y1z6C0w5c0h0X1T0v0hL0OaD0Ou00q0d100f6y1z8C0w2c0h8X0T0v0pL0OaD0Ou00q0d100f8y0z1C2w5c0Gc0h0X1T2v0fL0OaD0Ou02q0d100f8y0z1C2w0Gc0h0b4N8j4xci4N8i4x8i4x8i4w00000j4xci000h4h4h4h4p22JFB-AChV2D2kAODj5NixgwGJb41uQSJiJiSoKlEkaOpExcnNfqlGRbyoKmEkaReHBNglsLi_bM2nMhvEBYynwkO_3Aqp7wieCCkWgK9M5eziAsIbSKRERGeM5OB2xkjd482QO_j8QOfk8WGpjF2VmJhHkqmk51j8M0pt0OWFBQ3b00

//Level 1 - https://jummbus.bitbucket.io/#j4N07Unnamedn310s1k0l00e03t2Qm0afg0fj07i0r1Oaa48kk1uU00000000o3220T0v0pL0OaD0Ou00q0d100f8y0z8C0w1c0h6X1T5v0pL0OaD0Ou21q1d500f6y1z8C0c0h8H_SJ5SJFAAAkAAAT0v0pL0OaD0Ou00q1d100f7y1z8C1wbc0h0X0T4v0pL0OaD0Ouf0q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00b4Acigw00000h4g000000014h000000004h400000000p23fFB-8p6CCbAAOfi5jcLiF9yW2p7F2XaBIdAbgGQZCnZAbJ4O_kG9yWCO5VBiVxIxtBiS6O5FQquPb-Q5SDdaDddByipjFQKFZgVzPfCtbCvcdzPizPkFWAnYybEeNGRuEQuEsl5UBiAuoZjUJhSNjN4L00JIU_4cC2orjfz_8SPeSPzZuZXQrpYvWZXPjIIU_nJdNDN_AXTjMA00

{
    let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
    let overlay = document.createElement("canvas"),
        shw = overlay.getContext("2d");
    var background = {
        canvas, ctx,
        overlay, shw,
        recolor() {
            // var colors = new Set;
            // for(let blob of enemies) {
            //     if(blob instanceof Spawner) {
            //         let obj = blob.boss;
            //         if(obj.color) colors.add(obj.color);
            //         if(obj.color2) colors.add(obj.color2);
            //         if(obj.color3) colors.add(obj.color3);
            //     }else{
            //         if(blob.color) colors.add(blob.color);
            //         if(blob.color2) colors.add(blob.color2);
            //         if(blob.color3) colors.add(blob.color3);
            //     }
            // }
            // this.colors = [...colors];
        },
        shadow() {
            var s = scale * 1.5;
            var width = floor(innerWidth/s);
            var height = floor(innerHeight/s);
            var xo = (innerWidth - width * s) * .5;
            var yo = (innerHeight - height * s) * .5;

            xo = floor(xo);
            yo = floor(yo);
            // var {colors} = this;
            var wid = game.width;
            var hei = game.height;
            var ctx = shw;
            ctx.globalCompositeOperation = "copy"; //Clear canvas
            ctx.fillStyle = "#000b";
            ctx.fillRect(0, 0, wid, hei);
            // ctx.save();

            var point = new Point;
            var rs = 1/scale;
            point.s = s * rs;
            let arr = enemies.filter(blob => !(blob.team & TEAM.BULLET) && !blob.dead);
            function close() {
                for(let blob of arr) {
                    if(Entity.isTouching(point, blob)) {
                        return blob;
                    }
                }
            }
            // function colorArray(blob) {
            //     var colors = [];
            //     if(blob instanceof Spawner) blob = blob.boss;
            //     if(blob.color) colors.push(blob.color);
            //     if(blob.color2) colors.push(blob.color2);
            //     if(blob.color3) colors.push(blob.color3);
            //     return colors;
            // }

            for(let x = -1; x <= width; x++) {
                point.x = (x * s + xo) * rs;
                for(let y = -1; y <= height; y++) {
                    point.y = (y * s + yo) * rs;
                    var blob = close();
                    if(!blob) continue;
                    ctx.beginPath();
                    // ctx.fillStyle = randomOf(colorArray(blob));
                    //Lighten square
                    ctx.rect(x * s + xo, y * s + yo, s, s);
                    // ctx.globalCompositeOperation = "source-over";
                    // ctx.shadowBlur = 0;
                    // ctx.fillStyle = "#0008";
                    // ctx.fill();
                    //Glow effect
                    ctx.globalCompositeOperation = "xor";
                    ctx.fillStyle = "#fff5";
                    ctx.shadowColor = "#fff";
                    ctx.shadowBlur = 15;
                    ctx.fill();
                }
            }


            ctx.globalCompositeOperation = "source-over";
            ctx.shadowBlur = 0;
            if(Survival) {
                var time = update.timeLeft;
                if(time < 500) {
                    var a = (500 - time) * .002;
                    a **= 2;
                    a *= .3;
                    ctx.fillStyle = `rgba(255, 85, 0, ${a})`;
                    ctx.fillRect(0, 0, wid, hei);
                }
            }
            // ctx.restore();
        },
        draw() {
            var s = scale * 1.5;
            var width = floor(innerWidth/s);
            var height = floor(innerHeight/s);
            var xo = (innerWidth - width * s) * .5;
            var yo = (innerHeight - height * s) * .5;
            var {colors} = this;

            ctx.strokeStyle = expert? "#f0f": "#fff";
            ctx.lineWidth = 2;

            var point = new Point;
            var rs = 1/scale;
            point.s = s * rs;

            function dis(blob) {
                if(blob instanceof Player) {
                    if(Entity.distance(blob, point) < 5) {
                        return 0;
                    }else return 1000;
                }else return Entity.distance(point, blob);
            }

            function getClosest() {
                var [closest] = enemies.sort((a, b) => dis(a) - dis(b));
                return randomOf(colorArray(closest));
            }
            function colorArray(blob) {
                var colors = [];
                if(blob instanceof Spawner) blob = blob.boss;
                if(blob.color) colors.push(blob.color);
                if(blob.color2) colors.push(blob.color2);
                if(blob.color3) colors.push(blob.color3);
                return colors;
            }
            // function close() {
            //     for(let blob of enemies) {
            //         if(Entity.distance(point, blob) < 2) {
            //             return blob;
            //         }
            //     }
            // }

            for(let x = -1; x <= width; x++) {
                point.x = (x * s + xo) * rs;
                for(let y = -1; y <= height; y++) {
                    point.y = (y * s + yo) * rs;
                    ctx.beginPath();
                    ctx.rect(x * s + xo, y * s + yo, s, s);
                    ctx.fillStyle = getClosest();
                    ctx.fill();
                    ctx.stroke();
                }
            }
            this.shadow();
        }
    };
}
{
    class Pointer{
        /**@param {Touch} touch*/
        constructor(touch) {
            this.id = touch.identifier;
            this.sx = touch.pageX;
            this.sy = touch.pageY;
            this.x = this.sx;
            this.y = this.sy;
            this.up = false;
            this.canceled = false;
            this.used = false;
            this.start = Date.now();
        }
        update(touch) {
            this.x = touch.pageX;
            this.y = touch.pageY;
        }
        get end() {
            return this.up || this.canceled;
        }
        get mx() {
            return this.x - this.sx;
        }
        get my() {
            return this.y - this.sy;
        }
    }
    var mobile;
    var touches = new (class TouchMap extends Map {
        /**@returns {Pointer}*/
        get(id) {return super.get(id)}
        /**@returns {IterableIterator<Pointer>}*/
        get all() {return super.values()}
        /**@returns {Pointer}*/
        add(touch) {return super.set(touch.id, touch)}
        /**@returns {Pointer}*/
        find(test) {for(let touch of this.values())
            if(test(touch)) return touch;
        }
    })();
    /**@param {Touch} touch*/
    let touchstart = function(touch) {
        var pointer = new Pointer(touch);
        touches.add(pointer);
        if(pointer.id) mobile = true;
    };
    /**@param {Touch} touch*/
    let touchmove = function(touch) {
        var pointer = touches.get(touch.identifier);
        pointer.update(touch);
    };
    /**@param {Touch} touch*/
    let touchend = function(touch) {
        var pointer = touches.get(touch.identifier);
        pointer.up = true;
    };
    /**@param {Touch} touch*/
    let touchcancel = function(touch) {
        var pointer = touches.get(touch.identifier);
        pointer.canceled = true;
    };
    ontouchstart = e => [...e.changedTouches].forEach(touchstart);
    ontouchmove = e => [...e.changedTouches].forEach(touchmove);
    ontouchend = e => [...e.changedTouches].forEach(touchend);
    ontouchcancel = (e) => [...e.changedTouches].forEach(touchcancel);
    onmousedown = e => !mobile && touchstart(e);
    onmousemove = e => !mobile && touches.has(undefined) && touchmove(e);
    onmouseup = e => !mobile && touchend(e);
}
{
    var showButtons;
    var Button = class Button{
        constructor(x, y, w, h) {
            this.resize(x, y, w, h);
        }
        x = 0; y = 0;
        w = 0; h = 0;
        /**@param {Pointer} touch*/
        includes(touch) {
            return touch.x > this.x       &&
                touch.y > this.y          &&
                touch.x < this.x + this.w &&
                touch.y < this.y + this.h;
        }
        resize(x, y, w, h) {
            Object.assign(this, {x, y, w, h});
        }
        draw(color="red") {
            if(!showButtons) return;
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        }
    }
}
{
    var gamepad;
    var gamepads = [];
    addEventListener("gamepadconnected", ({gamepad: {index}}) => {
        gamepad = index;
        gamepads.push(index);
    });
    addEventListener("gamepaddisconnected", ({gamepad: {index}}) =>
        gamepads = gamepads.filter(id => id != index)
    );
}
{
    function Sound(src, volume=1) {
        var sound = new Audio();
        sound.volume = volume;

        {
            let source = document.createElement("source");
            source.src = src;
            sound.appendChild(source);

            source = document.createElement("source");
            source.src = "https://raw.githubusercontent.com/CookieStep/Bullets-6/main/" + src;
            sound.appendChild(source);
        }

        this.editVolume = (vol) => {
            sound.volume = volume * vol;
        }
        this.play = () => {
            sound.currentTime = 0;
            sound.play();
        }
    }
    var sounds = {
        editVolume(vol) {
            for(let key in this) {
                var sound = this[key];
                if(sound instanceof Sound) {
                    sound.editVolume(vol);
                }
            }
        },
        Shoot: new Sound("Shoot.wav", .2),
        Wall: new Sound("Wall.wav", .3),
        Hit: new Sound("Wall.wav"),
        Dash: new Sound("Dash.wav", .1),
        MachineGun: new Sound("MachineGun.wav", .15),
        Magic: new Sound("Magic.wav", .2),
        BigMagic: new Sound("BigMagic.wav", .2),
        Reload: new Sound("Reload.wav", .7),
        Smack: new Sound("Smack.wav"),
        Shotgun: new Sound("Shotgun.wav", .5),
        Summon: new Sound("Summon.wav", .3),
        Explode: new Sound("Explode.wav", .2),
        BotSummon: new Sound("BotSummon.wav", .7)
    }
}

var volumeLevel = 10;
var {
    cos, sin,
    atan2: atan,
    abs, sqrt,
    PI, floor,
    round, sign,
    ceil, min
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
    BOSS: a(5),
    ALLY: a(6),
    RED: a(10),
    GREEN: a(11),
    BLUE: a(12),
    PURPLE: a(13)
};
var DEAD = 10;
{//Canvas Shapes
    var Path = class Path extends Path2D{
        /**@param {(path: Path2D) => void} path*/
        constructor(path) {
            if(typeof path == "function") {
                super();
                path(this);
            }else super(path);
        }
    }

    var shapes = new Map;
    shapes.set("circle", new Path(ctx => ctx.arc(.5, .5, .5, 0, PI2)));
    shapes.set("square", new Path(ctx => ctx.rect(0, 0, 1, 1)))
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
    shapes.set("square-2", new Path(ctx => {
        var r = .2;
        var a = 1 - r;
        ctx.moveTo(r, 0);
        ctx.lineTo(1 - r, 0);
        ctx.quadraticCurveTo(a, r, 1, 0 + r);
        ctx.lineTo(1, 1 - r);
        ctx.quadraticCurveTo(a, a, 1 - r, 1);
        ctx.lineTo(r, 1);
        ctx.quadraticCurveTo(r, a, 0, 1 - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(r, r, r, 0);
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
    shapes.set("spikebox", new Path(ctx => {
        var i = .1;
        var r = 1 - i;
        ctx.moveTo(0, 0);
        ctx.lineTo(.5, i);
        ctx.lineTo(1, 0);
        ctx.lineTo(r, .5);
        ctx.lineTo(1, 1);
        ctx.lineTo(.5, r);
        ctx.lineTo(0, 1);
        ctx.lineTo(i, .5);
        ctx.closePath();
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
    shapes.set("dual-arrow", new Path(path => {
        var mid = 1/2;
        var top = 2/16;
        var btm = 9/10;
        var spl = 1/2;
        var wid = 14/16;
        var spr = 11/16;
        path.moveTo(mid, top);
        path.lineTo(wid, spl);
        path.lineTo(1 - wid, spl);
        path.closePath();
        var a = spl - top;
        top += a;
        spl += a;
        btm += a;
        path.moveTo(mid, top);
        path.lineTo(wid, spl);
        path.lineTo(1 - wid, spl);
        path.closePath();
    }));
    shapes.set("pointer", new Path(path => {
        var mid = 1/2;
        var top = 2/10;
        var btm = 8/10;
        // var spl = 1/2;
        var wid = 14/16;
        // var spr = 11/16;
        path.moveTo(mid, top);
        path.lineTo(wid, btm);
        // spr = 1 - spr;
        wid = 1 - wid;
        path.lineTo(wid, btm);
        path.closePath();
        path.rotation = PI / 2;
    }));
    shapes.set("big-pointer", new Path(path => {
        var mid = 1/2;
        var top = -3/10;
        var btm = 10/10;
        // var spl = 1/2;
        var wid = 20/16;
        // var spr = 11/16;
        path.moveTo(top, mid);
        path.lineTo(btm, 1 - wid);
        // spr = 1 - spr;
        wid = 1 - wid;
        path.lineTo(btm, 1 - wid);
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
        path.rect(-.2, -.2, 1.4, 0.2);
        path.rect(0.0, -.8, 1.0, 0.6);
    }));
    shapes.set("shades", new Path(ctx => {
        ctx.rect(0, 0.2, 1, 0.1);

        ctx.moveTo(1.0, 0.2);
        ctx.lineTo(0.9, 0.4);
        ctx.lineTo(0.7, 0.4);
        ctx.lineTo(0.6, 0.2);

        ctx.moveTo(0.5, 0.2);
        ctx.lineTo(0.4, 0.4);
        ctx.lineTo(0.2, 0.4);
        ctx.lineTo(0.1, 0.2);
    }));
    shapes.set("suit", new Path(ctx => {
        ctx.moveTo(0.0, 1.0);
        // ctx.lineTo(-.1, 1.0);
        ctx.lineTo(0.0, 0.5);
        ctx.lineTo(0.5, 0.7);
        ctx.lineTo(1.0, 0.5);
        // ctx.lineTo(1.1, 1.0);
        ctx.lineTo(1.0, 1.0);
    }));
    shapes.set("trapoid", new Path(ctx => {
        ctx.moveTo(1.0, -.1);
        ctx.lineTo(0.0, 0.0);
        ctx.lineTo(0.0, 1.0);
        ctx.lineTo(1.0, 1.1);
        ctx.closePath();
    }));
    shapes.set("trapoid-2", new Path(ctx => {
        ctx.moveTo(1.0, 0.0);
        ctx.lineTo(0.0, 0.0);
        ctx.lineTo(-.1, 1.0);
        ctx.lineTo(1.1, 1.0);
        ctx.closePath();
    }));
    shapes.set("blob", new Path(ctx => {
        ctx.moveTo(.8, 1);
        ctx.quadraticCurveTo(1, 1, 1, .8);
        ctx.quadraticCurveTo(1.1, .1, .5, .1);
        ctx.quadraticCurveTo(-.1, .1, 0, .8);
        ctx.quadraticCurveTo(0, 1, .2, 1);
        ctx.closePath();
    }));
    shapes.set("snake-head", new Path(ctx => {
        var a = PI * 0.25;
        var b = PI * 1.75;
        ctx.arc(.5, .5, .5, a, b);
        ctx.lineTo(.7, .5);
        ctx.closePath();
    }));
    shapes.set("snake-top", new Path(ctx => {
        var a = PI * 0.25;
        var b = PI * 1.75;
        ctx.arc(.5, .5, .5, a, b);
        ctx.lineTo(.7, .5);
        ctx.closePath();
        ctx.rect(0, 0, .5, 1);
    }));
    shapes.set("snake-tail", new Path(ctx => {
        var a = PI * 0.5;
        var b = PI * 1.5;
        ctx.ellipse(1, .5, 1, .5, 0, a, b);
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
            exp.push(blob);
        }
    }
    dead = 0;
    movement() {
        var {friction} = this;
        this.vx *= friction;
        this.vy *= friction;
        if(!this.dead) this.tick();
        this.ox = this.x;
        this.oy = this.y;
        this.x += this.vx;
        this.y += this.vy;
        this.hitWall = this.screenlock();
        if(this.hitWall && this.wallSound) {
            sounds.Wall.play();
        }
    }
    wallSound = true;
    hitSound = true;
    update() {
        this.movement();
        if(this.hp <= 0) {
            ++this.dead;
        }
        if(this.inv) for(let [enemy, number] of this.inv) {
            if(--number) this.inv.set(enemy, number);
            else this.inv.delete(enemy);
        }
    }
    friction = 0.8;
    get alpha() {
        if(this.dead) return 1 - this.dead/DEAD;
        else if(this.teamColor && !(this instanceof Bullet)) return 1;
        return (this.hp/this.xHp) * .8 + .2;
    }
    draw() {
        this.drawo2();
        this.drawo();
        this.draw1();
        this.draw2();
        this.draw3();
        this.dteam();
    }
    dteam() {
        if(this.teamColor) {
            var {x, y, s, r, ro, alpha} = this;
            x *= scale;
            y *= scale;
            s *= scale;

            if(!r) r = 0;
            if(!ro) ro = 0;

            r += ro;

            var hp = (this.hp/this.xHp);
            if(hp <= 0) hp = 1;
            if(this instanceof Bullet) hp = 1;

            ctx.save();
            ctx.zoom(x, y, s, s, r);
            ctx.beginPath();
            ctx.arc(.5, .5, 2, 0, PI2 * hp);
            ctx.lineTo(.5, .5);
            ctx.closePath();
            ctx.clip();
            ctx.lineWidth = 3/s;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = this.teamColor;
            ctx.stroke(this.shape);
            ctx.resetTransform();
            ctx.restore();
        }
    }
    drawWith(obj) {
        obj = {...this, ...obj};
        // this.drawo2.call(obj);
        // this.drawo.call(obj);
        this.draw1.call(obj);
        this.draw2.call(obj);
        this.draw3.call(obj);
        this.dteam.call(obj);
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
    draw3() {
        var {x, y, s, r, alpha, ro, shape3} = this;
        if(!shape3) return;
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
        ctx.fillStyle = this.color3 || this.color2 || this.color;
        ctx.fill(shape3);
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
            if(this.hitSound) {
                if(this.hp > 0) sounds.Hit.play();
                else if(!this.dead) sounds.Smack.play();
            }
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
        if(a.nocoll & b.team || b.nocoll & a.team) return 0;
        return (a.coll & b.team) || (b.coll & a.team);
    }
    static hitTest(a, b) {
        if(a.inv.has(b)) return;
        if(b.inv.has(a)) return;
        if(a.nohit & b.team || b.nohit & a.team) return 0;
        return (a.hits & b.team) || (b.hits & a.team);
    }
    /**@param {Entity} a param {Entity} b*/
    static collide(a, b) {
        var am = a.m;
        var bm = b.m;

        // am = sqrt(am);
        // bm = sqrt(bm);

        var hrad = this.radian(b, a);

        // var ar = a.s/2;
        // var br = b.s/2;

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

        // var arad = atan(a.vy, a.vx);
        // var brad = atan(b.vy, b.vx);

        //Movement radian
        // var amr = rDis(lrad, arad);
        // var bmr = rDis(lrad, brad);

        //Movement force
        // var amf = cos(amr);
        // var bmf = cos(bmr);

        // if(sign(amf) > 0) amf = 0;
        // if(sign(bmf) < 0) bmf = 0;

        //Movement saved
        // var ams = abs(sin(amr));
        // var bms = abs(sin(bmr));

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
    wallSound = false;
    s = .2;
    life = 0;
    moveTo2(enemy, mult) {
        var dis = Entity.distance(this, enemy);
        var rad = Entity.radian(enemy, this);

        var spd = dist(this.vx, this.vy);
        var i = 0.1;
        if(dis > spd + i) dis = spd + i;

        this.vx = cos(rad) * dis;
        this.vy = sin(rad) * dis;
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
            this.spd = 0.1;
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
        // var color = ctx.createLinearGradient(x, y, ox, oy);
        // this.color = this.color2 || `hsl(${this.hue}, ${this.sat}%, ${this.bri}%)`;
        // color.addColorStop(0, this.color);
        // color.addColorStop(1, this.color3 || `hsla(${this.hue - 10}, ${this.sat}%, ${this.bri}%, .2)`);
        ctx.strokeStyle = this.color = `hsl(${this.hue}, ${this.sat}%, ${this.bri}%)`;
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
        if(this.hits & what.team && ((this.team & TEAM.GOOD) || !this.dead)) {
            what.attacked({enemy: this, atk: this.atk});
        }
    }
    attacked(obj) {
        super.attacked(obj);
        for(let main of mains) {
            main.onXp();
        }
    }
    explode() {}
    getMain() {
        let arr = [];
        let ali = [];
        for(let main of mains) {
            var dis = Entity.distance(this, main);
            arr.push([main, dis]);
            if(!main.dead) {
                ali.push([main, dis])
            }
        }
        if(ali.length) arr = ali;

        arr.sort((a, b) => a[1] - b[1]);

        return arr[0][0];
    }
    registerPlayer(what) {
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
        //     var dis = abs(spd);
        //     ctx.strokeStyle = spd > 0? "green": "red";
        //     ctx.beginPath();
        //     ctx.moveTo(mx * scale, my * scale);
        //     var x = mx + cos(rad) * dis;
        //     var y = my + sin(rad) * dis;
        //     ctx.lineTo(x * scale, y * scale);
        //     ctx.stroke();
        // }
        // // Brain lines
        // for(let [rad, spd] of this.brainPoints) {
        //     var dis = abs(spd) * 10;
        //     ctx.strokeStyle = spd > 0? "green": "red";
        //     ctx.beginPath();
        //     ctx.moveTo(mx * scale, my * scale);
        //     var x = mx + cos(rad) * dis;
        //     var y = my + sin(rad) * dis;
        //     ctx.lineTo(x * scale, y * scale);
        //     ctx.stroke();
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
    shape2 = shapes.get("pointer");
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
        this.team = parent.team | TEAM.BULLET;
        this.hits = parent.hits;
        this.color = parent.color;
        this.color2 = parent.color2;
        this.coll = parent.coll | TEAM.BULLET;
        this.teamColor = parent.teamColor;
    }
    xHp = .5;
    hp = .5;
    hitSound = false;
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
    attacked() {
        this.hp = 0;
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
class CurveBullet extends Bullet{
    tick() {
        super.tick();
        var rad = atan(this.vy, this.vx) + PI * .5;
        this.off += PI * .1;
        var pow = cos(this.off + rad) * .75;
        var c = cos(rad);
        var s = sin(rad);
        this.x += pow * c;
        this.y += pow * s;
    }
    constructor(parent, rad) {
        super(parent, rad);
        this.off = PI * floor(random(2));
    }
}
class Chaser extends Brain{
    color = "#f5a";
    shape = shapes.get("square.4");
    wander = .8;
    register(enemy) {
        // if(enemy instanceof Chaser) return;
        // if(enemy instanceof Bullet) return;
        if(!(this.hits & enemy.team) || enemy.team & TEAM.BULLET) return;
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
        this.registerPlayer(what);
    }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        if(expert && player) {
            var l = .3;
            this.r = atan(this.vy, this.vx);
            if(this.force || Entity.distance(this, player) < this.sd) {
                var m = 1 - Entity.distance(this, player)/(this.force? 25: this.sd);
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
    sd = 10;
}
class Pounder extends Enemy{
    constructor() {
        super();
        this.a = round(random());
        this.b = round(random());
        this.time = 0;
        this.mov = expert? 0.25: 0.15;
    }
    tick() {
        if(this.time) {
            --this.time;
            if(this.time == 0 && this.hitWall) {
                this.a = !this.a;
            }
        }else{
            this.spd = this.mov;
            if(this.hitWall) {
                this.b = !this.b;
                this.time = expert? 5: 10;
                this.vx = 0;
                this.vy = 0;
                this.spd = 0.075;
            }
            var a = PI * .5;
            this.move(this.a * a + this.b * PI);
        }
        this.r = atan(this.vy, this.vx);
    }
    color = "#ff0";
    shape = shapes.get("trapoid");
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
    constructor(boss, add=true) {
        super(boss.x + boss.s/2, boss.y - boss.s/2);
        this.team = boss.team;
        this.boss = boss;
        this.add = add;
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
            if(this.add) bosses.add(this.boss);
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
            exp.push(blob);
        }
    }
    draw() {
        var {x, y} = this;
        x *= scale;
        y *= scale;
        y += scale/2;
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
            blob.drawWith({x: this.x - s/2, y: this.y, s, r: 0, alpha: a});
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
        this.range = expert? 15: 10;
    }
    // register(what) {
    //     if(!(this.hits & what.team) || what.team & TEAM.BULLET) return;
    //     var dis = Entity.distance(this, what);
    //     if(!this.player) {
    //         this.player = what;
    //         this.dis = dis;
    //     }else if(dis < this.dis) {
    //         this.player = what;
    //         this.dis = dis;
    //     }
    // }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        if(this.lastShot) --this.lastShot;
        if(Entity.distance(this, player) < this.range) {
            var rad = Entity.radian(player, this);
            var dis = rDis(this.r - PI/2, rad);
            // this.r = rad + PI/2;
            var m = this.mo;
            if(expert || this.good) {
                if(abs(dis) < m) {
                    this.r = rad + PI/2;
                    this.shoot(this.r - PI/2);
                }else this.r += sign(dis) * m;
            }else{
                if(abs(dis) < m) {
                    this.r = rad + PI/2;
                }else this.r += sign(dis) * m;
                this.shoot(this.r - PI/2);
            }
        }
    }
    mo = PI/32;
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
            sounds.Shoot.play();
            return blob;
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
    xHp = 0.01;
    hp = 0.01;
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
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        if(Entity.distance(this, player) < 5 && !this.timer) {
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
        
        sounds.Explode.play();
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
class Mafia extends Enemy{
    xp = 7;
    tick() {}
    register(what) {
        this.registerPlayer(what);
    }
    draw() {
        var {ox, oy, x, y, alpha} = this;
        this.drawWith({x: ox, y: oy, alpha: alpha * .2});
        this.drawWith({x: (ox + x) * .5, y: (oy + y) * .5, alpha: alpha * .5});
        this.drawWith({alpha});
    }
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    draw3() {
        var {x, y, s, r, alpha, shape3} = this;
        if(!shape3) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color3 || this.color2 || this.color;
        ctx.fill(shape3);
        ctx.resetTransform();
        ctx.restore();
    }
    shape = shapes.get("square.4");
    shape2 = shapes.get("shades");
    shape3 = shapes.get("suit");
    color = "#777";
    color2 = "#444";
    color3 = "#ccc";
}
class MafiaTurret extends Turret{
    draw() {
        var {ox, oy, x, y, alpha} = this;
        this.drawWith({x: ox, y: oy, alpha: alpha * .2});
        this.drawWith({x: (ox + x) * .5, y: (oy + y) * .5, alpha: alpha * .5});
        this.drawWith({alpha});
    }
    draw1() {
        var {x, y, s, r, alpha, shape} = this;
        if(!shape) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.fill(shape);
        ctx.resetTransform();
        ctx.restore();
    }
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    draw3() {
        var {x, y, s, r, alpha, shape3} = this;
        if(!shape3) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color3 || this.color2 || this.color;
        ctx.fill(shape3);
        ctx.resetTransform();
        ctx.restore();
    }
    xp = 7;
    range = 10;
    constructor() {
        super();
        if(!expert) this.range = 7;
        else this.mo = PI/16;
    }
    shoot(r) {
        var u = PI/4;
        var end = r + u;
        if(!this.lastShot) for(let rad = r - u; rad <= end; rad += u) {
            var blob = new Bullet(this, rad);
            blob.team = TEAM.BULLET;
            blob.coll = TEAM.BULLET + TEAM.GOOD;
            var m = expert? 2: 3;
            blob.spd  /= m;
            blob.spd *= 2;
            blob.time = 10;
            enemies.push(blob);
            this.lastShot = 40;
            sounds.Shotgun.play();
        }
    }
    shape = shapes.get("square.4");
    shape2 = shapes.get("shades");
    // shape3 = shapes.get("suit");
    color = "#777";
    color2 = "#444";
    color3 = "#ccc";
}
class MafiaInvasion extends Mafia{
    constructor() {
        super();
        if(!expert) {
            this.hp = 20;
            this.xHp = 20;
            this.hp2 = 20;
        }
        this.spawn();
    }
    spawn() {
        this.x = -1;
        this.y = -1;
    }
    movement() {
        this.tick();
    }
    tick() {
        var n = this.hp;
        if(n > 10) n = 10;
        if(this.time++ % 50 == 0 && this.all.length < n) for(let i = min(3, this.hp2, n - this.all.length); i > 0; i--) {
            var blob = new (randomOf([MafiaTurret, MafiaGunner, MafiaCharger]));
            blob.spawn();
            this.all.push(blob);
            enemies.push(blob);
            --this.hp2;
        }
        this.all = this.all.filter(blob => {
            var keep = !blob.dead;
            if(!keep) --this.hp;
            return keep;
        });
    }
    screenlock() {}
    xp = 10;
    time = 0;
    team = TEAM.BAD;
    hits = 0;
    coll = 0;
    s = 0;
    xHp = 30;
    hp = 30;
    hp2 = 30;
    all = [];
    static name = "Mafia";
    static type = "Invasion";
}
class MafiaGunner extends Mafia{
    constructor() {
        super();
        if(!expert) this.spd = 0.04;
    }
    tick() {
        if(this.lastShot) --this.lastShot;
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();

        this.moveTo(player, (30 - this.lastShot)/20);
        if(Entity.distance(this, player) < 5) {
            var rad = Entity.radian(player, this);
            this.shoot(rad);
        }
    }
    shape3 = shapes.get("tophat");
    lastShot = 0;
    shoot(rad) {
        if(!this.lastShot) {
            var blob = new Bullet(this, rad);
            blob.team = TEAM.BULLET;
            blob.coll = TEAM.BULLET + TEAM.GOOD;
            var m = expert? 2: 4;
            blob.spd  /= m;
            blob.time *= m;
            enemies.push(blob);
            this.lastShot = 50;
            sounds.Shoot.play();
        }
    }
    draw3() {
        var {x, y, s, r, alpha, shape3} = this;
        if(!shape3) return;
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
        ctx.fillStyle = this.color3 ||this.color2 || this.color;
        ctx.fill(shape3);
        ctx.resetTransform();
        ctx.restore();
    }
}
class MafiaCharger extends Mafia{
    constructor() {
        super();
        if(expert) {
            this.spd = .75;
        }
    }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();

        this.moving = dist(this.vx, this.vy) > (expert? 0.3: 0.1);
        var dis = Entity.distance(this, player);
        if(!this.moving) {
            if(!expert) {
                this.vx = 0;
                this.vy = 0;
            }
            if(dis < (expert? 15: 10)) {
                this.moveTo(player);
                sounds.Dash.play();
            }
        }
    }
    m = 5;
    spd = 0.5;
    friction = 0.99;
}
class Spinner extends Chill{
    tick() {
        super.tick();
        this.rot += PI/32;
        this.r = this.rot;
        if(++this.time % 6 == 0) {
            for(let i = 0; i < 2; i++) {
                var blob = new Bullet(this, this.r + i * PI);
                blob.m = 0.01;
                blob.hp = 0;
                blob.spd *= .7;
                blob.nocoll = TEAM.BAD;
                enemies.push(blob);
            }
        }
    }
    color = "#ccc";
    color2 = "#f77";
    shape = shapes.get("square-2");
    rot = 0;
    time = 0;
    sd = 15;
}
class Lost extends Brain{
    register(enemy) {
        if(!expert) return;
        if(!(enemy.team & TEAM.BULLET) && (this.hits & enemy.team)) {
            var dis = Entity.distance(this, enemy);
            var d = 10;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(enemy, this);
                n **= 1;
                this.brainPoints.push([rad, n]);
            }
        }else{//Run away
            var dis = Entity.distance(this, enemy);
            var d = 2;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(this, enemy);
                n **= .5;
                this.brainPoints.push([rad, n * 2]);
            }
        }
    }
    tick() {
        super.tick();
        this.r = atan(this.vy, this.vx);
    }
    color = "#f5a";
    shape = shapes.get("spikebox");
}
class Slime extends Enemy{
    constructor(ver=1) {
        super();
        this.spd *= 10;
        this.version = ver;
        if(expert) {
            this.a *= .3;
            this.b *= .3;
            this.spd *= .5;
        }
        if(ver == 2) {
            this.s = .5;
            this.spd *= .75;
            this.a *= .5;
            this.b *= .5;
        }
    }
    a = 20;
    b = 60;
    tick() {
        this.r = 0;

        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        if(this.time) --this.time;
        else{
            this.moveTo(player);
            this.time = floor(random(this.b, this.a)) + 1;
        }
    }
    update() {
        super.update();
        if(this.dead && this.version == 1) {
            this.dead = DEAD;
        }
    }
    explode() {
        super.explode();
        if(this.version == 1) {        
            sounds.Summon.play();
            var u = PI * .5;
            var o = random(PI2);
            for(let i = 0; i < PI2; i += u) {
                var blob = new Slime(2);
                Xp.position(blob, i, this);
                blob.vx = cos(i) * .2;
                blob.vy = sin(i) * .2;
                blob.version = 2;
                enemies.push(blob);
            }
        }
    }
    shape = shapes.get("blob");
    color = "#afa";
    version = 1;
}
class Runner extends Mover{
    constructor() {
        super();
        this.spd *= 1.3;
    }
    color = "#055";
    color2 = "#7f7";
    shape2 = shapes.get("dual-arrow");
}
class Dasher extends Mover{
    static name = "Dasher";
    static type = "Miniboss";
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD + TEAM.BULLET;
    coll = 0;
    s = 1.5;
    m = 1;
    hp  = 10;
    xHp = 10;
    phase = 0;
    register(what) {
        this.registerPlayer(what);
    }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        var m = this.hp/this.xHp;
        switch(this.phase) {
            case 0:
                this.spd = expert? .2: .075;
                this.moveTo(player);
                this.r = atan(this.vy, this.vx);
                // this.nocoll = this.hits;
                this.m = 10
                if(Entity.distance(this, player) < 5) {
                    this.phase = 1;
                    this.flash = 0;
                }
            break;
            case 1:
                ++this.flash;
                this.m = 10
                // this.nocoll = this.hits;
                this.color = `hsl(0, ${(this.flash % 10) * 10}%, 50%)`;
                if(expert || this.flash < 30) {
                    this.r = Entity.radian(player, this);
                }
                if(this.flash >= (expert? 25: 40)) {
                    this.phase = 2;
                    this.spd = 0.6;
                    this.timer = 0;
                    sounds.Dash.play();
                }
            break;
            case 2:
                this.timer++;
                var b = 7;
                var c = expert? 0: (10 * m);
                this.m = 0.1;
                // this.nocoll = 0;
                if(this.timer < b) {
                    if(expert) this.moveTo(player);
                    else this.move(this.r);
                    // this.move(this.r);
                }else if(this.timer < b + c) {
                    var a = this.timer - b;
                    this.color = `hsl(0, ${a * 2}%, 50%)`;
                }else{
                    if(expert) {
                        var u = PI2/8;
                        for(let i = 0; i < PI2; i += u) {
                            var blob = new Bullet(this, i);
                            blob.color = "#f00";
                            // blob.coll = 0;
                            blob.time = 30;
                            blob.spd = 0.5;
                            // blob.s *= 2;
                            enemies.push(blob);
                        }
                        sounds.Explode.play();
                    }
                    this.phase = 0;
                    this.color = "#f00";
                }
                this.r = atan(this.vy, this.vx);
            break;
        }
    }
    // attacked(obj) {
    //     super.attacked(obj);

    //     var a = 5 * obj.atk;
    //     var o = random(PI);
    //     for(let i = 0; i < a; i++) {
    //         var blob = new Xp;
    //         Xp.position(blob, i * PI2/a + o, this);
    //         exp.push(blob);
    //     }
    // }
    shape = shapes.get("square.4");
    color = "#f00";
    shape2 = shapes.get("arrow-box");
    color2 = "#fff";
    xp = 15;
}
class MiniDash extends Dasher{
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        var m = this.hp/this.xHp;
        switch(this.phase) {
            case 0:
                this.spd = expert? .12: .075;
                this.moveTo(player);
                this.r = atan(this.vy, this.vx);
                // this.nocoll = this.hits;
                this.m = 10
                if(Entity.distance(this, player) < 5) {
                    this.phase = 1;
                    this.flash = 0;
                }
            break;
            case 1:
                ++this.flash;
                this.m = 10
                // this.nocoll = this.hits;
                this.color = `hsl(0, ${(this.flash % 10) * 10}%, 50%)`;
                if(expert || this.flash < 10) {
                    this.r = Entity.radian(player, this);
                }
                if(this.flash >= (expert? 10: 15)) {
                    this.phase = 2;
                    this.spd = 0.3;
                    this.timer = 0;
                    sounds.Dash.play();
                }
            break;
            case 2:
                this.timer++;
                var b = 5;
                var c = expert? 0: (5 * m);
                this.m = 0.1;
                // this.nocoll = 0;
                if(this.timer < b) {
                    if(expert) this.moveTo(player);
                    else this.move(this.r);
                    // this.move(this.r);
                }else if(this.timer < b + c) {
                    var a = this.timer - b;
                    this.color = `hsl(0, ${a * 2}%, 50%)`;
                }else{
                    // if(expert) {
                    //     var u = PI2/8;
                    //     for(let i = 0; i < PI2; i += u) {
                    //         var blob = new Bullet(this, i);
                    //         blob.color = "#f00";
                    //         // blob.coll = 0;
                    //         blob.time = 30;
                    //         blob.spd = 0.5;
                    //         // blob.s *= 2;
                    //         enemies.push(blob);
                    //     }
                    // }
                    this.phase = 0;
                    this.color = "#f00";
                }
                this.r = atan(this.vy, this.vx);
            break;
        }
    }
    xHp = 1;
    hp  = 1;
    team = TEAM.BAD + TEAM.ENEMY;
    hits = TEAM.GOOD;
    coll = TEAM.ENEMY;
    s = 1;
    mini = true;
}
class Squish extends Enemy{
    static name = "Squisher";
    static type = "Boss 2";
    color = "#f07";
    color2 = "#f80";
    shape  = shapes.get("trapoid");
    shape2 = shapes.get("trapoid");
    ro = PI * .5;
    xHp = 20;
    hp = 20;
    s = 2;
    phase = 0;
    ticks = 0;
    r = 0;
    register(enemy) {
        this.registerPlayer(enemy);
    }
    // attacked(obj) {
    //     super.attacked(obj);

    //     var a = 10 * obj.atk;
    //     var o = random(PI);
    //     for(let i = 0; i < a; i++) {
    //         var blob = new Xp;
    //         Xp.position(blob, i * PI2/a + o, this);
    //         exp.push(blob);
    //     }
    // }
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        var p = this.ro;
        switch(this.phase) {
            case 0:
                ++this.ticks;
                this.m = 10
                // this.nocoll = this.hits;
                this.color = `hsl(332, 50%, ${(this.ticks % 10) * 5 + 50}%)`;
                if(this.ticks < 40) {
                    this.r += random(.3);
                }
                var m = expert? 5: 15;
                var l = this.ticks % m;
                if(l == 0) {
                    for(let i = 0; i < 2; i++) {
                        var blob = new Bullet(this, this.r + i * PI);
                        blob.m = 0.01;
                        enemies.push(blob);
                    }
                    sounds.MachineGun.play();
                }
                if(l == 7) {
                    sounds.MachineGun.play();
                }
                if(expert && l == 2) {
                    sounds.MachineGun.play();
                }
                if(this.ticks == 50) {
                    this.color = "#f07";
                    this.phase = 1;
                    this.ticks = 0;
                    this.a = 0;
                    this.b = 0;
                    this.spd = expert? 0.3: 0.15;
                }
            break;
            case 1:
                ++this.ticks;
                if(expert || this.ticks < 60) {
                    this.move(this.r + p);
                }
                if(this.hitWall) {
                    this.r = atan(this.vy, this.vx) - p;
                }
                if(this.ticks == 75) {
                    this.phase = 2;
                    this.ticks = 0;
                }
            break;
            case 2:
                ++this.ticks;
                if(this.ticks % (expert? 4: 8) == 0 && this.ticks <= (expert? 16: 32)) {
                    var a = this.ticks * (expert? .25: .125);
                    let blob = new Turret();
                    var rad = a * p;
                    Bullet.position(blob, rad + PI/8, this);
                    blob.color = this.color;
                    blob.color2 = this.color2;
                    blob.coll = 0;
                    blob.mo = PI/8;
                    blob.vx = cos(rad) * .5;
                    blob.vy = sin(rad) * .5;
                    blob.fire = blob.shoot;
                    blob.shoot = rad => {
                        var bullet = blob.fire(rad);
                        if(bullet) bullet.m = 0.01;
                    } 
                    enemies.push(blob);
                    sounds.BotSummon.play();
                }
                if(this.ticks == (expert? 50: 75)) {
                    this.phase = 3;
                    this.ticks = 0;
                    for(let rad = 0; rad < PI2; rad += p) {
                        var blob = new MafiaGunner();
                        Bullet.position(blob, rad + PI/8, this);
                        blob.r = 0;
                        blob.color = this.color;
                        blob.color2 = this.color2;
                        blob.color3 = this.color;
                        blob.coll = 0;
                        blob.mo = PI/8;
                        blob.vx = cos(rad) * .5;
                        blob.vy = sin(rad) * .5;
                        enemies.push(blob);
                    }
                    sounds.BotSummon.play();
                }
            break;
            case 3:
                ++this.ticks;
                if(this.ticks < 40) {
                    this.r = Entity.radian(player, this) - p;
                }
                if(this.ticks == 50) {
                    this.phase = 4;
                    this.ticks = 0;
                    this.spd = expert? 0.3: 0.15;
                    this.m = 0.1;
                    sounds.Dash.play();
                }
            break;
            case 4:
                ++this.ticks;
                if(this.ticks % 20 == 0) {
                    sounds.Dash.play();
                }
                if(this.ticks % 20 < 10) {
                    this.move(this.r + p);
                }else{
                    this.r = Entity.radian(player, this) - p;
                }
                if(this.hitWall) {
                    this.r = atan(this.vy, this.vx) - p;
                }
                if(this.ticks == 80) {
                    this.phase = 5;
                    this.ticks = 0;
                    this.m = 1;
                }
            break;
            case 5:
                ++this.ticks;
                // if(this.ticks % 4 == 0 && this.ticks <= 32) {
                //     var a = this.ticks * .125;
                //     var blob = new Bomb();
                //     var rad = a * p;
                //     Bullet.position(blob, rad + PI/8, this);
                //     blob.color = this.color;
                //     blob.coll = 0;
                //     blob.mo = PI/8;
                //     blob.vx = cos(rad) * .5;
                //     blob.vy = sin(rad) * .5;
                //     enemies.push(blob);
                // }
                if(this.ticks == 60) {
                    this.phase = 0;
                    this.ticks = 0;
                    for(let rad = 0; rad < PI2; rad += p) {
                        var blob = new Pounder();
                        Bullet.position(blob, rad + PI/8, this);
                        blob.r = 0;
                        blob.color = this.color;
                        blob.color2 = this.color2;
                        blob.color3 = this.color;
                        blob.coll = 0;
                        blob.mo = PI/8;
                        blob.vx = cos(rad) * .5;
                        blob.vy = sin(rad) * .5;
                        enemies.push(blob);
                    }
                    sounds.BotSummon.play();
                }
            break;
        }
    }
}
class Summoner extends Brain{
    team = TEAM.BOSS + TEAM.BAD;
    hits = TEAM.GOOD;
    coll = 0;
    xHp = 20;
    hp = 20;
    s = 2;
    r = 0;
    xp = 30;
    ro = 0;
    goal = new Point;
    draw() {
        if(this.color2 == "#f00") {
            var {goal} = this;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#f00";
            ctx.moveTo((this.x + this.s * .5) * scale, (this.y + this.s * .5) * scale);
            ctx.lineTo(goal.x * scale, goal.y * scale);
            ctx.stroke();
        }
        super.draw();
    }
    constructor() {
        super();
        if(expert) this.spd *= 1.5;
    }
    // attacked(obj) {
    //     super.attacked(obj);
    //     if(this.god) return;
        
    //     var a = 7 * obj.atk;
    //     var o = random(PI);
    //     for(let i = 0; i < a; i++) {
    //         var blob = new Xp;
    //         Xp.position(blob, i * PI2/a + o, this);
    //         exp.push(blob);
    //     }
    // }
    smartMove() {
        this.rad += (srand() - .5)/4;
        this.brainPoints.push([this.rad, this.wander]);
        var lx = this.x + this.s;
        var ly = this.y + this.s;

        var d = 10;
        var p = 2;

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
        this.registerPlayer(enemy);
        if(!(enemy.team & TEAM.GOOD)) return;
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
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        // var {goal} = this;
        // if(this.color2 == "#f00") {
        //     this.god = true;
        // }else{
        //     this.god = false;
        // }
        switch(this.phase) {
            case 0:
                if(this.time < 100 && this.time % 10 == 0) {
                    var rad = random(PI2);
                    var blob = new Mover();
                    Bullet.position(blob, rad - PI/8, this);
                    blob.color = this.color;
                    blob.color2 = this.color2;
                    blob.coll = 0;
                    enemies.push(blob);
                    sounds.Summon.play();
                }
                if(this.time >= (expert? 150: 250)) {
                    this.color2 = "#f70";
                }
                if(this.time <= (expert? 175: 250)) {
                    this.smartMove();
                }
                if(this.time == (expert? 200: 300)) {
                    this.time = 0;
                    this.phase = 1;
                }
                ++this.time;
            break;
            case 1:
                if(this.time < 100 && this.time % 10 == 0) {
                    var rad = Entity.radian(player, this);
                    var blob = new Mover();
                    Bullet.position(blob, rad, this);
                    blob.color = this.color;
                    blob.color2 = this.color2;
                    blob.coll = 0;
                    blob.tick();
                    blob.vx *= 20;
                    blob.vy *= 20;
                    enemies.push(blob);
                    sounds.Summon.play();
                }
                if(this.time == 100) {
                    this.color2 = "#f0f";
                    this.time = 0;
                    this.phase = 2;
                }
                ++this.time;
            break;
            case 2:
                var dis = Entity.distance(this, player);
                this.color2 = "#afa";
                if(dis > 7) {
                    this.moveTo(player);
                    this.m = 20;
                }else{
                    this.m = 5;
                    let e = PI * .25;
                    let summon = expert? Chill: Mover;
                    for(let i = 0; i < 8; i++) {
                        var rad = i * e;
                        var blob = new summon();
                        Bullet.position(blob, rad, this);
                        blob.color = this.color;
                        blob.color2 = this.color2;
                        blob.force = true;
                        if(expert) blob.spd *= 1.5;
                        blob.coll = 0;
                        enemies.push(blob);
                    }
                    sounds.Summon.play();
                    this.phase = 3;
                    this.color2 = "#f0f";
                }
            break;
            case 3:
                this.smartMove();
                if(this.time == 150) {
                    let h = (innerHeight/scale)/(11);
                    let w = innerWidth/scale - .5;
                    let summon = Mover;
                    for(let i = 0; i < 10; i++) {
                        let a = i % 2 == 0;
                        if(expert) {
                            if(a) summon = Mover;
                            else summon = Chill;
                        }
                        var blob = new summon();
                        blob.coll = 0;
                        blob.x = expert? .5: (a? .5: w);
                        blob.y = h * i + .5;
                        blob.r = expert? 0: (a? 0: PI);
                        blob.color = this.color;
                        blob.color2 = this.color2;
                        if(summon == Chill) {
                            // blob.force = true;
                            blob.spd *= 1.5; 
                        }
                        enemies.push(blob);
                        if(expert) {
                            if(a) summon = Chill;
                            else summon = Mover;
                        }else continue;
                        var blob = new summon();
                        blob.coll = 0;
                        blob.x = w;
                        blob.y = h * i;
                        blob.r = PI;
                        blob.color = this.color;
                        blob.color2 = this.color2;
                        if(summon == Chill) {
                            // blob.force = true;
                            blob.spd *= 1.5; 
                        }
                        enemies.push(blob);
                    }
                    this.color2 = "#f0f";
                    sounds.BigMagic.play();
                }else if(this.time == 500) {
                    this.time = 0;
                    this.phase = 0;
                }
                if(this.time == 50) {
                    this.color2 = "#666";
                }
                ++this.time;
            break;
        }
    }
    time = 0;
    phase = 0;
    color = "#ff0";
    color2 = "#f0f";
    shape2 = shapes.get("square.4");
    shape = shapes.get("bullet");
    static name = "Summoner";
    static type = "Boss";
}
class Snake extends Brain{
    constructor(head) {
        super();
        this.head = head;
        if(expert) this.spd *= 1.5;
        this.nspd = this.spd;
    }
    coll = 0;
    wander = 1;
    xHp = 2;
    hp = 2;
    m = 0.1;
    static type = "Miniboss";
    tick() {
        var {head} = this;
        this.spd = this.nspd;
        if(head) {
            var loc = {...head};
            var dis = Entity.distance(this, loc);
            // loc.x += this.vx * 2;
            // loc.y += this.vy * 2;
            loc.x += head.vx * -5;
            loc.y += head.vy * -5;
            if(dis > 1.5) this.moveTo(loc);
            this.shape = this.tail?
                shapes.get("square"):
                shapes.get("snake-tail");
            head.tail = true;
            this.charging = head.charging;
            if(head.dead) {
                this.rad = this.r;
                delete this.head;
            }
        }else{ //If head
            this.shape = this.tail?
                shapes.get("snake-top"):
                shapes.get("snake-head");
            if(this.xHp > 1) {
                this.xHp = 1;
            }
            if(this.hp > 1) {
                this.hp = 1;
            }
            if(this.charging) {
                --this.charging;
                super.tick();
            }else{
                var {player} = this;
                if(player && player.dead) delete this.player;
                if(!player) player = this.getMain();

                var dis = Entity.distance(player, this);

                if(dis < (expert? 10: 5)) {
                    this.charging = 50;
                    this.spd *= 10;
                    this.moveTo(player);
                    this.spd = this.nspd;
                }else super.tick();
            }
        }
        this.tail = false;
        this.r = atan(this.vy, this.vx);
    }
    register(what) {
        this.registerPlayer(what);
    }
    draw() {
        super.draw();
        if(this.head && !this.dead) {
            var {head, s} = this;
            s *= .5;
            var n = dist(s, s);
            n -= 1/scale;

            var a = PI * .25;
            var b = -a;
            var c = a * 3;
            var d = a + PI;

            var hx = head.x + s;
            var hy = head.y + s;
            var hr = head.r;

            var x1 = hx + cos(hr + c) * n;
            var y1 = hy + sin(hr + c) * n;

            var x2 = hx + cos(hr + d) * n;
            var y2 = hy + sin(hr + d) * n;

            var x5 = hx + cos(hr + a) * n;
            var y5 = hy + sin(hr + a) * n;

            var x6 = hx + cos(hr + b) * n;
            var y6 = hy + sin(hr + b) * n;

            var tx = this.x + s;
            var ty = this.y + s;
            var tr = this.r;

            var x3 = tx + cos(tr + a) * n;
            var y3 = ty + sin(tr + a) * n;

            var x4 = tx + cos(tr + b) * n;
            var y4 = ty + sin(tr + b) * n;

            x1 *= scale;
            y1 *= scale;
            x2 *= scale;
            y2 *= scale;
            x3 *= scale;
            y3 *= scale;
            x4 *= scale;
            y4 *= scale;

            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x3, y3);
            ctx.moveTo(x2, y2);
            ctx.lineTo(x4, y4);
            ctx.closePath();
            ctx.stroke();
        }
    }
}
class SnakeHealth extends Snake{
    xHp = 39;
    hp = 39;
    s = 0;
    coll = 0;
    team = 0;
    hits = 0;
    color2 = "#999";
    ro = PI;
    tick() {
        this.shape = shapes.get("snake-head");
        this.hp = 0;
        for(let {hp} of this.parts) {
            if(hp > 0) this.hp += hp;
        }
    }
    // movement() {}
    constructor(...parts) {
        super();
        this.parts = parts;
    }
}
class Gobble extends Enemy{
    constructor() {
        super();
        if(expert) this.spd *= 1.5;
    }
    spd = .05;
    coll = TEAM.BULLET;
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        this.moveTo(player);
        this.r = atan(this.vy, this.vx);
        this.makeHead();
        ++this.time;
        if(expert) ++this.time;
        this.time %= 25;
    }
    makeHead() {
        var d = 25 * .5;
        var c = abs(this.time - d) * 0.02 - .25;
        // var c = 0;
        this.shape = new Path(ctx => {
            var a = PI * (0.25 + c);
            var b = PI * (1.75 - c);
            ctx.arc(.5, .5, .5, a, b);
            ctx.lineTo(.7, .5);
            ctx.closePath();
        });
    }
    time = 0;
    shape2 = shapes.get("circle");
    color = "#0a0";
    color2 = "#f0f";
}
class BulletHell extends Enemy{
    static type = "MiniBoss";
    static name = "Spinner";
    // attacked(obj) {
    //     super.attacked(obj);
    //     if(this.god) return;
        
    //     var a = 5 * obj.atk;
    //     var o = random(PI);
    //     for(let i = 0; i < a; i++) {
    //         var blob = new Xp;
    //         Xp.position(blob, i * PI2/a + o, this);
    //         exp.push(blob);
    //     }
    // }
    constructor() {
        super();
        if(!expert) {
            this.spd *= .5;
        }
        this.goal = new Point;
        this.goal.s = this.s * 2;
        this.god = true;
    }
    // team = TEAM.BAD + TEAM.BULLET;
    tick() {
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) player = this.getMain();
        switch(this.phase) {
            case 0:
                this.r = 0;
                if(++this.time <= 100 && this.time % (expert? 10: 20) == 0) {
                    this.burstShot();
                    this.god = false;
                }else
                if(this.time == (expert? 150: 200)) {
                    this.boom();
                }else
                if(this.time == (expert? 200: 300)) {
                    this.time = 0;
                    this.phase = 1;
                    this.r = PI * 1.25;
                }
            break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                // if(this.hitWall) {
                //     this.r = atan(this.vy, this.vx);
                // }
                if(this.phase == 1) {
                    this.goal.x = 0;
                    this.goal.y = 0;
                }else if(this.phase == 2) {
                    this.goal.x = game.w - this.s * 2;
                    this.goal.y = 0;
                }else if(this.phase == 3) {
                    this.goal.x = game.w - this.s * 2;
                    this.goal.y = game.h - this.s * 2;
                }else if(this.phase == 4) {
                    this.goal.x = 0;
                    this.goal.y = game.h - this.s * 2;
                }else if(this.phase == 5) {
                    this.goal.x = 0;
                    this.goal.y = 0;
                }else if(this.phase == 6) {
                    this.goal.x = (game.w - this.s * 2) * .3;
                    this.goal.y = (game.h - this.s * 2) * .3;
                }
                this.moveTo(this.goal);
                if(++this.time % 5 == 0) {
                    this.sideShot();
                }
                this.r = atan(this.vy, this.vx);
                if(this.inGoal()) {
                    ++this.phase;
                    // this.time = 0;
                }
            break;
            case 7:
                this.r += PI * .075;
                if(++this.time % (expert? 2: 10) == 0) {
                    this.spinShot();
                }
                if(this.time == 200) {
                    this.r = 0;
                    this.phase = 0;
                    this.time = 0;
                }
            break;
        }
    }
    inGoal() {return Entity.isTouching(this.goal, this)}
    burstShot() {
        var u = PI * .25;
        for(let i = 0; i < 8; i++) {
            var rad = i * u;
            var blob = new Bullet(this);
            Bullet.position(blob, rad, this);
            blob.time = 60;
            blob.spd *= .5;
            blob.s = expert? .75: .5;
            blob.coll = 0;
            blob.hit = what => {
                if(this.hits & what.team) {
                    what.attacked({enemy: this, atk: this.atk});
                    // what.vx += cos(this.r) * 3;
                    // what.vy += sin(this.r) * 3;
                    if(what instanceof Bullet) {
                        what.dead = DEAD;
                    }
                }
            }
            blob.nocoll = TEAM.BULLET;
            // blob.hits = TEAM.BULLET + TEAM.GOOD;
            blob.team = TEAM.BULLET + TEAM.BAD;
            blob.nohit = TEAM.BAD;
            enemies.push(blob);
        }
    }
    boom() {
        var u = PI * .125;
        for(let i = 0; i < 16; i++) {
            var rad = i * u;
            var blob = new Bullet(this);
            Bullet.position(blob, rad, this);
            blob.time = expert? 10: 30;
            blob.spd *= expert? 2: .5;
            blob.s = expert? .75: .5;
            blob.coll = 0;
            blob.nocoll = TEAM.BULLET;
            // blob.hits = TEAM.BULLET + TEAM.GOOD;
            // blob.nohit = TEAM.BULLET;
            blob.team = TEAM.BULLET + TEAM.BAD;
            blob.nohit = TEAM.BAD;
            enemies.push(blob);
        }
    }
    sideShot() {
        var o = this.r - PI * .5;
        for(let i = 0; i < 2; i++) {
            var rad = o + PI * i;
            var blob = new Mover(this);
            Bullet.position(blob, rad, this);
            blob.team = TEAM.BULLET + TEAM.BAD + TEAM.GOOD;
            blob.nohit = TEAM.BAD;
            // blob.hits = TEAM.BULLET + TEAM.GOOD;
            // blob.time = 10;
            blob.s = expert? .75: .5;
            blob.shape2 = 0;
            blob.dead = -5;
            blob.hp = 0;
            blob.color = this.color;
            blob.color2 = this.color2;
            // blob.spd *= ;
            blob.coll = 0;
            blob.nocoll = TEAM.BULLET;
            for(let i = 0; i < 10; i++) blob.tick();
            blob.spd = 0;
            blob.xp = 0;
            // blob.nohit = TEAM.BULLET;
            enemies.push(blob);
        }
    }
    spinShot() {
        var o = this.r - PI * .5;
        for(let i = 0; i < 2; i++) {
            var rad = o + PI * i;
            var blob = new Bullet(this);
            Bullet.position(blob, rad, this);
            blob.hp = 0;
            blob.s = expert? .75: .5;
            blob.team = TEAM.BULLET + TEAM.BAD;
            blob.nohit = TEAM.BAD;
            // blob.hits = TEAM.BULLET + TEAM.GOOD;
            // blob.hp = 0;
            // blob.spd *= ;
            blob.coll = 0;
            blob.nocoll = TEAM.BULLET;
            // blob.nohit = TEAM.BULLET;
            enemies.push(blob);
        }
    }
    spd = 0.3;
    s = 1.5;
    color = "#f00";
    color2 = "#afa";
    shape = shapes.get("square-2");
    shape2 = shapes.get("square-ring");
    phase = 0;
    time = 0;
    coll = TEAM.BAD;
    nocoll = TEAM.BULLET;
    hp = 15;
    xHp = 15;
}
var deadzone = 0.1;
var dead = (num, dual) => {
    if(num < deadzone && (!dual || num > -deadzone)) return 0;
    if(num > 1 - deadzone || (dual && num < deadzone - 1)) return sign(num);
    return num / (1 - deadzone);
}
class Player extends Entity{
    constructor(id=0) {
        super();
        this.id = id;
        this.spawn();
        if(multi) {
            this.hue = (id/(multi + 1)) * 360;
            this.safe = 360/((multi + 1) * 4);
        }
        this.nteam = this.team;
    }
    spawn() {
        this.x = (game.w - this.s)/2;
        this.y = (game.h - this.s)/2;
    }
    arenaSpawn() {
        var d = 10;
        var I = this;
        do{
            this.x = random(game.w - this.s);
            this.y = random(game.h - this.s);
        }while(close());
        function close() {
            for(let blob of enemies) {
                if(blob instanceof Player && blob.team != I.team && Entity.distance(blob, I) < d) {
                    return true;
                }
            }
        }
        return this;
    }
    go(rad, dis) {
        this.move(rad, dis);
    }
	touchv2() {
		var {touch, touch2} = this;
        var mx = (this.x + this.s * .5) * scale;
        var my = (this.y + this.s * .5) * scale;

        var inBattle = enemies.filter(blob => !(blob instanceof Player)).length;

		if(touch && touch.end) touch = false;
		if(!touch) touches.forEach(obj => {
			if(obj.sx < innerWidth/2 && obj != touch2 && !obj.end) {
				touch = obj;
			}
		});
		if(!touch2 && !this.skl) touches.forEach(obj => {
			if(obj.sx > innerWidth/2 && obj != touch && !obj.end) {
				touch2 = obj;
			}
		});
		if(touch && this.mrad === false) {
            var mrad = atan(touch.my, touch.mx);
            var dis = dist(touch.mx, touch.my);
            var inside = dis > scale;
			if(inside) {
                this.go(mrad);
                this.mrad = mrad;
            }
			this.touch = touch;
            if(inBattle && !Survival) touch.used = true;
			ctx.strokeStyle = inside? this.color: this.color2;
			ctx.beginPath();
			ctx.lineWidth = scale * .125;
            ctx.arc(touch.sx, touch.sy, scale, 0, PI2);
            ctx.stroke();
			ctx.lineWidth = scale * .25;
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.moveTo(touch.sx, touch.sy);
			ctx.lineTo(touch.x, touch.y);
			ctx.moveTo(mx, my);
			ctx.lineTo(mx + touch.mx, my + touch.my);
			ctx.stroke();
		}
		if(touch2) {
			this.touch2 = touch2;
            var hrad = atan(touch2.my, touch2.mx);
            var dis = dist(touch2.mx, touch2.my);
            var time = Date.now() - touch2.start;
            var overdue = time > ms * 10;
            var inside = dis > scale * 2;
			if(time > ms * 3 || touch2.end) {
				if(inside) {
					this.skill(hrad);
				}else if(overdue || touch2.end) {
                    this.ability(overdue? 3: 1, mrad, hrad);
                }
			}
            if(inBattle) touch2.used = true;
			if(touch2.end) delete this.touch2;
			ctx.lineWidth = scale * .125;
			ctx.beginPath();
            ctx.arc(touch2.sx, touch2.sy, scale * 2, 0, PI2);
            ctx.strokeStyle = inside? this.color2: this.color;
            ctx.stroke();
			ctx.lineWidth = scale * .25;
			ctx.beginPath();
			ctx.strokeStyle = this.color2;
			ctx.moveTo(touch2.sx, touch2.sy);
			ctx.lineTo(touch2.x, touch2.y);
			ctx.moveTo(mx, my);
			ctx.lineTo(mx + touch2.x - touch2.sx, my + touch2.y - touch2.sy);
			ctx.stroke();
		}
	}
    pad() {
        var pads = navigator.getGamepads?.();
        var pad = pads?.[gamepads[this.id]];
        
        if(!pad) return;

        var x = dead(pad.axes[0], 1);
        var y = dead(pad.axes[1], 1);

        var dis = dist(x, y);
        var rad = atan(y, x);
        if(dis > 1) dis = 1;
        if(this.mrad === false) {
            if(dis > 0.1) {
                this.mrad = rad;
                this.go(rad, dis);
            }
        }

        var x = pad.axes[2];
        var y = pad.axes[3];

        var dis2 = dist(x, y);

        var mx = (this.x + this.s * .5) * scale;
        var my = (this.y + this.s * .5) * scale;

        ctx.lineWidth = scale * .25;
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(mx + x * scale * 1.5, my + y * scale * 1.5);

        var RT = dead(pad.buttons[7].value);
        if(dis2 && RT) {
            this.skill(atan(y, x));
            ctx.strokeStyle = this.color2;
        }else ctx.strokeStyle = this.color;
        ctx.stroke();        

        var A = pad.buttons[0].value;
        var LT = dead(pad.buttons[6].value);
        if(A || LT) {
            if(this.ab) this.ab = 3;
            else this.ab = 1;
            this.ability(this.ab, dis? rad: dis, atan(y, x));
        }else this.ab = 0;
    }
    update() {
        super.update();
        if(this.dead == DEAD) this.explode();
        else if(this.dead >= DEAD) {
            this.team = 0;
            this.hits = 0;
            this.coll = 0;
            for(let main of mains) {
                if(!main.dead && (main.team & this.nteam) && Entity.isTouching(main, this)) {
                    this.revive();
                }
            }
        }
    }
    revive() {
        this.hp = this.xHp;
        this.dead = 0;
        this.team = TEAM.GOOD;
        this.hits = TEAM.BAD;
        this.coll = TEAM.BAD;
    }
    get alpha() {
        if(this.dead >= DEAD) return multi? 0.1: 0;
        else return super.alpha;
    }
    onXp() {}
    nextLevel() {}
    explode() {
        // var a = this.xp/10;
        // var o = random(PI);
        // for(let i = 0; i < a; i++) {
        //     var blob = new Xp;
        //     blob.spd = random()/15;
        //     Xp.position(blob, i * PI2/a + o, this);
        //     exp.push(blob);
        // }
    }
    xp = 0;
    r = 0;
    tick() {
        this.mrad = false;
        var mx = 0;
        var my = 0;
        // var multi = mains[1];
        if(this.id == gamepads.length) {
            if(keys.has("KeyW")) --my;
            if(keys.has("KeyS")) ++my;
            if(keys.has("KeyA")) --mx;
            if(keys.has("KeyD")) ++mx;
            if(mx || my) {
                var rad = atan(my, mx);
                // this.r = rad;
                this.go(rad);
                var mrad = rad;
                this.mrad = mrad;
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
            }else if(keys.has("ShiftLeft")) {
                this.ability(keys.get("ShiftLeft"), mrad, srad);
                keys.set("ShiftLeft", 2);
            }else if(keys.has("Space")) {
                this.ability(keys.get("Space"), mrad, srad);
                keys.set("Space", 2);
            }
            this.touchv2();
        }
        this.pad();
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
    desc = [
        "Well rounded shooter",
        "Skill: Shoot",
        "Ability: Dodge"
    ];
    cols = [
        "#55f",
        "#aaf",
        "#aaf"
    ];
    color = "#55f";
    shape = shapes.get("square.4");
    color2 = "#aaf";
    shape2 = shapes.get("square.4");
    constructor(id) {
        super(id);
        if(multi) {
            var {hue, safe} = this;
            hue += safe * .5;
            this.color = `hsl(${hue}, 100%, 50%)`;
            this.color2 = `hsl(${hue}, 100%, 80%)`;
        }
        this.ccolor = this.color;
        this.ncolor = this.color2;
        this.nteam = this.team;
        this.nopp = this.hits;
        // if(id == 1) {
        //     this.color = "#5ff";
        //     this.color2 = "#aff"; 
        //     this.ccolor = "#faf";
        // }
    }
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
            this.color2 = this.ccolor;
        }else if(this.lastSkill) {
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
        }else{
            this.color2 = this.ncolor;
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
        }
    }
    skill(rad) {
        if(!this.lastShot) {
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
            enemies.push(new Bullet(this, rad));
            this.lastShot = 10;
            sounds.Shoot.play();
        }
    }
    ability(key, mrad, srad) {
        if(!this.lastSkill) {
            var {spd} = this;
            this.spd *= 15;
            if(!isNaN(mrad)) {
                this.move(mrad);
            }
            sounds.Dash.play();
            this.spd = spd;
            this.lastSkill = 50;
        }
    }
}
class TheDasher extends Player{
    desc = [
        "Charge into enemies and explode!",
        "Just don't get caught unprepared",
        "Skill: Ram",
        "Ability: Explode"
    ];
    cols = [
        "#f70",
        "#f70",
        "#fff",
        "#fff"
    ]
    shape2 = shapes.get("arrow-box");
    color = "#f70";
    color2 = "#fff";
    color3 = "#f70";
    constructor(id) {
        super(id);
        if(id == 1) this.color = "#ff0";
        if(multi) {
            var {hue, safe} = this;
            // hue -= safe;
            this.color = `hsl(${hue}, 100%, 60%)`;
            // this.color2 = `hsl(${hue}, 100%, 80%)`;
            this.hue = hue;
        }else{
            this.hue = 28;
        }
        this.icolor = this.color;
    }
    // atk = 2;
    hit(what) {
        super.hit(what);
        // if(this.lastSkill) {
        //     this.hitd += 5;
        // }
        if(this.god && what instanceof Player) {
            if(what.hp <= 0) {
                let oHit = what.hit;
                let oExp = what.explode;
                // let oRev = what.revive;

                let oTem = what.team;
                let oOpp = what.hits;
                let oCol = what.coll;
                let oClr = what.color;
                let oCl2 = what.color2;
                let oCl3 = what.color3;
                let oMas = what.m;
                let oTCo = what.teamColor;

                what.team = this.team;
                what.hits = this.hits;
                what.coll = this.coll;
                what.color = this.color;
                what.color2 = this.color2;
                what.color3 = this.color3;
                what.teamColor = this.teamColor;

                // what.dead = -10;
                what.hit = this.hit;
                what.m = this.m;
                what.god = true;

                what.explode = () => {
                    for(let main of mains) {
                        if(main.team & this.team) {
                            main.onXp();
                        }
                    }
                    sounds.Explode.play();
                    var u = PI2/8;
                    for(let i = 0; i < PI2; i += u) {
                        var blob = new Bullet(what, i);
                        blob.team = this.team | TEAM.BULLET;
                        blob.hits = this.hits;
                        blob.teamColor = this.teamColor;
                        blob.coll = 0;
                        blob.time = 10;
                        blob.spd /= 4;
                        enemies.push(blob);
                    }
                    what.team = oTem;
                    what.hits = oOpp;
                    what.coll = oCol;
                    what.color = oClr;
                    what.color2 = oCl2;
                    what.color3 = oCl3;
                    what.teamColor = oTCo;
                    what.hit = oHit;
                    what.m = oMas;
                    what.god = false;
                    what.explode = oExp;
                }
                // what.revive = () => {
                //     what.revive = oRev;
                //     what.explode = oExp;
                //     what.revive();
                // }
            }
        }else if(this.god && what.team & TEAM.BULLET) {
            what.team = this.team;
            what.hits = this.hits;
            what.coll = this.coll;
            what.color = this.color;
            what.color2 = this.color2;
            what.color3 = this.color3;
            what.atk = 0.5;
            what.teamColor = this.teamColor;
        }else if(what.hp <= 0 && this.god) {
            what.team = this.team;
            what.important = true;
            what.hits = this.hits;
            what.coll = this.coll;
            what.color = this.color;
            what.color2 = this.color2;
            what.color3 = this.color3;
            what.teamColor = this.teamColor;
            // what.dead = -10;
            what.hit = this.hit;
            what.m = this.m;
            what.god = true;
            
            what.explode = () => {
                // var a = what.xp;
                // var o = random(PI);
                // for(let i = 0; i < a; i++) {
                //     var blob = new Xp;
                //     Xp.position(blob, i * PI2/a + o, what);
                //     enemies.push(blob);
                // }
                for(let main of mains) {
                    if(main.team & this.team) {
                        main.onXp();
                    }
                }
                sounds.Explode.play();
                var u = PI2/8;
                for(let i = 0; i < PI2; i += u) {
                    var blob = new Bullet(what, i);
                    blob.team = this.team | TEAM.BULLET;
                    blob.hits = this.hits;
                    blob.teamColor = this.teamColor;
                    blob.coll = 0;
                    blob.time = 10;
                    blob.spd /= 4;
                    enemies.push(blob);
                }
            }
            // var {vx, vy} = this;
            // for(let enemy of enemies) {
            //     if(this.hits & enemy.team) {
            //         if(Entity.distance(this, enemy) < 7) {
            //             enemy.attacked({enemy: this, atk: this.atk});
            //         }
            //         if(Entity.distance(this, enemy) < 10) {
            //             Entity.collide(this, enemy);
            //         }
            //     }
            //     this.vx = vx;
            //     this.vy = vy;
            // }
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
            this.nocoll = TEAM.BULLET;
            this.color = this.icolor;
            // this.color2 = "#000";
            this.m = 5;
            if(this.s == 1) {
                this.x -= .25;
                this.y -= .25;
                this.s = 1.5;
            }
        }else if(this.lastSkill) {
            this.god = false;
            this.nocoll = 0;
            // this.color2 = "#fff";
            this.color = `hsl(${this.hue}, ${(this.lastSkill % 10) * 10}%, 50%)`;
            this.m = 1;
            if(this.s == 1.5) {
                this.x += .25;
                this.y += .25;
                this.s = 1;
            }
        }else{
            this.color = this.icolor;
            this.god = false;
            this.nocoll = 0;
            // this.color2 = "#fff";
            this.m = 1;
        }
        if(this.lastAbility) --this.lastAbility;
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
            sounds.Dash.play();
        }
    }
    lastAbility = 0;
    ability(key, mrad, srad) {
        if(!this.lastAbility) {
            var u = PI/8;
            var obj = new Bullet(this);
            obj.coll = TEAM.BAD;
            for(let i = 0; i < PI2; i += u) {
                var blob = new Bullet(this, i);
                blob.coll = this.opp;
                blob.hits = this.opp | TEAM.BULLET;
                blob.hit = what => obj.hit(what);
                blob.time = 1;
                blob.spd /= 2;
                // blob.atk = 0.5;
                blob.m = 50;
                enemies.push(blob);
            }
            sounds.Explode.play();
            this.lastAbility = 50;
        }
    }
    atk = 3;
}
class Minion extends Brain{
    color = "#f5a";
    shape = shapes.get("square-2");
    wander = 0.5;
    tick() {
        super.tick();
        this.r = atan(this.vy, this.vx);
    }
    register(enemy) {
        // if(enemy instanceof Chaser) return;
        // if(enemy instanceof Bullet) return;
        if(!(this.hits & enemy.team)) return;
        if(!(enemy.team & TEAM.BULLET)) {
            var dis = Entity.distance(this, enemy);
            var d = 5;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(enemy, this);
                n **= .3;
                this.brainPoints.push([rad, n * 3]);
            }
        }else{
            var dis = Entity.distance(this, enemy);
            var d = 15;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(this, enemy);
                n **= 2;
                this.brainPoints.push([rad, n * 2]);
            }
        }
    }
}
var minionSelected = 0;
class SummonerClass extends Player{
    constructor(id) {
        super(id);
        this.selected = minionSelected;
        this.selected %= this.summons.length;
    }
    onXp() {
        var pets = floor(this.p/5);
        if(pets < (this.maxSum - this.alive.length)) {
            this.p += 1;
        }
    }
    register(what) {
        for(let pet of this.pets) {
            pet.register(what);
        }
    }
    getPet() {
        this.pet = this.summon();
    }
    maxSum = 10;
    summon() {
        var summon = new (this.summons[this.selected]);
        Bullet.position(summon, random(PI2), this);
        summon.s = .75;
        summon.color = this.color;
        summon.color2 = this.color2;
        summon.teamColor = this.teamColor;
        summon.team = this.team;
        summon.hits = this.hits;
        summon.coll = this.hits | this.team;
        summon.hp = .5;
        summon.parent = this;
        return summon;
    }
    tick() {
        super.tick();
        var pets = floor(this.p/5);
        if(pets < 0) pets = 0;
        if(pets > this.maxSum) pets = this.maxSum;
        if(this.pets.length < pets) {
            var pet = this.summon();
            pet.s = .5;
            this.pets.push(pet);
        }else this.pets.length = pets;
        this.r = 0;
        this.alive = this.alive.filter(blob => !blob.dead);
        if(pets < (this.maxSum - this.alive.length)) {
            this.p += this.rec;
        }
    }
    rec = 0.1;
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
            minionSelected = this.selected;
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
            blob.hp = blob.xHp;
            this.p -= 5;
            this.lastShot = 7;
            this.summonSound?.play();
        }
    }
    nextLevel() {
        for(let blob of this.alive) {
            blob.dead = DEAD;
        }
        this.p = 20;
    }
    p = 0;
    selected = 0;
    summons = [Mover];
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
            // this.moveTo(player);
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
    atk = 1.5;
    nohit = TEAM.BULLET;
    spd = 0.1;
    friction = 0.99;
    color = "#0f0";
    shape = shapes.get("square.4");
    color2 = "#ff0";
    shape2 = shapes.get("square-ring");
    hp = 1;
    xp = 0;
    m = 10;
}
class TheSummoner extends SummonerClass{
    desc = [
        "Distract the enemy to let your",
        "summons destroy them, or hide",
        "in a corner while your summons",
        "distract your enemies and protect you",
        "Skill: Summon",
        "Ability: Switch summon",
        "Passive: Standing still will cloak you",
        "Passive: Moving will cloak your summons"
    ];
    cols = [
        "#b2f",
        "#b2f",
        "#b2f",
        "#b2f",
        "#f82",
        "#f82",
        "#f82",
        "#f82"
    ]
    constructor(id) {
        super(id);
        this.ncolor = "#b2f";
        this.ncolor2 = "#425";
        this.ccolor = "#f82";
        this.ccolor2 = "#532";
        // if(id == 1) {
        //     this.ncolor = "#42f"
        //     this.ncolor2 = "#225";
        //     this.ccolor = "#ff2";
        //     this.ccolor2 = "#552";
        // }
        if(multi) {
            var {hue, safe} = this;
            hue -= safe;
            this.ccolor = `hsl(${hue}, 100%, 70%)`;
            this.ccolor2 = `hsl(${hue}, 100%, 90%)`
            hue += safe * 2;
            this.ncolor = `hsl(${hue}, 100%, 40%)`;
            this.ncolor2 = `hsl(${hue}, 100%, 20%)`
        }
        this.color = this.ncolor;
        this.color2 = this.ccolor;
        this.nteam = this.team;
    }
    onXp() {
        var pets = floor(this.p/5);
        if(pets < (this.maxSum - this.alive.length)) {
            this.p += 1.5;
        }
    }
    shape = shapes.get("bullet");
    shape2 = shapes.get("square.4");
    summonSound = sounds.Summon;
    summons = [Chill, Walker, Mover, Minion];
    cloak = 0;
    rec = 0.05;
    tickSkill() {
        if(this.mrad === false) {
            if(this.cloak > 0) {
                --this.cloak;
            }
        }else{
            if(this.cloak < 40) {
                ++this.cloak;
            }
        }
        if(this.cloak > 30) {
            for(let blob of this.alive) {
                blob.color = this.ncolor;
                blob.color2 = this.ncolor2;
                blob.team = this.nteam | TEAM.BULLET;
            }
            this.color = this.ccolor;
            this.color2 = this.ccolor2;
            this.team = this.nteam;
        }else{
            for(let blob of this.alive) {
                blob.color = this.ccolor;
                blob.color2 = this.ccolor2;
                blob.team = this.nteam;
            }
            this.team = this.nteam | TEAM.BULLET;
            this.color = this.ncolor;
            this.color2 = this.ncolor2;
        }
    }
}
class TheMagician extends SummonerClass{
    desc = [
        "Barage the enemy with your seemingly",
        "endless barage of heat seeking magic missles",
        "Skill: Fire missle",
        "Ability: Release all missles",
        "Passive: 1.2x speed",
        "Passive: Standing still will recharge",
        "your missles almost twice as fast"
    ];
    cols = [
        "#5f5",
        "#5f5",
        "#cfc",
        "#cfc",
        "#cfc",
        "#cfc",
        "#cfc"
    ]
    summons = [Tracker];
    color = "#5f5";
    color2 = "#cfc";
    rec = 0.2;
    maxSum = 5;
    shape2 = shapes.get("tophat");
    constructor(id) {
        super(id);
        // if(id == 1) {
        //     this.color = "#5ff";
        //     this.color2 = "#cff";
        // }
        if(multi) {
            var {hue, safe} = this;
            // hue += safe;
            this.color = `hsl(${hue}, 100%, 60%)`;
            this.color2 = `hsl(${hue}, 100%, 80%)`;
        }
        this.spd *= 1.2;
    }
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
        blob.team = blob.team | TEAM.BULLET;
        blob.coll = this.coll;
        blob.hp = .1;
        return blob;
    }
    onXp() {}
    nextLevel() {
        super.nextLevel();
        this.p = 0;
    }
    move(rad, mult) {
        super.move(rad, mult);
    }
    tickSkill() {
        this.rec = this.mrad === false? 0.25: 0.15;
    }
    skill(rad) {
        if(!this.lastShot && this.pets.length) {
            var blob = this.summon();
            blob.xp = 0; blob.s = .5;
            Bullet.position(blob, rad, this);
            enemies.push(blob);
            this.alive.push(blob);
            blob.inv.set(this, 10);
            var a = (blob.spd * 10);
            blob.vx = cos(rad) * a;
            blob.vy = sin(rad) * a;
            blob.hp = 1;
            this.p -= 5;
            this.lastShot = 5;
            sounds.Magic.play();
        }
    }
    ability() {
        for(let pet of this.pets) {
            this.alive.push(pet);
            enemies.push(pet);
            this.p -= 5;
            pet.hp = 1;
        }
        if(this.pets.length == 1) sounds.Magic.play();
        else if(this.pets.length) sounds.BigMagic.play();
        this.pets = [];
    }
    p = 0;
}
class TheReformed extends TheGunner{
    desc = [
        "Get up and personal with this ex-mafia",
        "member: high risk, high reward",
        "Skill: Shotgun",
        "Ability: Reload",
        "Passive: 1.5x speed"
    ];
    cols = [
        "#ffa",
        "#ffa",
        "#ff0",
        "#f57",
        "#ff0"
    ];
    shape = shapes.get("square");
    shape2 = shapes.get("shades");
    ishape = shapes.get("square.4")
    color = "#ffa";
    color2 = "#f57";
    icolor = "#ff0";
    constructor(id) {
        super(id);
        // if(id == 1) {
        //     this.color = "#fad";
        //     this.color2 = "#a5f";
        // }
        if(multi) {
            var {hue, safe} = this;
            hue += safe * .5;
            this.color = `hsl(${hue}, 100%, 70%)`;
            hue -= safe * 1.5;
            this.color2 = `hsl(${hue}, 100%, 40%)`;
            // this.color2 = `hsl(${hue}, 100%, 80%)`;
        }
        this.spd *= 1.5;
    }
    skill(r) {
        var u = PI/48;
        // var end = r + u * 5;
        if(!this.lastShot && this.bullets && !this.reloading) {
            --this.bullets;
            for(let i = -5; i <= 5; ++i) {
                var rad = r + i * u;
                var blob = new Bullet(this, rad);
                blob.team = TEAM.BULLET | this.team;
                blob.coll = TEAM.BULLET;
                // blob.spd;
                blob.nocoll = this.team;
                blob.m = 20;
                blob.time = 10;
                blob.atk = .25;
                enemies.push(blob);
            }
            this.lastShot = 10;
            sounds.Shotgun.play();
        }
    }
    nextLevel() {
        this.bullets = 5;
    }
    ability(key) {
        if(key == 1 && this.bullets != this.max) {
            this.reloading = true;
        }
    }
    tickSkill() {
        if(this.reloading && !this.lastShot) {
            if(this.bullets == this.max) {
                this.reloading = false;
            }else{
                this.bullets += 1;
                this.lastShot = 10;
                sounds.Reload.play();
            }
        }
    }
    
    bullets = 0;
    max = 10;
    time = 0;
    draw() {
        super.draw();
        var {bullets} = this;
        var u = PI2/this.max;
        var w = scale * .3;
        var o = this.time * PI2/128;
        var {bullets, x, y, s} = this;
        x += s/2; y += s/2;
        for(let i = 0; i < bullets; i++) {
            var rad = i * u + o;
            var c = cos(rad);
            var a = sin(rad);
            let dx = x + c * s * 1.2 - .15;
            let dy = y + a * s * 1.2 - .15;
            dx *= scale; dy *= scale;

            ctx.lineWidth = 0.2;
            ctx.zoom(dx, dy, w, w, rad);
            ctx.strokeStyle = this.reloading? (Arena? "#550": "#f00"): (this.teamColor || this.icolor);
            ctx.stroke(this.ishape);
            ctx.resetTransform();
        }
    }
    draw2() {
        var {x, y, s, r, alpha, shape2} = this;
        if(!shape2) return;
        x *= scale;
        y *= scale;
        s *= scale;

        ctx.save();
        ctx.zoom(x, y, s, s);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color2 || this.color;
        ctx.fill(shape2);
        ctx.resetTransform();
        ctx.restore();
    }
    tick() {
        super.tick();
        this.r = 0;
        ++this.time;
    }
}
class TheLucky extends TheGunner{
    desc = [
        "Happy go lucky gunner",
        "Skill: Machine gun",
        "Ability: Evade",
        "Passive: Stand still to increase accuracy"
    ];
    cols = [
        "#ff0",
        "#ffa",
        "#ffa"
    ];
    color = "#ff0";
    color2 = "#ffa";
    constructor(id) {
        super(id);
        if(multi) {
            var {hue, safe} = this;
            hue -= safe * .5;
            this.color = `hsl(${hue}, 100%, 70%)`;
            this.color2 = `hsl(${hue}, 100%, 80%)`;
        }
        this.ccolor = this.color;
        this.ncolor = this.color2;
        // this.spd *= 4;
        // this.friction *= .7;
        this.nteam = this.team;
        this.nopp = this.hits;
    }
    skill(rad) {
        if(!this.lastShot) {
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
            rad += (srand() - .5) * PI * (this.mrad === false? .2: .5);
            var blob = new Bullet(this, rad);
            blob.time = 10;
            blob.atk = .2;
            // blob.m = 1;
            blob.hp = 0.1;
            blob.team = TEAM.BULLET + TEAM.ALLY;
            blob.coll = TEAM.BULLET;
            blob.nocoll = TEAM.ALLY;
            enemies.push(blob);
            sounds.MachineGun.play();
            // this.lastShot = 1;
        }
    }
    tickSkill() {
        if(this.lastSkill > 25) {
            this.r = this.lastSkill * .5;
            this.team = 0;
            this.hits = 0;
            this.coll = 0;
            this.color2 = this.ccolor;
        }else if(this.lastSkill) {
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
        }else{
            this.color2 = this.ncolor;
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
        }
    }
    get alpha() {
        if(this.lastSkill > 25) return .4;
        return super.alpha;
    }
    ability(key, mrad, srad) {
        if(!this.lastSkill) {
            var {spd} = this;
            this.spd *= 40;
            if(!isNaN(mrad)) {
                this.move(mrad);
            }
            this.spd = spd;
            this.lastSkill = 40;
        }
    }
    // shape2 = shapes.get("big-pointer");
}
class Droid extends Turret{
    range = 12;
    mo = PI/8;
    hp = 1.1;
    xHp = 1.1;
    m = 25;
    good = true;
    shape = shapes.get("square");
    heal() {
        if(this.hp < this.xHp) {
            this.hp += 0.005;
        }
        if(this.hp > this.xHp) {
            this.hp = this.xHp;
        }
    }
    register(what) {
        if(!(what.hits & this.team)) return;
        var dis = Entity.distance(this, what);
        if(!this.player) {
            this.player = what;
            this.dis = dis;
        }else if(dis < this.dis) {
            this.player = what;
            this.dis = dis;
        }
    }
    shoot(rad) {
        if(!this.lastShot && this.alive) {
            var blob = new Bullet(this, rad);
            // blob.team = TEAM.BULLET;
            // blob.coll = TEAM.BULLET;
            blob.nocoll = this.team;
            blob.hits = blob.hits | TEAM.BULLET;
            blob.nohit = this.team;
            blob.spd *= 1.2;
            blob.time = 10;
            blob.atk = .5;
            // blob.m = 2;
            enemies.push(blob);
            this.lastShot = 10;
            sounds.Shoot.play();
            return blob;
        }
    }
    atk = .5;
    tick() {
        this.heal();
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) return;
        if(this.lastShot) --this.lastShot;
        if(Entity.distance(this, player) < this.range) {
            var obj = {...player};
            obj.x += obj.vx * 7;
            obj.y += obj.vy * 7;
            var rad = Entity.radian(obj, this);
            var dis = rDis(this.r - PI/2, rad);
            // this.r = rad + PI/2;
            // var m = this.mo;
            // if(abs(dis) < m) {
                this.r = rad + PI/2;
                this.shoot(this.r - PI/2);
            // }else this.r += sign(dis) * m;
        }
    }
    m = 0.01;
}
class Bot extends Droid{
    constructor() {
        super();
        this.brainPoints = [];
        this.rad = random(PI2);
        this.spd *= .5;
    }
    m = 1;
    // hp = 1;
    // xHp = 1;
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

        this.rad = rad;

        this.move(rad, max);
        this.crad = rad;
        this.cmax = max;
        this.lines = lines;
        this.brainPoints = [];
    }
    wander = 1;
    follow() {
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
        this.brainMove();
    }
    tick() {
        this.follow();
        this.r = atan(this.vy, this.vx);
        if(this.lastShot) --this.lastShot;
        this.heal();
        var {player} = this;
        if(player && player.dead) delete this.player;
        if(!player) return;

        if(Entity.distance(this, player) < this.range) {
            var rad = Entity.radian(player, this);
            this.shoot(rad);
        }
    }
    register(enemy) {
        // if(enemy instanceof Chaser) return;
        // if(enemy instanceof Bullet) return;
        super.register(enemy);
        // if(!(enemy.team & TEAM.BULLET) && (this.hits & enemy.team)) {
        //     var dis = Entity.distance(this, enemy);
        //     var d = 10;
        //     if(dis < d) {
        //         var n = (dis - d)/-d;
        //         var rad = Entity.radian(enemy, this);
        //         n **= 1;
        //         this.brainPoints.push([rad, n]);
        //     }
        // }else{//Run away
            // var dis = Entity.distance(this, enemy);
            // var d = 1;
            // if(dis < d) {
            //     var n = (dis - d)/-d;
            //     var rad = Entity.radian(this, enemy);
            //     n **= .5;
            //     this.brainPoints.push([rad, n * 2]);
            // }
        // }
        if(enemy.team & this.team && !(enemy.team & TEAM.BULLET)) {//Run away
            var dis = Entity.distance(this, enemy);
            var d = 7;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(this, enemy);
                n **= 3;
                this.brainPoints.push([rad, n * 2]);
            }
        }
    }
    ro = PI * .5;
    shape = shapes.get("trapoid-2");
}
class Roller extends Bot{
    shape = shapes.get("square.4");
    tick() {
        var enemy = this.parent;
        var dis = Entity.distance(this, enemy);
        {
            var rad = Entity.radian(enemy, this);
            var dis = Entity.distance(this, enemy);
            let maxDis = 5;
            let num = (maxDis - dis)/maxDis;
            num = 1 - num;
            this.brainPoints.push([rad, num * 2]);
        }
        {
            var enemy = this.player;
            if(enemy) {
                var dis = Entity.distance(this, enemy);
                if(dis > 5) {
                    var rad = Entity.radian(enemy, this);
                    this.brainPoints.push([rad, 1]);
                }
            }
        }
        super.tick();
    }
    register(what) {
        if(what.team & this.team && !(what.team & TEAM.BULLET)) {//Run away
            var dis = Entity.distance(this, what);
            var d = 7;
            if(dis < d) {
                var n = (dis - d)/-d;
                var rad = Entity.radian(this, what);
                n **= 3;
                this.brainPoints.push([rad, n * 2]);
            }
        }
        if(!(what.hits & this.team)) return;
        var dis = Entity.distance(this.parent, what);
        if(!this.player) {
            this.player = what;
            this.dis = dis;
        }else if(dis < this.dis) {
            this.player = what;
            this.dis = dis;
        }
    }
}
class TheMaster extends SummonerClass{
    desc = [
        "Tower defense?",
        "Let your bots fight for you",
        "Skill: Summon",
        "Ability: Switch summon"
    ];
    cols = [
        "#aaa",
        "#aaa",
        "#fff",
        "#fff"
    ];
    summonSound = sounds.BotSummon;
    ro = PI * .5;
    summons = [Droid, Bot, Roller];
    color = "#fff";
    color2 = "#aaa";
    constructor(id) {
        super(id);
        if(multi) {
            var {hue, safe} = this;
            // hue -= safe * .5;
            this.color = `hsl(${hue}, 100%, 85%)`;
            this.color2 = `hsl(${hue}, 50%, 70%)`;
        }
        this.icolor = this.color2;
    }
    shape = shapes.get("trapoid");
    shape2 = shapes.get("trapoid");
    onXp() {
        var pets = floor(this.p/5);
        if(pets < (this.maxSum - this.alive.length)) {
            this.p += 0.03;
        }
    }
    maxSum = 8;
    rec = 0.04;
    tickSkill() {
        for(let blob of this.alive) {
            blob.alive = true;
        }
        // if(this.noHit) --this.noHit;
    }
    nextLevel() {
        for(let blob of this.alive) {
            blob.dead = DEAD;
        }
        // this.shield = true;
        // this.color2 = this.icolor;
        this.p = 10;
    }
}
class TheHell extends TheGunner{
    constructor(id) {
        super(id);
        this.nspd = this.spd;
        this.spd = 0;
        if(multi) {
            var {hue, safe} = this;
            hue -= safe;
            this.color = `hsl(${hue}, 100%, 65%)`;
            hue += safe * 2;
            this.color2 = `hsl(${hue}, 100%, 50%)`;
        }
        this.ncolor = this.color2;
        this.nteam = this.team;
        this.nopp = this.hits;
    }
    go(rad, dis) {
        this.skill(rad + PI);
    }
    tickSkill() {
        if(this.lastShot) {
            this.color2 = this.color;
        }else{
            this.color2 = this.ncolor;
        }
    }
    skill(r) {
        var a = .5;
        var rad = r;
        var u = PI * .25 * a;
        r -= u * 1.5;
        // var end = r + u * 5;
        if(!this.lastShot) {
            // --this.bullets;
            this.team = this.nteam;
            this.hits = this.nopp;
            this.coll = this.nopp;
            var obj = new Bullet(this);
            obj.coll = TEAM.BAD;

            for(let i = 0; i < 4; ++i) {
                let rad = r + i * u;
                var blob = new Bullet(this, rad);
                // blob.coll = TEAM.BAD;
                // blob.spd *= .75;
                // blob.hp = 0;
                blob.time = 5;
                blob.hit = what => obj.hit(what);
                blob.coll = 0;
                // blob.nocoll = TEAM.BULLET;
                // blob.atk = .5;
                blob.m = 75;
                enemies.push(blob);
            }
            this.spd = this.nspd * 10;
            this.move(rad + PI);
            this.spd = 0;
            this.lastShot = 5;
            sounds.MachineGun.play();
        }
    }
    ability() {
        // var {player} = this;
        // if(player && player.dead) delete this.player;
        // if(player) {
        //     this.spd = this.nspd;
        //     this.moveTo(player);
        //     this.spd = 0;
        // }

        if(!this.lastShot) {
            var u = PI * .125;
            var obj = new Bullet(this);
            obj.coll = this.nopp;
            for(let i = 0; i < PI2; i += u) {
                var blob = new Bullet(this, i);
                blob.coll = this.nopp;
                blob.hits = this.nopp | TEAM.BULLET;
                blob.hit = what => obj.hit(what);
                blob.time = 10;
                blob.spd /= 2;
                blob.atk = 0.5;
                blob.m = 50;
                enemies.push(blob);
            }
            sounds.Explode.play();
            this.lastShot = 40;
        }
    }
    // register(what) {
    //     if(!(this.hits & what.team) || what.team & TEAM.BULLET) return;
    //     var dis = Entity.distance(this, what);
    //     if(!this.player) {
    //         this.player = what;
    //         this.dis = dis;
    //     }else if(dis < this.dis) {
    //         this.player = what;
    //         this.dis = dis;
    //     }
    // }
    color = "#f0f";
    color2 = "#ffa";
    desc = [
        "Rocketship?",
        "Go zoom with a burst of 4 bullets",
        "Skill: Burst shot",
        "Ability: Explode"
    ];
    cols = [
        "#f0f",
        "#f0f",
        "#ffa",
        "#ffa"
    ];
    shape = shapes.get("square-2");
    shape2 = shapes.get("square-ring");
}
{
    class TheSnek extends Player{
        desc = [
            "Well rounded shooter",
            "Skill: Shoot",
            "Ability: Dodge"
        ];
        cols = [
            "#55f",
            "#aaf",
            "#aaf"
        ];
        constructor(id) {
            super(id);
        }
        hit(obj) {
            super.hit(obj);
            if(obj.hp <= 0) {
                ++this.food;
            }else{
                Entity.collide(this, obj)
            }
        }
        god = true;
        coll = 0;
        tick() {
            super.tick();
            this.makeHead();
            if(this.mrad) {
                ++this.ani;
                this.ani %= 25;
            }
        }
        ani = 0;
        makeHead() {
            var d = 25 * .5;
            var c = abs(this.ani - d) * 0.02 - .25;
            // var c = 0;
            this.shape = new Path(ctx => {
                var a = PI * (0.25 + c);
                var b = PI * (1.75 - c);
                ctx.arc(.5, .5, .5, a, b);
                ctx.lineTo(.7, .5);
                ctx.closePath();
                ctx.rect(0, 0, .5, 1);
            });
        }
        body = [];
        nextLevel() {
            for(let part of this.body) {
                part.dead = DEAD;
            }
            var body = new SnekBody(this);
            this.body = [body];
            enemies.push(body);
        }
    }
    class SnekBody extends Enemy{
        constructor(parent) {
            super();
            this.parent = parent;
            Xp.position(this, random(PI2), parent);
        }
        tick() {
            var head = this.getFollow();
            var loc = {...head};
            // loc.x += this.vx * 2;
            // loc.y += this.vy * 2;
            var c = cos(head.r);
            var s = sin(head.r);
            loc.x += c * -5;
            loc.y += s * -5;
            var dis = Entity.distance(this, loc);
            if(dis > 1.5) this.moveTo(loc);
            this.shape = this.tail?
                shapes.get("square"):
                shapes.get("snake-tail");
            head.tail = true;
            this.charging = head.charging;
            if(head.dead) {
                this.rad = this.r;
                delete this.head;
            }
            this.r = atan(this.vy, this.vx);
        }
        getFollow() {
            return this.parent;
        }
        team = TEAM.GOOD;
        hits = TEAM.BAD;
        // coll = 0;
        shape = shapes.get("snake-tail");
        color = "#fff";
    }
}
var main;
var mains = [];
var bosses = new Set;
var enemies;
var exp;
// var bullets;
var scale = 40;
const sf = 1/25;
var game = {
    width: 0,
    height: 0
};
var saveData;
try{
    saveData = JSON.parse(localStorage.getItem("data")) || {};
}catch(err) {
    saveData = {};
    failedSave = true
    console.log("failed to load savedata");
}
var failedSave;
if(failedSave && Enviroment == env.SOLOLEARN) {
    saveData = {
        levelE: 25,
        level: 25
    };
}
saveData.save = function() {try{
    localStorage.setItem("data", JSON.stringify(saveData));
}catch(err) {
    if(!failedSave) {
        console.log("failed to save savedata");
    }
}};
onload = () => {
    try{
    document.body.appendChild(canvas);
    onresize();
    mainMenu.load();
    }catch(err) {console.error(err); console.log(enemies)}
    update();
};
var Arena;
//Main Menu Code
{
    let menu = 0;
    let players = [];
    let plasel = [];
    let selLvl = 0;
    let lvlMax = 0;
    let menus = 2;
    let levelButton = new Button;
    let nextButton = new Button;
    let lastButton = new Button;
    let startButton = new Button;
    let swapButton = new Button;
    var multi = 0;
    let teams = [0, 1, 2, 3];
    /**@param {Button} button*/
    function buttonClick(button) {
        for(let touch of touches.all) {
            if(touch.up && !touch.used && button.includes(touch)) {
                touch.used = true;
                return true;
            }
        }
    }
    let padTrackers = [];
    let PadTracker = class PadTracker{
        constructor(id) {
            this.id = id;
        }
        button = new Map;
        update() {
            var pads = navigator.getGamepads?.();
            var pad = pads?.[gamepads[this.id]];
            if(!pad) return;

            for(let i in pad.buttons) {
                let button = pad.buttons[i];
                if(button.value) {
                    if(this.button.has(i)) {
                        this.button.set(i, 3);
                    }else{
                        this.button.set(i, 1);
                    }
                }else if(this.button.has(i)) {
                    this.button.delete(i);
                    // console.log(i);
                }
            }
        }
        use(button) {
            if(this.button.get(button) == 1) {
                return this.button.set(button, 2);
            }
        }
    };
    function mainMenu() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, game.width, game.height);
        var h = game.height/10;
        var i = 0;
        var s = h * 1.2;
        var x = (game.width - s)/2;
        var y = game.height/100;
        ctx.fillStyle = "#ff5";
        // if(menu == 0) {
        //     ctx.fillRect(x, y, s, s);
        // }
        var swap = false;
        for(let n = 0; n <= multi; n++) {
            let i = 0;
            for(let blob of players[n]) {
                var s = h/scale;
                var x = (game.w - s)/2 + s * (i - plasel[n]) * 1.5;
                var y = game.h/50;
                y += s * 1.3 * n;
                if(i != plasel[n]) {
                    swapButton.resize(x * scale, y * scale, s * scale, s * scale);
                    swapButton.draw("purple");
                    if(buttonClick(swapButton)) {
                        swap = i;
                    }
                    x += .25 * s;
                    y += .25 * s;
                    s *= .5;
                }else{
                    startButton.resize(x * scale, y * scale, s * scale, s * scale);
                    startButton.draw("blue");
                }
                blob.drawWith({x, y, s});
                i += 1;
            }
        }
        if(swap !== false) plasel = swap;
        s = h/scale;
        var y = game.h/50;
        if(multi) y += s * 1.3 * multi;
        var text = levelName(selLvl + 1);
        ctx.font = `${h}px Arial`;
        var {width} = ctx.measureText(text);
        var x = (game.width - width)/2;
        y += s * 1.25; y *= scale;
        ctx.fillStyle = expert? "#f0d": "#fff";
        ctx.strokeStyle = expert? "#f0d": "#fff";
        levelButton.resize(x, y + h * .2, width, h);
        ctx.fillText(text, x, y + h);
        levelButton.draw("yellow");
        var by = y;
        s *= scale;
        y += s/5;
        x -= s/5;
        {// Level arrows
            var b = 1;
            if(selLvl > 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + s);
                ctx.lineTo(x-s, y+s/2);
                ctx.closePath();
                ctx.lineWidth = 2;
                if(menu == b) ctx.fill();
                else ctx.stroke();
            }
            lastButton.resize(x - s, y, s, s);
            lastButton.draw("red");
            x += width + s/2 - s/10;
            if(selLvl < lvlMax) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + s);
                ctx.lineTo(x+s, y+s/2);
                ctx.closePath();
                ctx.lineWidth = 2;
                if(menu == b) ctx.fill();
                else ctx.stroke();
            }
            nextButton.resize(x, y, s, s);
            nextButton.draw("green");
        }
        if(!multi) {// Draw text
            let main = players[0][plasel[0]];
            let desc = main.desc;
            let cols = main.cols;
            by += h * 1.5;
            ctx.font = `${h * .5}px Arial`;
            for(let i = 0; i < desc.length; i) {
                let col = cols[i];
                let line = desc[i++];
                let y = by + h * 0.6 * i;
                let {width} = ctx.measureText(line);
                let x = (game.width - width)/2;
                ctx.fillStyle = col;
                ctx.fillText(line, x, y);
            }
        }
        ctx.beginPath();
        touch = undefined;
        if(keys.use("Backspace") || buttonClick(levelButton)) {
            selLvl = 0;
            expert = !expert;
            if(expert) lvlMax = saveData.levelE;
            else lvlMax = saveData.level;
        }
        if(keys.multi("ArrowRight")) {
            if(menu == 0) {
                if(gamepads.length in plasel) {
                    ++plasel[gamepads.length];
                }else ++selLvl;
            }
            if(menu == 1) ++selLvl;
        }
        if(keys.multi("ArrowLeft")) {
            if(menu == 0) {
                if(gamepads.length in plasel) {
                    --plasel[gamepads.length];
                }else --selLvl;
            }
            if(menu == 1) --selLvl;
        }
        let changeTeam;
        if(keys.use("KeyD")) {
            if(gamepads.length in teams) {
                ++teams[gamepads.length];
                changeTeam = true;
            }
        }
        if(keys.use("KeyA")) {//Left Bumper
            if(gamepads.length in teams) {
                --teams[gamepads.length];
                changeTeam = true;
            }
        }
        if(gamepads.length in teams) {
            teams[gamepads.length] += teams.length;
            teams[gamepads.length] %= teams.length;
        }
        if(keys.use("ShiftRight")) {
            ++multi;
            mainMenu.load();
        }
        if(multi > gamepads.length) {
            multi = 0;
            mainMenu.load();
        }
        while(padTrackers.length < gamepads.length) {
            padTrackers.push(new PadTracker(padTrackers.length));
        }
        for(let pad of padTrackers) {
            pad.update();
            if(pad.use("15")) {//Right D-Pad
                ++plasel[pad.id];
            }
            if(pad.use("14")) {//Left  D-Pad
                --plasel[pad.id];
            }
            if(pad.use("5")) {//Right Bumper
                ++teams[pad.id];
                changeTeam = true;
            }
            if(pad.use("4")) {//Left Bumper
                --teams[pad.id];
                changeTeam = true;
            }
            teams[i] += teams.length;
            teams[i] %= teams.length;
        }
        if(changeTeam) mainMenu.load();
        if(buttonClick(nextButton)) ++selLvl;
        if(buttonClick(lastButton)) --selLvl;
        if(keys.use("ArrowUp")) --menu;
        if(keys.use("ArrowDown")) ++menu;
        for(let i in plasel) {
            plasel[i] += players[0].length;
            plasel[i] %= players[0].length;
        }
        if(!lvlMax) {
            lvlMax = 0;
        }
        // selLvl += lvlMax + 1;
        if(selLvl == -2 && !multi) selLvl = lvlMax;
        if(selLvl == -3) selLvl = lvlMax;
        selLvl %= lvlMax + 1;
        // if(multi) menus = 3;
        // else menus = 2;
        // selLvl = 15;
        menu += menus;
        menu %= menus;
        if(Arena && selLvl != -2) {
            Arena = false;
            mainMenu.load();
        }else if(!Arena && selLvl == -2) {
            Arena = true;
            mainMenu.load();
        }
        if(keys.use("Enter") || buttonClick(startButton) || (padTrackers[0]?.use("0"))) {
            mainMenu.active = false;
            level = selLvl + 1;
            restart();
            if(selLvl == -1) {
                Survival = true;
            }else{
                Survival = false;
            }
            if(selLvl == -2) {
                Arena = true;
                level = -1;
            }else{
                Arena = false;
            }
            if(mobile) canvas.requestFullscreen().catch(a => 0);
        }
        for(let touch of touches.all) {
            if(touch.end) touch.used = true;
        }
        if(keys.use("Escape") && (keys.has("ControlLeft"))) {
            keys.clear();
            if(confirm("Are you sure you want to reset?")) {
                saveData.level = 0;
                saveData.levelE = 0;
                saveData.save();
            }
        }
    }
    mainMenu.spawn = () => {
        mainMenu.load();
        mainMenu.active = false;
        // main = players[plasel];
        // mains = [main];
        // if(multi) {
        //     mains.push(players2[pl2sel]);
        // }
        main = players[0][plasel[0]];
        mains = [];
        for(let n = 0; n <= multi; n++) {
            mains.push(players[n][plasel[n]]);
        }
        exp = [];
    }
    mainMenu.load = () => {
        mainMenu.active = true;
        if(expert) lvlMax = saveData.levelE;
        else lvlMax = saveData.level;
        players = [];
        for(let i = 0; i <= multi; i++) {
            let arr = [new TheGunner(i)];
            if(saveData.level >= 5) {
                arr.push(new TheDasher(i));
            }
            if(saveData.level >= 10) {
                arr.push(new TheSummoner(i));
            }
            if(saveData.levelE >= 10) {
                arr.push(new TheMagician(i));
            }
            if(saveData.level >= 15) {
                arr.push(new TheReformed(i));
            }
            if(saveData.level >= 20) {
                arr.push(new TheLucky(i));
            }
            if(saveData.levelE >= 20) {
                arr.push(new TheMaster(i));
            }
            if(saveData.level >= 25) {
                arr.push(new TheHell(i));
            }
            if(!plasel[i]) plasel[i] = 0;
            if(Arena) {
                let team = teams[i];
                let teamCol = teamcols[team];
                // let teamCl2 = teamcol2[team];

                for(let main of arr) {
                    main.teamColor = teamCol;
                    // main.teamColor2 = teamCl2;
                    main.team = Teams[team];
                    main.hits = ALLTEAMS - Teams[team];
                    main.coll = ALLTEAMS - Teams[team];
                    main.nteam = Teams[team];
                    main.nopp = ALLTEAMS - Teams[team];
                }
            }
            players.push(arr);
        }
    };
    let teamcols = [
        "#f00",
        "#7f0",
        "#0ff",
        "#70f"
    ];
    let Teams = [
        TEAM.RED,
        TEAM.GREEN,
        TEAM.BLUE,
        TEAM.PURPLE
    ];
    let ALLTEAMS = TEAM.RED + TEAM.GREEN + TEAM.BLUE + TEAM.PURPLE;
}

var level, expert, score;
function restart() {
    onresize();
    score = 0;
    mainMenu.spawn();
    // console.log(mains);
    enemies = [...mains];
    if(!exp) exp = [];
    if(level) level -= 1;
    else level = 0;
    if(Survival) {
        level = 0;
    }
    if(Arena) {
        for(let main of mains) {
            main.arenaSpawn();
            main.xHp = 5;
            main.hp  = 5;
            bosses.add(main);
        }
    }
    background.recolor();
    background.draw();
}
onresize = () => {
    game.width = innerWidth;
    game.height = innerHeight;

    var mult = multi + 1;
    mult **= .75;

    scale = round(sf * (game.width * game.height/mult) ** .5);

    game.w = game.width/scale;
    game.h = game.height/scale;

    canvas.width = game.width;
    canvas.height = game.height;

    background.canvas.width = game.width;
    background.canvas.height = game.height;
    background.overlay.width = game.width;
    background.overlay.height = game.height;

    if(enemies && enemies.length) {
        background.draw();
    }
};
var keys = new (class Keys extends Map {
    use(code) {
        return this.get(code) == 1 && this.set(code, 2);
    }
    multi(code) {
        return this.get(code) & 1 && this.set(code, 2);
    }
});
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
    5: Dasher,
    10: Summoner,
    15: MafiaInvasion,
    20: Squish,
    25: BulletHell
};
var Survival;
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
    if(expert) txt += " EX";
    if(level in boss) {
        // var n = ceil(level/10);
        var event = boss[level];
        txt = `${event.type}${expert? " EX": ""}: ${event.name}`
    }
    if(level == 0) return "Survival" + (expert? " EX": "");
    if(Survival) {
        var txt = `Wave ${level}`;
        if(expert) txt += " EX";
        return txt;
    }
    if(level == -1) {
        var txt = "Arena";
        if(expert) txt += " (No Powerups)";
        return txt;
    }
    return txt;
}
{
    let leaveButton = new Button;
    let restartButton = new Button;
    let TIME = 0;
    var update = async function() {
        while(true) {
            await frame();
            try{
            if(mainMenu.active) {
                mainMenu();
                continue;
            }
            // ctx.fillStyle = "#000";
            // // ctx.shadowBlur = 0;
            // ctx.fillRect(0, 0, game.width, game.height);
            ctx.drawImage(background.canvas, 0, 0);
            ctx.drawImage(background.overlay, 0, 0);
            var i = 0;
            if(Arena) {
                var len = bosses.size;
                bosses.forEach(blob => {
                    var l = 5;
                    var w = (game.width * 6/8)/len;
                    var x = (game.width - w * len * 1.2)/2;
                    x += w * i * 1.2;
                    var h = scale;
                    var y = game.height - 1.2 * h - l/2;
                    ctx.strokeStyle = blob.teamColor;
                    ctx.fillStyle = blob.color2 || blob.color;
                    ctx.lineWidth = l;
                    var hp = blob.hp;
                    if(hp < 0) hp = 0;
                    ctx.fillRect(x, y, w * (hp/blob.xHp), h);
                    if(blob.hp2) {
                        var hp = blob.hp2;
                        if(hp < 0) hp = 0;
                        ctx.fillStyle = blob.color3 || blob.color2 || blob.color;
                        ctx.fillRect(x, y, w * (hp/blob.xHp), h);
                    }
                    ctx.strokeRect(x, y, w, h);
                    var s = 1 + 5/scale;
                    blob.drawWith({x: x/scale - .5, y: y/scale - (s - 1)/2, s, r: 0, alpha: 1});
                    if(!enemies.includes(blob)) {
                        bosses.delete(blob);
                    }
                    ++i;
                });
            }else{
                bosses.forEach(blob => {
                    var l = 5;
                    var w = game.width * 5/8;
                    var x = (game.width - w)/2;
                    var h = scale;
                    var y = game.height - (i * 1.5 + 1) * h - l/2;
                    ctx.strokeStyle = blob.color;
                    ctx.fillStyle = blob.color2 || blob.color;
                    ctx.lineWidth = l;
                    var hp = blob.hp;
                    if(hp < 0) hp = 0;
                    ctx.fillRect(x, y, w * (hp/blob.xHp), h);
                    if(blob.hp2) {
                        var hp = blob.hp2;
                        if(hp < 0) hp = 0;
                        ctx.fillStyle = blob.color3 || blob.color2 || blob.color;
                        ctx.fillRect(x, y, w * (hp/blob.xHp), h);
                    }
                    ctx.strokeRect(x, y, w, h);
                    var s = 1 + 5/scale;
                    blob.drawWith({x: x/scale - .5, y: y/scale - (s - 1)/2, s, r: 0, alpha: 1});
                    if(!enemies.includes(blob)) {
                        bosses.delete(blob);
                    }
                    ++i;
                });
            }
            var nxp = [];
            for(let xp of exp) {
                xp.update();
                xp.draw();
                if(xp.dead < DEAD) {
                    nxp.push(xp);
                }
            }
            exp = nxp;
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
                        if(coll) {
                            Entity.collide(blob, them);
                            // if(blob.vx || blob.vy || them.vx || them.vy) {
                            //     sounds.Wall.play();
                            // }
                        }
                        if(hits) {
                            blob.hit(them);
                            them.hit(blob);
                        }
                    }
                }
            }
            if(TIME++ % 50 == 0) {
                background.shadow();
            }
            var txt = levelName(level);
            ctx.font = `${scale}px Arial`;
            ctx.fillStyle = expert? "#f0d": "#fff";
            ctx.fillText(txt, 0, scale * .9);

            var len = ctx.measureText("Level A").width;
            var txt = `Score: ${score}`;
            ctx.fillText(txt, game.width - ctx.measureText(txt).width, scale * .9);


            var arr = enemies.filter(blob => {
                return (blob.team & TEAM.BAD && !(blob.team & TEAM.BULLET));
            });

            var txt = `Enemies: ${arr.length}`;
            ctx.font = `${scale}px Arial`;
            ctx.fillStyle = "#ff0";
            ctx.fillText(txt, game.width - ctx.measureText(txt).width, scale * 2);

            if(Survival) {
                var boss = level % 5 == 0;
                var alltime = (boss? 1000: 500);
                var timeLeft = alltime - TIME;

                if(timeLeft < 0) timeLeft = 0;
                txt = `Time: ${timeLeft}`;

                update.timeLeft = timeLeft;

                if(timeLeft > 100) ctx.fillStyle = "#33c";
                else ctx.fillStyle = "#c33";
                ctx.fillText(txt, 0, scale * 2);

                if(level == 0) {
                    for(let main of mains) {
                        main.nextLevel();
                    }
                    timeLeft = 0;
                }
            }

            let a = [];
            enemies = enemies.filter(blob => {
                if(blob.dead < DEAD || (blob instanceof Player)) return true;
                else a.push(blob);
            });
            a.forEach(blob => blob.explode());

            restartButton.resize(0, 0, innerWidth, innerHeight);
            restartButton.draw("yellow");

            leaveButton.resize(0, 0, len, len);
            leaveButton.draw("red");
            var pads = navigator.getGamepads?.();
            if(pads) {
                var pad = pads[gamepads[0]];
                var A_button = pad?.buttons[0].value;
                var B_button = pad?.buttons[1].value;
                var X_button = pad?.buttons[2].value;
                var Y_button = pad?.buttons[3].value;
            }
            var allDead = mains[0].dead && (mains[1]? mains[1].dead: true);
            if(keys.use("Backspace") || buttonClick(leaveButton) || B_button) {
                mainMenu.load();
                Survival = false;
            }else if((allDead && (buttonClick(restartButton) || keys.use("Enter") || A_button || X_button)) || Y_button) {
                restart();
            }

            // if(keys.use("Enter")) console.log(enemies);
            if(keys.use("Minus")) {
                --volumeLevel;
                if(volumeLevel < 0) volumeLevel = 0;
                sounds.editVolume(volumeLevel * .1);
            }
            if(keys.use("Equal")) {
                ++volumeLevel;
                if(volumeLevel > 10) volumeLevel = 10;
                sounds.editVolume(volumeLevel * .1);
            }

            var arr = enemies.filter(blob => {
                return (blob.team & TEAM.BAD);
            });

            if(Survival && arr.length == 0 && (keys.use("Space") || A_button || X_button || buttonClick(restartButton))) {
                timeLeft = 0;
            }
            
            if(!Arena && !allDead && (Survival? timeLeft <= 0: arr.length == 0)) {
                TIME = 0;
                if(!Survival) {
                    // enemies = [main];
                    for(let main of mains) {
                        if(typeof main.nextLevel == "function") main.nextLevel();
                        else console.log(main);
                    }
                }
                // if(!Survival) {
                //     main.spawn();
                // }
                for(let n = 0; n <= multi; n++) {
                    nextLevel();
                    if(n < multi) --level;
                }
            }
            }catch(err) {
                console.error(err);
                console.log(err.stack);
                break;
            }
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
    let olevel = level;
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
            var blob = new Dasher;
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
            var blob = new Summoner;
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
        case 14:
            for(let i = 0; i < 5; i++) {
                var blob = new Bomb();
                blob.spawn();
                enemies.push(blob);
                var blob = new Turret();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 15:
            var blob = new MafiaInvasion;
            bosses.add(blob);
            enemies.push(blob);
        break;
        case 16:
            for(let i = 0; i < 5; i++) {
                var blob = new MafiaGunner();
                blob.spawn();
                enemies.push(blob);
                var blob = new Turret();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 17:
            for(let i = 0; i < 5; i++) {
                var blob = new Pounder();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 18:
            for(let i = 0; i < 5; i++) {
                var blob = new Pounder();
                blob.spawn();
                enemies.push(blob);
                var blob = new Mover();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 19:
            for(let i = 0; i < 4; i++) {
                var blob = new Pounder();
                blob.spawn();
                enemies.push(blob);
                var blob = new Turret();
                blob.spawn();
                enemies.push(blob);
                if(i == 3) continue;
                var blob = new MiniDash();
                blob.spawn();
                enemies.push(blob);
                var blob = new MafiaGunner();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 20:
            var blob = new Squish;
            blob.spawn();
            var spawn = new Spawner(blob);
            enemies.push(spawn);
        break;
        case 21:
            for(let i = 0; i < 5; i++) {
                var blob = new Spinner();
                blob.spawn();
                enemies.push(blob);
                var blob = new Lost();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 22:
            for(let i = 0; i < 10; i++) {
                var blob = new MiniDash();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 23:
            for(let i = 0; i < 10; i++) {
                var blob = new Slime();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 24:
            for(let i = 0; i < 7; i++) {
                var blob = new MiniDash();
                blob.spawn();
                enemies.push(blob);
                var blob = new Spinner();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 25:
            var blob = new BulletHell;
            blob.spawn();
            var spawn = new Spawner(blob);
            enemies.push(spawn);
            // var head = new Snake;
            // var parts = [head];
            // head.spawn();
            // enemies.push(head);
            // for(let i = 1; i < 20; i++) {
            //     var blob = new Snake(head);
            //     parts.push(blob);
            //     blob.spawn();
            //     enemies.push(blob);
            //     head = blob;
            // }
            // var healthbar = new SnakeHealth(...parts);
            // bosses.add(healthbar);
            // enemies.push(healthbar);
        break;
        case 26:
            for(let i = 0; i < 10; i++) {
                var blob = new Runner();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 27:
            for(let i = 0; i < 8; i++) {
                var blob = new Walker();
                blob.spawn();
                enemies.push(blob);
                var blob = new Runner();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 28:
            for(let i = 0; i < 10; i++) {
                var blob = new Gobble();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        case 29:
            for(let i = 0; i < 4; i++) {
                var blob = new Gobble();
                blob.spawn();
                enemies.push(blob);
                var blob = new Runner();
                blob.spawn();
                enemies.push(blob);
                var blob = new MiniDash();
                blob.spawn();
                enemies.push(blob);
                var blob = new Spinner();
                blob.spawn();
                enemies.push(blob);
            }
        break;
        default:
            --level;
        break;
    }
    if(level != olevel) {
        background.recolor();
        background.draw();
    }
}
{
    function hide(num, reverse) {
        if(num < 0 || num > 255) throw RangeError(
            `Number (${num}) is not a 8 bit positive number!`
        );
        var bits = [], code = [];
        for(var i = 0; i < 8; i++) {
            var n = 2 ** i;
            var bit = (num & n)? 1: 0;
            if(MASK & n) {
                bit = bit? 0: 1;
            }
            bits.push(bit);
            num &= ~n;
        }
        var j = 0;
        for(var i of (reverse? BACK: ORDER)) {
            var n = 2 ** j;
            var bit = bits[i];
            if(MASK & n) {
                bit = bit? 0: 1;
            }
            ++j;
            code.push(bit);
        }
        for(var i = 0; i < 8; i++) {
            if(code[i]) {
                num += 2 ** i;
            }
        }

        return num;
    }

    const ORDER = "34057612";
    const BACK  = "26701354";
    const MASK  = 0b10110110;
};
