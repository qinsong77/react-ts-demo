import React, { useState, useEffect, useMemo, useRef } from 'react';

export default function App(props){
	const [count, setCount] = useState(0);

	const doubleCount = useMemo(() => {
		return 2 * count;
	}, [count]);

	const couterRef = useRef();

	useEffect(() => {
		document.title = `The value is ${count}`;
		console.log(couterRef.current);
	}, [count]);

	return (
		<>
			<button ref={couterRef} onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
		</>
	);
}
