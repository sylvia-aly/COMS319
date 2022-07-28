"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            cars: [{
                "manufacturer": "Toyota",
                "model": "Rav4",
                "year": 2008,
                "stock": 3,
                "price": 8500
            }, {
                "manufacturer": "Toyota",
                "model": "Camry",
                "year": 2009,
                "stock": 2,
                "price": 6500
            }, {
                "manufacturer": "Toyota",
                "model": "Tacoma",
                "year": 2016,
                "stock": 1,
                "price": 22000
            }, {
                "manufacturer": "BMW",
                "model": "i3",
                "year": 2012,
                "stock": 5,
                "price": 12000
            }, {
                "manufacturer": "Chevy",
                "model": "Malibu",
                "year": 2015,
                "stock": 2,
                "price": 10000
            }, {
                "manufacturer": "Honda",
                "model": "Accord",
                "year": 2013,
                "stock": 1,
                "price": 9000
            }, {
                "manufacturer": "Hyundai",
                "model": "Elantra",
                "year": 2013,
                "stock": 2,
                "price": 7000
            }, {
                "manufacturer": "Chevy",
                "model": "Cruze",
                "year": 2012,
                "stock": 2,
                "price": 5500
            }, {
                "manufacturer": "Dodge",
                "model": "Charger",
                "year": 2013,
                "stock": 2,
                "price": 16000
            }, {
                "manufacturer": "Ford",
                "model": "Mustang",
                "year": 2009,
                "stock": 1,
                "price": 8000
            }]
        };
        _this.sortByYearAsc = _this.sortByYearAsc.bind(_this);
        _this.sortByYearDesc = _this.sortByYearDesc.bind(_this);
        _this.orderUsers = _this.orderUsers.bind(_this);
        _this.onSortChange = _this.onSortChange.bind(_this);

        return _this;
    }

    //Switch between Ascending order and Descending order. Method use with onSortChange.

    _createClass(App, [{
        key: "orderUsers",
        value: function orderUsers() {
            if (this.state.order) {
                return this.sortByYearAsc();
            }

            return this.sortByYearDesc();
        }

        //The method that incorporate orderUsers() method to display and update the table being switched.

    }, {
        key: "onSortChange",
        value: function onSortChange() {

            var orderedUsers = this.orderUsers();

            this.setState({
                users: orderedUsers,
                order: !this.state.order
            });
        }

        //method that creates ascending order for years.

    }, {
        key: "sortByYearAsc",
        value: function sortByYearAsc() {
            var _this2 = this;

            this.setState(function (prevState) {
                _this2.state.cars.sort(function (a, b) {
                    return a.year - b.year;
                });
            });

            this.setState({ cars: this.state.cars });
        }

        //method that creates descending order for years.

    }, {
        key: "sortByYearDesc",
        value: function sortByYearDesc() {
            var _this3 = this;

            this.setState(function (prevState) {
                _this3.state.cars.sort(function (a, b) {
                    return b.year - a.year;
                });
            });
            this.setState({ cars: this.state.cars });
        }

        //Method that creates the table body 

    }, {
        key: "renderTableData",
        value: function renderTableData() {
            //A place holder  so 'this' can be use inside of the return statement. Bad coding, must fixed. 
            var x = this;

            return x.state.cars.map(function (car, index) {
                var manufacturer = car.manufacturer,
                    model = car.model,
                    year = car.year,
                    stock = car.stock,
                    price = car.price;

                //Update the car stocks by 1. p1 set true, will update the car stock. 

                function update(p1) {
                    if (p1 == true) {
                        car.stock++;
                        x.setState({ cars: x.state.cars });
                    }

                    return car.stock;
                }

                return React.createElement(
                    "tr",
                    { key: index },
                    React.createElement(
                        "td",
                        null,
                        manufacturer
                    ),
                    React.createElement(
                        "td",
                        null,
                        model
                    ),
                    React.createElement(
                        "td",
                        null,
                        year
                    ),
                    React.createElement(
                        "td",
                        null,
                        stock
                    ),
                    React.createElement(
                        "td",
                        null,
                        " $",
                        price,
                        ".00 "
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "button",
                            { className: "test", onClick: function onClick() {
                                    update(true);
                                } },
                            "Increment"
                        )
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { id: "cars" },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "manufacturer"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "model"
                        ),
                        React.createElement(
                            "th",
                            { onClick: this.onSortChange },
                            "year"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "stock"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "price"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Option"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    this.renderTableData()
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
