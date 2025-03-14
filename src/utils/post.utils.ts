import type { Post } from "../types/post.type";

export const mapPosts = (posts: Record<string, any>[]): Post[] => {
    const mappedPosts: Post[] = posts
        .map((v) => ({
            url: v["url"],
            frontmatter: v["frontmatter"],
        }))
        .sort(
            (a, b) =>
                new Date(b.frontmatter.pubDate).valueOf() -
                new Date(a.frontmatter.pubDate).valueOf()
        );

    return mappedPosts;
};

export const findTags = (posts: Post[]): string[] => {
    const tags = new Set<string>();
    tags.add("general");

    posts.forEach((post) => {
        post.frontmatter.tags?.forEach((tag) => {
            tags.add(tag);
        });
    });

    return Array.from(tags);
};

export const filterPostsByTag = (posts: Post[], tag: string): Post[] => {
    if (tag === "general") {
        return posts;
    }

    return posts.filter((post) =>
        post.frontmatter.tags?.includes(tag)
    );
}; 