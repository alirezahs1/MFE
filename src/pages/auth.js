import { mount } from 'auth/bootstrap'
import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthPage({basename}) {
	
	const ref = useRef(null);

	const navigate = useNavigate();

	const afterLogin = () => {
		navigate("/profile");
	}

	useEffect(() => {
		mount({el: ref.current, basename, isRemote: true, afterLogin})
	}, [])

	return <div ref={ref} />
}