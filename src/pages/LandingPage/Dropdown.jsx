import React from 'react'
import { Link } from 'react-router-dom'
import { PublicRoutes } from 'routes.const'

const { HOMEPAGE, CONTACT, ABOUT } = PublicRoutes;

export default function Dropdown() {
    return (
        <div className="grid grid-rows-3 text-center items-center bg-yellow-500 font-mono" >
            <Link className="p-4" to={HOMEPAGE}>Trang chủ</Link>
            <Link className="p-4" to={CONTACT}>Liên hệ</Link>
            <Link className="p-4" to={ABOUT}>Giới thiệu</Link>
        </div>
    )
}
