import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeList from "./CoffeeList";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedCoffee !== null) {
      this.setState({
        pageView: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        pageView: !prevState.pageView
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList, pageView: false})
  }

  handleChangingselectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id).concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false, 
      selectedCoffee: null
    });
  }

  handleSellCoffee = (coffeeToSell) => {
    if(coffeeToSell.quantity <= 0){
      let newQuantity = { ...coffeeToSell, quantity: 0 }
      const soldMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id).concat(newQuantity);
      this.setState({
        mainCoffeeList: soldMainCoffeeList,
        selectedCoffee: null
      })
    } else {
      let number = parseInt(coffeeToSell.quantity);
      let newQuantity = { ...coffeeToSell, quantity: (number - 1) }
      const soldMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id).concat(newQuantity);
      this.setState({
        mainCoffeeList: soldMainCoffeeList,
        selectedCoffee: null
      });
    }
  }

  render() {
    let currentPage = null;
    let buttonText = null;

    if(this.state.editing === true) {
      currentPage = <EditCoffeeForm coffeeObject={this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList}/>
      buttonText="Return to List";
    } else if (this.state.selectedCoffee !== null) {
      currentPage = <CoffeeDetail coffeeObject = {this.state.selectedCoffee} onClickingDelete={this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick} sell={this.handleSellCoffee}/>
      buttonText="Return to List"
    } else if (this.state.pageView) {
      currentPage = <NewCoffeeForm onNewCoffeeCreation = {this.handleAddingNewCoffeeToList}/>
      buttonText="Return to List"
    } else {
      currentPage = <CoffeeList coffeeList = {this.state.mainCoffeeList} onCoffeeSelection = {this.handleChangingselectedCoffee}/>
      buttonText = "Buy Coffee"
    }
    return(
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;