import { useState, useEffect } from 'react';

export default function Useeffect() {
    const [third, setThird] = useState(0); // or any initial value

    useEffect(() => {
        alert("Welcome to my page");
    }, []); 

    useEffect(()=>{
        alert("the count was change ")
    }, [third])

    return (
        <div>Useeffect</div>
    );
}
