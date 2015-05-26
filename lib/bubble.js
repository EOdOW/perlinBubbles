'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bubble = (function () {
    function Bubble(width, height, pos, idx) {
        _classCallCheck(this, Bubble);

        this.r = 10 + pos * 2;
        this.pos = pos;
        this.x = width / pos;
        this.y = height + this.r + 2;
        this.idx = idx;
        //main bubble container
        this.d3el = d3.select(document.getElementById('svg_bubble_container'));
    }

    _createClass(Bubble, [{
        key: 'createSelf',
        value: function createSelf() {
            this.d3el.data([{ cx: this.x, cy: this.y }]).append('circle').classed('circle_' + this.idx, true).attr('r', this.r).attr('cx', function (d) {
                return d.cx;
            }).attr('cy', function (d) {
                return d.cy;
            }).attr('fill', 'white');
        }
    }, {
        key: 'move',
        value: function move() {
            var dur = 500 * this.r;
            var r = this.r;

            this.d3el.select('circle.circle_' + this.idx).transition().duration(dur).attr('cy', -r * 2 - 2).attrTween('cx', function (d) {
                var y = 0;
                var x = 0;
                var inc = (300 + r + 1) / dur;
                console.log('INDC: ', inc);
                return function (t) {
                    d.cx += Math.abs(noise.perlin2(x, y));

                    y += inc;
                    x += inc;

                    return d.cx;
                };
            });
        }
    }]);

    return Bubble;
})();