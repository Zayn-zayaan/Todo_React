import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem(props) {
    const [line, setLine] = useState(false)
    const cutIt = () => {
        setLine(true);
    };
    return (
        <div className='todo_style'>
            <span onClick={cutIt}><DeleteIcon className='deleteIcon' /></span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.val.name}</li>
        </div>
        
    )
}

export default ListItem
