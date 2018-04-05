
class ToDo {
    _id:string;
    address : {building:string,coord:string,street:string,zipcode:string};
    borough:string;
    cuisine:string;
    name:string;
    restaurant_id:string;

    //grade a ajouter

    
    constructor(
    ){
     
        this.borough = ""
        this.cuisine = ""
        this.name = ""
        this.restaurant_id = ""
    }
}

export default ToDo;