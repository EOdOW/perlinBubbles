class Bubble {
    constructor(width, height, pos, idx) {
        this.r = 10 + pos * 2;
        this.pos = pos;
        this.x = width / pos;
        this.y = height + this.r + 2;
        this.idx = idx;
        //main bubble container
        this.d3el = d3.select(document.getElementById("svg_bubble_container"));
    }
    
    createSelf() {
    	this.d3el.data([{cx:this.x, cy: this.y}]).append('circle')
            .classed('circle_' + this.idx, true)
			.attr('r', this.r)
			.attr('cx', function(d){return d.cx;})
			.attr('cy', function(d){return d.cy;})
			.attr('fill', 'white');
    }

    move(){
        var dur = 500 * this.r;
        var r = this.r;
    	
        this.d3el.select('circle.circle_' + this.idx)
    		.transition()
    		.duration(dur)
            .attr('cy', (-r * 2 - 2))
            .attrTween('cx', function(d){
                var start = 0;
                var inc = (300 + r + 1) / dur;

                return function(t){
                    d.cx += Math.abs(noise.perlin2(start, start));
                    start += inc;

                    return d.cx;
                };
            });
    }
}