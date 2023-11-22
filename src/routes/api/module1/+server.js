import {error, json} from "@sveltejs/kit";

export async function GET({url, locals, cookies}) {
  let session = await locals.getSession();
  if(!session) {
    throw error(401, "Forbidden");
  }

  return json({
    success: true,
    authenticatedUser: session.user
  });
}
