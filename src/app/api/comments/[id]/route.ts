import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const comment = comments.find(c => c.id === parseInt(id));
  if (comment) {
    return new Response(JSON.stringify(comment), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404
    });
  }
}