import { NextResponse } from "next/server";
export default function middleware(req) {
  let verify = req.cookies.get("loggedin");

  let url = req.url;
  if (
    (!verify && url.includes("/dashboards")) ||
    (!verify && url.includes("/invoice")) ||
    (!verify && url.includes("/dashBoard"))
  ) {
    return NextResponse.redirect(`http://localhost:3000`);
  }
  if (verify && url === `http://localhost:3000/`) {
    return NextResponse.redirect(`http://localhost:3000/dashBoard`);
  }
}
