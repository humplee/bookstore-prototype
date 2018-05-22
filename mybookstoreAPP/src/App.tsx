import React = require("react");
import {Button, ButtonGroup,Table} from "react-bootstrap";





 interface IBook {
    _id: string;

 book1:{
     index:number;
    name: string;
    price: number;
    stock: number;
    putincart:number;

 };

}
let aa:IBook[];


//let texts:string="";

//let bookAmountArray:number[];

export default class App extends React.Component<any, any>{
    constructor(props: any){
        super(props);
       // const user = this.context.initialState.App ? this.context.initialState.App : {};
        this.state = {
            textrender: "loading...",
            bookbuffer:undefined,
            isDataLoaded:false,
            bookamountbuffer:undefined,
            isToggleOn:true,
            requestexist:false,
            requestsent:false

        };
        this.handleClick = this.handleClick.bind(this);
    }
    public handleClick(returnedIndex:number,isPlus:boolean) {
      if(isPlus){  aa[returnedIndex].book1.putincart+=1;}
      else if(aa[returnedIndex].book1.putincart>0){aa[returnedIndex].book1.putincart-=1;}

        this.setState((prevState:any) => ({
            isToggleOn: !prevState.isToggleOn,
    }));

    }

    public submitCart(){
         let memo:string="***RECORD START***\n";
        for (let i:number = 0; i < aa.length; i+=1) {
          if(aa[i].book1.putincart>0){  memo=memo+"-ITEM"+i.toString()+aa[i].book1.name+"    -QTY  "+aa[i].book1.putincart+"\n";}

   /* cc.book_id=aa[i]._id;
    cc.name=aa[i].book1.name;
    cc.amount=aa[i].book1.putincart;*/
}
memo=memo+"***RECORD END***";
console.log(memo);
         fetch("/sendOrderToSeverCl", {
            method: "POST",
             body:JSON.stringify(memo),
            headers : {
             "Content-Type": "application/x-www-form-urlencoded"
            },

        }).then((res) => res.json())
            .catch((err)=>console.log(err));
    }

    public componentDidMount() {

        fetch("/getBookListCl",{method:"GET"})
         .then((resp) => resp.json())
            .then(function(data:IBook[]) {
                aa=data;
// bookAmountArray=new Array(aa.length);
                   for (let i:number = 0; i < aa.length; i++) {
                       aa[i].book1.index=i;
                      // bookAmountArray[i]=0;
                       aa[i].book1.putincart=0;
                    }
            }
            ).then(texts => this.setState({ textrender: "book list",bookbuffer:aa,isDataLoaded:true}));
    }
    public render(){

        let listItems:any;
        let sendFlag:any;
      /*  let listAmount:any;
        if (this.state.isDataLoaded){   listAmount = bookAmountArray.map((bookAmountArray) =>
            <tr key={bookAmountArray}>
                <td>{bookAmountArray.valueOf()}</td>
            </tr>

        );}*/
        if (this.state.isDataLoaded){    listItems = aa.map((book1) =>
            <tr key={book1._id}>
                <td>{book1.book1.name}</td>
                <td>{book1.book1.price}</td>
                <td>{book1.book1.stock}</td>
                <td>
                    <ButtonGroup>
                    <Button id={book1._id} onClick={this.handleClick.bind(this,book1.book1.index,true)}>+</Button>
                    <Button id={book1._id} onClick={this.handleClick.bind(this,book1.book1.index,false)}>-</Button>
                </ButtonGroup>
                </td>
                <td>{book1.book1.putincart}</td>
            </tr>
        );}
if(this.state.requestexist && this.state.requestsent){
    sendFlag=(
        <p>sending successfully</p>

    );
}


        //texts= "c";
        return (
            <div className="Users" >
                <Table>
                    <thead>
                    <tr>
                    <th>book name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>change amount</th>
                    <th>amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </Table>
                <Button onClick={this.submitCart}>Submit</Button>
                {sendFlag}
            </div>
        );
    }
}



/*
  {this.state.hits.map((hit:any) =>
                    <div key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </div>
                )}
 */
/*

}*/
/*

*/


module.exports = App;
