import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if((new Date() < new Date('2024-07-27 14:50:00'))) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/invite/:id*',
}