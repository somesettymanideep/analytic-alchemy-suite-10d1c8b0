import CrudPage from "./CrudPage";

export default function AdminBlogs() {
  return (
    <CrudPage
      table="blogs"
      title="Blogs"
      fields={[
        { key: "title", label: "Title", type: "text", required: true },
        { key: "category", label: "Category", type: "text" },
        { key: "author", label: "Author", type: "text" },
        { key: "image_url", label: "Image URL", type: "text" },
        { key: "excerpt", label: "Excerpt", type: "textarea" },
        { key: "content", label: "Content", type: "textarea" },
        { key: "published", label: "Published", type: "boolean" },
      ]}
      listColumns={["title", "category", "author", "published"]}
    />
  );
}