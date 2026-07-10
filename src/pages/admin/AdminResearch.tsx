import CrudPage from "./CrudPage";

export default function AdminResearch() {
  return (
    <CrudPage
      table="research"
      title="Research"
      fields={[
        { key: "title", label: "Title", type: "text", required: true },
        { key: "category", label: "Category", type: "text" },
        { key: "author", label: "Author", type: "text" },
        { key: "image_url", label: "Image URL", type: "text" },
        { key: "summary", label: "Summary", type: "textarea" },
        { key: "content", label: "Content", type: "textarea" },
        { key: "published", label: "Published", type: "boolean" },
      ]}
      listColumns={["title", "category", "author", "published"]}
    />
  );
}