import { NextRequest, NextResponse } from "next/server";

// Visitors with the old password form open can continue to the public site.
export function POST(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url), 303);
}
