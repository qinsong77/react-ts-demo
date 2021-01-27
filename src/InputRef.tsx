import React, {useState, useEffect} from 'react'

// 类似vue的emit
interface Props {
	value?: string,
	maxLength?: number,
	ref: React.Ref<any>
}

export default function App({value, maxLength}: Props) {
	const [state, setState] = useState('')
	useEffect(() => {
		value && setState(value)
	}, [value])
	
	function updateValue(inputValue: string) {
		if (maxLength !== undefined && inputValue.length > maxLength) return
		else setState(inputValue)
	}
	
	return (
		<div className='input-item'>
			<input value={state} onInput={(e => updateValue(e.currentTarget.value))}
			       style={{paddingRight: maxLength !== undefined ? '36px' : '10px'}}/>
			{maxLength !== undefined &&
			<span>{state.length + '/' + maxLength}</span>
			}
		</div>
	)
}
