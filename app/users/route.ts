import { NextResponse } from "next/server";

/* ts => for  TypeScript files that do not contain JSX syntax. 
tsx => or TypeScript files that contain JSX syntax. 
*/
export function GET(){
    return NextResponse.json({
        hello: "trello",
    })
}

export function POST(){
    return NextResponse.json({
        hello: "trello",
    })
}

export function PATCH(){
    return NextResponse.json({
        hello: "trello",
    })
}

