import React, {Component} from "react";
import "./TodoList.css";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this)
    }

    addItem(e){
        let itemArray = this.state.items
        if(this._inputElemet.value !== ""){
            itemArray.unshift({
                text: this._inputElemet.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElemet.value = ""
        }
        console.log(this.state.items)

        e.preventDefault()
    }

    deleteItems(key){
        var filtredArray = this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState({
            items: filtredArray
        })
    }

    render() {
        return(
            <div className="mainContainer" >
                <div className="header" >
                    <form onSubmit={this.addItem} > 
                        <input ref={(a) => this._inputElemet = a}
                            placeholder="Your task" ></input>
                        <button type="submit" >OK</button>
                    </form>
                </div>
                <TodoItems delete={this.deleteItems} addedItems={this.state.items} />
            </div>
        );
    }
}

export default TodoList;