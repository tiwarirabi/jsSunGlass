class SunGlass {
    constructor(){
        this.image = new Image();

        let fileName =  (Math.floor(Math.random() * 4) + 1) ;
        this.image.src = "sunglass/sunglass" + fileName  + ".png";
        this.image.onload = this.initGlass();
        this.initGlass = this.initGlass.bind(this);

        document.addEventListener('keyup',   () => {
            let fileName =  (Math.floor(Math.random() * 4) + 1);
            this.image.src = "sunglass/sunglass" + fileName  + ".png";
        });
    }
    
    initGlass(){
        this.width = this.image.width;
        this.height = this.image.height;
    }

    glassCoordinates(faceCoordinates){
        console.log(this.width, this.height);
        return {
            x:faceCoordinates.x ,
            y: (faceCoordinates.height/3) + faceCoordinates.y ,
            width: faceCoordinates.width,
            height:((faceCoordinates.width-20) * this.image.height) / this.image.width,
        };
    }

}

