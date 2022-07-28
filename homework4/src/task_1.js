class App extends React.Component {
 
 
    constructor(props) {
        super(props);
  
        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },
  
                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },
  
                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },
  
                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },
  
                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },
  
                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },
  
                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },
  
                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },
  
                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },
  
                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },
  
            ]
        };
        this.sortByYearAsc = this.sortByYearAsc.bind(this);
        this.sortByYearDesc = this.sortByYearDesc.bind(this);
  this.orderUsers = this.orderUsers.bind(this);
  this.onSortChange = this.onSortChange.bind(this);
 
    }
 
 
//Switch between Ascending order and Descending order. Method use with onSortChange.

  orderUsers() {
    if (this.state.order) {
      return this.sortByYearAsc();
    }
  
    return this.sortByYearDesc(); 
  }
  
  //The method that incorporate orderUsers() method to display and update the table being switched.
  onSortChange () {
      
    var orderedUsers = this.orderUsers();
  
    this.setState({
      users: orderedUsers,
      order: !this.state.order,
    });
  }




  //method that creates ascending order for years.
  sortByYearAsc() {

      
    this.setState(prevState => {
      this.state.cars.sort((a, b) => (a.year - b.year))
  });
  
        
  this.setState({cars: this.state.cars});
  }

//method that creates descending order for years.
 sortByYearDesc() {
    this.setState(prevState => {
        this.state.cars.sort((a, b) => (b.year - a.year))
    });
  this.setState({cars: this.state.cars});
  }


  //Method that creates the table body 
 renderTableData(){
     //A place holder  so 'this' can be use inside of the return statement. Bad coding, must fixed. 
   var x = this;
   
 return x.state.cars.map((car,index) => {
    const {manufacturer,model,year,stock,price} = car

//Update the car stocks by 1. p1 set true, will update the car stock. 
    function update(p1 ){
        if(p1 == true) {
            car.stock++;
            x.setState({cars: x.state.cars});
        }
       
    return car.stock;
            }
  
  
  
    return (
   

        <tr key = {index} >
 <td>{manufacturer}</td>
 <td>{model}</td>
 <td >{year}</td>
 <td  >{stock}</td>
 <td> ${price}.00 </td>
   
 <td><button className="test" onClick={function(){update(true)}}>Increment</button></td>

        </tr>
   
    )
 })
  
  
 }
  
  
    render() {
        return (
           
            <table id = 'cars'>
            <thead>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
                <th onClick = {this.onSortChange} >year</th>
                <th>stock</th>
                <th>price</th>
                <th>Option</th>
            </tr>
            </thead>
  
            <tbody>
       
          {this.renderTableData()}  

            </tbody>
        </table>
  
        )
    };
 }
  
 ReactDOM.render(<App />, document.getElementById("app"));
