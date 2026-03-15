import ClientPage from "./ClientPage";

import projects from "../../../data/projects.json";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Page({ params }) {
    const { id } = await params;
    return <ClientPage id={id} />;
}
