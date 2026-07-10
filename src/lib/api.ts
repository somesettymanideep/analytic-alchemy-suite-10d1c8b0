// Base URL for the FastAPI backend (Api/). In local dev this is proxied via
// vite.config.ts (`/api` -> http://localhost:8000). In production, set
// VITE_API_URL to the deployed backend's origin (e.g. https://api.nextgenlytics.com).
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function parseErrorMessage(res: Response): Promise<string> {
  try {
    const body = await res.json();
    if (typeof body?.message === "string") return body.message;
    if (typeof body?.detail === "string") return body.detail;
    if (Array.isArray(body?.detail)) {
      return body.detail.map((d: { msg?: string }) => d.msg).filter(Boolean).join(", ") || "Submission failed.";
    }
  } catch {
    // response wasn't JSON
  }
  return "Submission failed. Please try again.";
}

export async function postForm<T = { success: boolean; message: string }>(
  path: string,
  payload: Record<string, unknown>
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new ApiError(await parseErrorMessage(res), res.status);
  return res.json();
}

export async function postFormData<T = { success: boolean; message: string }>(
  path: string,
  formData: FormData
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new ApiError(await parseErrorMessage(res), res.status);
  return res.json();
}
