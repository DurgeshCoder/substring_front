export async function fetchJSON<T>(
    url: string,
    useBaseUrl: boolean = true,
    config?: {
        revalidate?: number;
        cache?: "no-store" | "force-cache";
    },
    options: RequestInit = {}
): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${useBaseUrl ? baseUrl : ""}${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
        next:
            config?.revalidate !== undefined
                ? { revalidate: config.revalidate }
                : undefined,
        cache: config?.cache,
    });
    // console.log(res);
    if (!res.ok) {
        throw new Error(`Fetch error ${res.status}: ${res.statusText}`);
    }

    return res.json();
}