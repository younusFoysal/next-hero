import {NextResponse} from "next/server";
import {cookies} from "next/headers";


// // const user = false;
// const user = true ;
// const cookieName = 'hero' // Set Cookie Name: token & Value: hero


export const middleware = (request) => {

    //console.log(request.cookies.get('token'))

    //const cookies = request.cookies.get('token')

    // if (!cookies || cookies.value !== cookieName){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    //
    // if (!user){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }


    // after building login page

    const token = cookies(request).get('next-auth.session-token')

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }


    return NextResponse.next()
}

export const config = {
    matcher : ['/dashboard', '/services']
}