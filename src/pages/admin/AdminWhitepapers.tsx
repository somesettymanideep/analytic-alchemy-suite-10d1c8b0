import CrudPage from "./CrudPage";

export default function AdminWhitepapers() {
  return (
    <CrudPage
      table="whitepapers"
      title="Whitepapers"
      fields={[
        { key: "title", label: "Title", type: "text", required: true },
        { key: "category", label: "Category", type: "text" },
        { key: "author", label: "Author", type: "text" },
        { key: "image_url", label: "Image URL", type: "text" },
        { key: "file_url", label: "PDF/File URL", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "published", label: "Published", type: "boolean" },
      ]}
      listColumns={["title", "category", "author", "published"]}
    />
  );
}