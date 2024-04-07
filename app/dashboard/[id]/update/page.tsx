import Breadcrumbs from "@/components/Dashboard/Breadcrumbs";
import Form from "@/components/Dashboard/CreateForm";
import { fetchBooksById } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const getDetailById = await fetchBooksById(params?.id || "");

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          {
            label: "Update Book Status",
            href: "/dashboard/create",
            active: true,
          },
        ]}
      />
      <Form bookItem={getDetailById[0]} />
    </main>
  );
}
