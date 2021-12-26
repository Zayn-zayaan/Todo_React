import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from './ListItem'

function TodoList() {

    const getLocalData = () => {
        const lists = localStorage.getItem("mytodo");
        if(lists){
            return JSON.parse(lists);
        }
        else{
            return [];
        }
    }

    const [item, setItem] = useState("")
    const [newItem, setnewItem] = useState(getLocalData());
    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {
        if(!item){
            alert("plz fill the data")
        }
        else{
            const upitem = {
                id: new Date().getTime().toString(),
                name: item
            }
            setnewItem((olditems) => {
                return [...olditems,upitem]
            });
            setItem("");
        }  
    }

    useEffect(() => {
        localStorage.setItem("mytodo", JSON.stringify(newItem));
    }, [newItem])

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List  </h1>
                    <br />

                    <input type="text" placeholder='Add an item' value={item} onChange={itemEvent} />
                    <Button variant="contained" color="success" className='newBtn' onClick={listOfItems}>
                        <AddIcon />
                    </Button>

                    <br />
                    <ol>

                        {newItem.map((val, ind) => {
                            return <ListItem key={val.id} val={val} />
                        })}
                    </ol>
                    <Button variant="outlined" color="error" onClick={() => {
                        setnewItem([]);
                    }}>Delete todo</Button>
                </div>
            </div>
        </>
    )
}

export default TodoList
