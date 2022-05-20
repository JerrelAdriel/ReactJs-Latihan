import { useState, useEffect} from 'react';

function About() {
    const [ count, setCount ] = useState(0);
    const [ minus, setMinus ] = useState(100);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count, minus]);

    return (
        <div>
            <h1>Ini About</h1>
            <h1>Ini di klik sebanyak {count} kali</h1>
            <button onClick= {() => setCount(count + 1)}>Klik</button>
            <h1>Ini berkurang sebanyak {minus} kali</h1>
            <button onClick= {() => setMinus(minus - 1)}>Klik</button>
        </div>
    );
}

export default About;