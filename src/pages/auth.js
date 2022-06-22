import { mount } from 'auth/App'
import React, { useRef, useEffect } from 'react'

export default function AuthPage({basename}) {
	const ref = useRef(null);

	useEffect(() => {
		mount({el: ref.current, basename, isRemote: true})
	}, [])

	return <div ref={ref} />
}