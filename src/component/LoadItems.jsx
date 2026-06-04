import {useContext, useEffect, useState} from 'react'
import ThemeContext from '../store/ThemeContext';
import {todosClientModel} from '../utils/ModelUtil';

const LoadItems = () => {

    const{ Item, AllItemsLoad } = useContext(ThemeContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://todo-backend-production-a0e2.up.railway.app/todos')
        .then(response => response.json())
        .then(items =>{
            const newItems = items.map(item=> todosClientModel(item));
            AllItemsLoad(newItems);
        })
        .finally(()=>
            setLoading(false));
        }, []);
 
  return (
    <>
      {loading && (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && Item.length === 0 && <p>No items found.</p>}
    </>
  )
}

export default LoadItems