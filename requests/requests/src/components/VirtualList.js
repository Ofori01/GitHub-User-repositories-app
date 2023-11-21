import React from 'react';
import { faker } from '@faker-js/faker';
import {FixedSizeList as List} from 'react-window';


const VirtualList = () => {
    const data = Array(500).map(
        ()=>({
            name : faker.person.fullName(),
            email: faker.internet.email(),
            //{/*avatar : faker.internet.avatar()/*s}
        })
    )

    const user = ({style , index}) => (
        <div style = {{...style , display:'flex'}}>
            {/*<img src = {data[index].avatar} alt = {data[index].name} />*/}
            <p> {data[index].name} - {data[index].email} </p>

        </div>
    );

    




  return (
    <div>
    <List 
    height = {window.innerHeight}
    width = {window.innerWidth- 20}
    itemCount = {data.length}
    itemSize = {50}
    > 
    {user}
    </List>
      
    </div>
  )
}

export default VirtualList
