import Link from "next/link";
// import { use } from "react" use from client component won't work in server component, it will throw error "use is not defined"

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}

// we dont need async if its client component
export default async function ArticlePage({ params, searchParams }: Props) {
  const { articleId } = await params; // remove await and use(params) for client component to work
  const { lang = "en" } = await searchParams; // remove await and use(searchParams) for client component to work
  return (
    <main>
      <h1 className="bg-green-400 text-white px-10 py-5">
        Article: {articleId}
      </h1>
      <p className="px-10 py-5">Reading in Language: {lang}</p>
      <div className="flex px-10 py-5 gap-5">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </main>
  );
}