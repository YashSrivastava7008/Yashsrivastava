import ClientPage from "./ClientPage";

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ];
}

export default async function Page({ params }) {
    const { id } = await params;
    return <ClientPage id={id} />;
}
