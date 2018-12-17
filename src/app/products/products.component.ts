import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


result=[];//Array
income=0;
totalincome=0;
profit=0;

id="";
name="";
price=0;
quantity=0;

isActive=false;
doit=true;
  constructor() { }

  ngOnInit() {
  }

  addproduct(){
    let obj={id:this.id,name:this.name,price:this.price,quantity:this.quantity};
    console.log(obj);

    if(obj.id != null && obj.name != null && obj.price != 0 &&  obj.quantity != 0){
      this.result.push(obj);
      setTimeout(function(){ 
        document.getElementById("Msg").append("add product");
      },
         1000);
      //document.getElementById("Msg").append("add product");
      console.log("add product ");
      //console.log(document.getElementById("Msg"));
    }else{
      setTimeout(function(){ 
        document.getElementById("Msg").append("can not add product,Please fill product Data id,name,price,quantity");
      },
        1000);
      //document.getElementById("Msg").append("can not add product,Please fill product Data id,name,price,quantity");
      console.log("can not add product,Please fill product Data id,name,price,quantity");
      //console.log(document.getElementById("Msg"));
    }
 

  }
  printproductData(){
    this.isActive=!this.isActive;
    console.log(this.result);
  }

  sellproduct(){

    if(this.result != null){
      let proquentity=this.quantity;
      let proprice=this.price;
      let totalprice=0;
      let totalpriceallpro=0;
      for (let i = 0; i < this.result.length; i++) {
          if (this.result[i].name === this.name) {
              if(this.result[i].quantity >= this.quantity){
                  totalprice=proquentity*proprice;
                  this.income +=totalprice;
                  console.log(this.income);

                          totalpriceallpro=this.result[i].quantity*this.result[i].price ; 
                          this.totalincome +=totalpriceallpro;
                          console.log(this.totalincome);
                          console.log(this.profit);
                      
                          this.profit=this.totalincome-this.income;
                      console.log(this.profit); 
  
              }else{
                setTimeout(function(){ 
                  document.getElementById("Msg").append("aviable quantity less than request quantity");
                },
                1000);
                //document.getElementById("Msg").append("aviable quantity less than request quantity");
                  console.log("aviable quantity less than request quantity");  
              }
          }else{
            setTimeout(function(){ 
              document.getElementById("Msg").append("item not found");
            },
              1000);
            //document.getElementById("Msg").append("item not found");
              console.log("item not found");  
          }
      }
    }else{
      setTimeout(function(){ 
        document.getElementById("Msg").append("the store product empty,Please Add Product ");
      },
        1000);
      //document.getElementById("Msg").append("the store product empty,Please Add Product ");

    }
 
}

}
