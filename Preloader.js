const allImages =[
    'sunglass/sunglass1.png',
    'sunglass/sunglass2.png',
    'sunglass/sunglass3.png',
    'sunglass/sunglass4.png',
];

class Preloader{
    constructor(){
        this.totalImages = allImages.length;
        this.loadedImages = 0;
    }

    load(callback,that){
        allImages.forEach((image)=>{
            var img = new Image();
            img.src=image;
            img.onload = () =>{
                this.loadedImages++;
                if(this.loadedImages>= this.totalImages){
                    callback(that);
                }
            }
        });
    }
}