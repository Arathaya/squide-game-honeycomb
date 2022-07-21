class Box{
    constructor(x,y,w,h)
	{
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
	}
	display()
	{
			
				

			push()
		//	translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(this.x,this.y,this.w, this.h);
			pop()
			
	}

}






