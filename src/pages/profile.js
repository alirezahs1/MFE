import { mount } from 'profile/bootstrap'
import React, { useRef, useEffect } from 'react'

export default function ProfilePage({basename}) {
	const ref = useRef(null);

	useEffect(() => {
		mount({el: ref.current, basename, isRemote: true})
	}, [])

	return <div ref={ref} />
}