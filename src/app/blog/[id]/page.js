import ClientPage from "./ClientPage";
import postsData from "../../../data/posts.json";

export async function generateStaticParams() {
    return postsData.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function Page({ params }) {
    const { id } = await params;
    return <ClientPage id={id} />;
}
