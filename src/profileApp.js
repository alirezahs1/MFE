import { mount } from 'profile/ProfileApp'
import React, { useRef, useEffect } from 'react'

export default ({basename}) => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current, basename)
	}, [])

	return <div ref={ref} />
}