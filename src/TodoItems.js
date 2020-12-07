import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoItem extends Component {
    constructor(props){
        super(props)

        this.createTask = this.createTask.bind(this)
    }

    delete(key){ 
        this.props.delete(key)
    }

    createTask(item){
        return <li onClick={() => this.delete(item.key)} key={item.key} >{item.text}</li>
    }

    render() {
        let todoAdded = this.props.addedItems;
        let tasksList = todoAdded.map(this.createTask)

        return(
            <ul className="theList" >
                <FlipMove duration={250} easing="ease-out" >
                    {tasksList}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItem;