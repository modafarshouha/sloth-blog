import { type CollectionEntry, getCollection } from 'astro:content';

/**
 * Posts dated in the future are hidden until a build runs on or after their pubDate.
 * Set PUBLISH_AS_OF (e.g. 2026-11-23) to build or preview as if it were that date.
 */
function publishCutoff(): Date {
	const override = process.env.PUBLISH_AS_OF;
	if (override) {
		const parsed = new Date(override);
		if (!Number.isNaN(parsed.valueOf())) return parsed;
	}
	return new Date();
}

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const cutoff = publishCutoff();
	return getCollection('blog', ({ data }) => data.pubDate.valueOf() <= cutoff.valueOf());
}
